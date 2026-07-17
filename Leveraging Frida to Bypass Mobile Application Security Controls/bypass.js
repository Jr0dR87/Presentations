 if (Swift.available){
    console.log("[+] Successfully Connected");

    const mod = Process.getModuleByName("DarkBank.debug.dylib");
    const target = mod.enumerateSymbols().find(function (s) {
        return s.name === "$s16IOSSecuritySuite16JailbreakCheckerC13amIJailbrokenSbyFZ";
    });
    
    if (!target) {
        console.log("[-] Symbol not found");
    } else {
        console.log("[*] Hooking amIJailbroken() @ " + target.address);
        Interceptor.attach(target.address, {
            onEnter: function () {
                console.log("[+] amIJailbroken() called");
            },
            onLeave: function (retval) {
                console.log("[+] amIJailbroken() returned: " + retval + " -> forcing false");
                retval.replace(0);
                console.log("[+] The Application should be running now :) ")
            }
        });
    }
}
else{
    console.log("[-] Swift Not Available")
}

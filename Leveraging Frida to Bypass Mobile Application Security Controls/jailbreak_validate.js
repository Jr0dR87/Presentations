 if (Swift.available){
    console.log("[+] Successfully Connected");

    const mod = Process.getModuleByName("DarkBank.debug.dylib");
    const target = mod.enumerateSymbols().find(function (s) {
        return s.name === "$s16IOSSecuritySuite16JailbreakCheckerC13amIJailbrokenSbyFZ";
    });
    
    if (!target) {
        console.log("[-] Symbol not found");
    } else {
        console.log("[*] Watching amIJailbroken() @ " + target.address + " (observe only, no changes)");
        Interceptor.attach(target.address, {
            onEnter: function () {
                console.log("[+] amIJailbroken() called");
            },
            onLeave: function (retval) {
                console.log("[+] amIJailbroken() returned: " + retval);
            }
        });
    }
}
else{
    console.log("[-] Swift Not Available")
}

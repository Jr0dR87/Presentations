 if (Swift.available){
    console.log("[+] Successfully Connected and Detected Swift");
    const mod = Process.getModuleByName("DarkBank");
    const target = mod.enumerateSymbols().find(function (symbol) {
        return symbol.name === "$s16IOSSecuritySuiteAAC13amIJailbrokenSbyFZ";
    });
    if (!target) {
        console.log("[-] Symbol not found");
    } else {
        console.log("[+] Hooking amIJailbroken() to set to false");
        Interceptor.attach(target.address, {
            onLeave: function (retval) {
                retval.replace(0); // Set function to return false.
            }
        });
    }
}
else{
    console.log("[-] Swift Not Available")
}

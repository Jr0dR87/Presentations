 if (Swift.available){
    console.log("[+] Successfully Connected and Detected Swift");
    const mod = Process.getModuleByName("DarkBank");
    const target = mod.enumerateSymbols().find(function (symbol) {
        return symbol.name === "$s16IOSSecuritySuiteAAC13amIJailbrokenSbyFZ";
    });
    if (!target) {
        console.log("[-] Symbol not found");
    } else {
        console.log("[+] Hooking amIJailbroken()");
        Interceptor.attach(target.address, {
            onEnter: function (retval) {
                console.log("Boolean Value for amIJailborken() Set to: " + Boolean(retval))
            }
        });
    }
}
else{
    console.log("[-] Swift Not Available")
}

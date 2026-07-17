if (Swift.available){
    console.log("[+] Successfully Connected");

    const mod = Process.getModuleByName("DarkBank.debug.dylib");
    const matches = mod.enumerateSymbols().filter(function (s) {
        return s.name.indexOf("JailbreakChecker");
    });
    
    console.log("[*] " + matches.length + " symbol(s) found:\n");
    matches.forEach(function (s) {
        console.log(s.address + "  " + s.name);
    });
}
else{
    console.log("[-] Swift Not Available")
}

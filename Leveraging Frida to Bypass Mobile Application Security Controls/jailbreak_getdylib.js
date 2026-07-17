if (Swift.available){
    console.log("[+] Successfully Connected");

    Process.enumerateModules().forEach(function (mod) {
        var matches = mod.enumerateSymbols().filter(function (s) {
            return s.name.indexOf("JailbreakChecker") !== -1;
        });
        if (matches.length > 0) {
            console.log("[*] Found " + matches.length + " match(es) in: " + mod.name);
        }
    });
}
else{
    console.log("[-] Swift Not Available")
}

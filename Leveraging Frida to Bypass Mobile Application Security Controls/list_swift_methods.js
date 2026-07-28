if (Swift.available) {
    console.log("[+] Successfully Connected and Detected Swift");
    const moduleMap = new ModuleMap();
    moduleMap.values().forEach(function (mod) {
        const matches = mod.enumerateSymbols().filter(function (symbol) {
            return symbol.name.includes("IOSSecuritySuite");
        });
        if (matches.length > 0) {
            console.log("[*] Found: " + matches.length + " match(es) in: " + mod.name);
            matches.forEach(function (symbol) {
                console.log(
                    "Symbol Address: " + symbol.address +
                    " Symbol Name: " + symbol.name
                );
            });
        }
    });
} else {
    console.log("[-] Swift Not Available");
}

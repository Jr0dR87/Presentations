if (Swift.available){
    const mod = Process.getModuleByName("DarkBank");
    const matches = mod.enumerateSymbols().filter(function (s) {
        return s.name.indexOf("amIJailbroken") !== -1;
    });
    console.log("[*] " + matches.length + " symbol(s) found:\n");
    matches.forEach(function (s) {
        console.log(s.address + " " + s.name);
    });
}
else{
    console.log("[-] Swift Not Available")
}

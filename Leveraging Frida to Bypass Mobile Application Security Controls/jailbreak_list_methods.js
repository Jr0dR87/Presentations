if (ObjC.available) {
    console.log("[+] Successfully Connected");
    const className = "IOSSecuritySuite.JailbreakChecker";
    const cls = ObjC.classes[className];
    console.log("[*] Methods on " + className + ":");
    cls.$methods.forEach(function (m) {
        console.log("    " + m);
    });
}
else{
    console.log("[-] ObjC not available");
}

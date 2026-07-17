if (ObjC.available) {
    var className = "IOSSecuritySuite.JailbreakChecker"; // Because we found this from jailbreak_class_enum.js
    var cls = ObjC.classes[className];
 
    console.log("[*] Methods on " + className + ":");
    cls.$methods.forEach(function (m) {
        console.log("    " + m);
    });
}

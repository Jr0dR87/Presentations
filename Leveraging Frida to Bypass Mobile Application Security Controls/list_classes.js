if(ObjC.available){
    console.log("[+] Successfully Connected and Detected Objective-C");
    for (const className in ObjC.classes){
        console.log(className);
    }
}
else{
    console.log("[-] Objective-C not available");
}

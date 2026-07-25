if(ObjC.available){
    console.log("[+] Successfully Connected and Detected Objective-C");
    const regex = /jailb.+/i;
    for (const className in ObjC.classes){
        if(className.match(regex)){
            console.log(className);
        }
    }
}
else{
    console.log("[-] Objective-C not available");
}

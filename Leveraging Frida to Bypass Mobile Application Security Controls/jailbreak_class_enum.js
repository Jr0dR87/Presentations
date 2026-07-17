if(ObjC.available){
    console.log("[+] Successfully Connected");
    const regex = "(j|J)ailb.+";
    for (const className in ObjC.classes){
        if(className.match(regex)){
            console.log(className);
        }
    }

}
else{
    console.log("[-] ObjC not available");
}

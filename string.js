/* capitalize the first letter and the last name totally capitalized */   
let fname = "AlbERt EINstEiN";

function nameChanger(oldName) {
    let finalName = oldName;
    fname = oldName.split(" "); 
    fname[1] = fname[1].toUpperCase(); 
    fname[0] = fname[0].slice(0,1).toUpperCase() + fname[0].slice(1).toLowerCase();
    finalName = fname.join(" ");
    
    
    return finalName;
};

console.log(nameChanger(fname));

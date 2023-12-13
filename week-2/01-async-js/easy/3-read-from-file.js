const fs = require("fs");
let newdata="";
fs.readFile("easy/read.txt", "utf-8",function(err,data){
if(err){
    console.log(err)
}
else if (data){
    console.log(data);
    newdata= data+"adding new line to it";
    fs.writeFile("easy/read.txt",newdata, function(err){
        if(err){
            console.log(err);
        }else{
    
          console.log( fs.readFileSync("easy/read.txt","utf-8"));
        }
    })
    
}

})
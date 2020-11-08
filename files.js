const fs = require('fs');


// reading files
fs.readFile('./docs/blog1.txt',(err,data) => {

    if(err){
    console.log(err);
    }
    console.log(data);
    console.log(data.toString());

});
console.log('Last Line of code ');

// writing files
fs.writeFile('./docs/blog2.txt','Hellow Zack ( Blog2 ) ',()=>{

    console.log('File was Written ');
});

// directories
if (!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
        }
    console.log('Folder assets Created');
})
}

else {
    fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
        } 
    console.log('Folder assets Deleted');
})

}

// deleting files

if (fs.existsSync('./docs/deleteme.txt')){

    fs.unlink('./docs/deleteme.txt',(err)=>{
        if (err)
        {
            console.log(err);
        }
        console.log('File Deleted');
    })
}



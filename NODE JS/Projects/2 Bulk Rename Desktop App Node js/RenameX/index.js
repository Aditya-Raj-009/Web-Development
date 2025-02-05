const fs = require('fs');
const replaceThis = 'prince'
const replaceWith = 'Aditya'
const preview = true;
try {
   fs.readdir('data',(err,data)=>{

    for(let index=0; index<data.length;index++)
    {
        const item = data[index]
        let newFile = 'data/'+item.replaceAll(replaceThis,replaceWith)
        if(!preview)
        {
            fs.rename('data/'+item,newFile,()=>{
                console.log("Rename success!")
            })

        }
        else{
          if('data/'+item != newFile) {
            console.log("data/"+item+' will be rename to '+newFile)
          } 
        }

    }
      console.log(data);
  });
} catch (err) {
  console.error(err);
}

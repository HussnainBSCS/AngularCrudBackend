const mongoose= require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/CrudDB', (err)=>{
    if(!err){
        console.log("Connection succesfull.")
    }
    else{
        console.log("Error"+JSON.stringify(err,undefined,2));
    }
});
module.exports=mongoose;
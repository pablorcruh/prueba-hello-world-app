const express = require('express');
var app=express();
const port=process.env.PORT ||3000;
app.get("/hello/:name",(req,res)=>{
        var name=req.params.name;
        res.send({
            'mesagge':`hello ${name}`
        });
});

app.listen(port,()=>{
    console.log('Service running');
});

module.exports={
    app:app
}
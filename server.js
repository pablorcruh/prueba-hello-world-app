const express = require('express');
const port =process.env.PORT||3000;

const app=express();
app.get("/hello/:name",(req,res)=>{
        var name=req.params.name;
        res.send({
            'mesagge':`hello ${name}`
        });
});

app.listen(3000,()=>{
    console.log('Service running');
});

module.exports={
    app:app
}

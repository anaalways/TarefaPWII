const express = require ('express');
const conta = express();




const app = express();
app.listen(3000,()=>{
    console.log('server online!');

});

app.get('/', function (req,res){
    res.send('Teste de aplicação!!!')
});
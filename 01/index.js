require('dotenv').config()
const express = require('express'); // import express module to make the server
const app = express();// all functionality of express will be in app
const port = 3000;   // Server will listen on this port


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/home',(req,res)=>{
    res.send('home is here');
});
app.get('/login',(req,res)=>{
    res.send('<> This is Login Page </h1>')   // we can also pass html like this
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});





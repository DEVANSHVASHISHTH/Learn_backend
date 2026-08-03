import express from 'express';

const app=express();

// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });

//get a list of 5 jokes       // list can be take in json format like this
app.get('/api/jokes',(req,res)=>{    //api for standardization
    const jokes=[
        {
            id:1,
            title: 'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title: 'Anothe joke',
            content:'This is another joke'
        },
        {
            id:3,
            title: 'A third joke',
            content:'This is a third joke'
        }
    ];
    res.send(jokes);
});

const port=process.env.PORT ||3000;  //take port from env file if not available then take 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
    
})
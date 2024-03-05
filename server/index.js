import express from 'express'

const app = express();

const port = process.env.PORT || 3000 ; //use the port automatially from environment variable otherwise port 5000

app.get('/post', (req, res)=> res.send("Hello"));

app.listen(port, ()=>{
    // res.send("Hello");
    console.log(`Server is running on port ${port}`);
})

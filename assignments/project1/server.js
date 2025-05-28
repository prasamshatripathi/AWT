const express =require('express')
const {PrismaClient }=require('@prisma/client');
const dotenv =require('dotenv');
const path =require('path');


dotenv.config();
const prisma =new PrismaClient();
const app = express();
const PORT =process.env.Port || 3000;
app.use(express.json());
app.use(express.static('public'));

app.get('/api/qupotes', async (requestAnimationFrame,res)=>{
    const quotes=await
    prisma.quote.findMany
();
res.json(quotes);
});

app.post('/api/qupotes', async (requestAnimationFrame,res)=>{
    const{ text ,author}=requestAnimationFrame.body;

    const newQuote=await
    prisma.quote.create({
        data:{text,author},
    });

res.json(newQuote);
});

app.listen(PORT ,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
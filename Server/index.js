const express = require('express');
const cors = require('cors');
const userModel = require('./model');
const bcryptjs = require('bcryptjs')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.post('/signup',async (req,res)=>{
    const {name,email,password} = req.body;
    try{
        const hashedpassword = await bcryptjs.hash(password,10)

        const newUser = new userModel({
            name,email,password:hashedpassword
        })
        const user = await newUser.save();
        res.json(user);
    }
    catch(err){
        console.log(err);
        res.json({error:"Failed to Create User"})
    }
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    
    userModel.findOne({email:email})
    .then(user=>{
        // console.log(password," ",user)
        if(user){
            bcryptjs.compare(password,user.password,(err,isMatch)=>{
                if(err){
                    res.json("Error Comparing Password");
                }else if(isMatch){
                    res.json({msg:'success',token:'123456',status:true})                
                }else{
                    res.json('incorrect Password')
                }
            })
        }
        else{
            res.json("User doesn't exist")
        }
    })
    .catch(
        err=>console.log(err)
    )
})

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})

const db = require('../models/database').conn;
const bcrypt = require('bcrypt');
function signup(req,res){
    console.log(req.body);
    const {email,password,name} = req.body;
    db.connect(async(err)=>{
        if(err){
            return res.stutus(500).json({
                message:'internal server error'
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const sql = 'insert into users(name,email,password) values ?'
        db.query(sql,[[[name,email,hashedPassword]]],(err,result)=>{
            if(err){
                return res.stutus(500).json({
                    message:'internal server error'
                })
            }
            return res.status(201).json({
                message:'user added successfully'
            })
        })
    })
}
function isExit(req,res,next){
    const {email} = req.body;
    db.connect((err)=>{
        if(err){
            return res.status(500).json({
                message:'internal server error'
            })
        }
        const sql = 'select * from users where email=?';
        db.query(sql,[[email]],(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:'internal server error'
                })
            }
            if(result.length>0){
                return res.status(201).json({
                    message:'user already registered, please login'
                })
            }
            else{
                next();
            }
        })
    })
}
module.exports = {signup,isExit};
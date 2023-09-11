const db = require('../models/database').conn;
const bcrypt = require('bcrypt');
function login(req,res){
   const {email,password} = req.body;
   db.connect((err)=>{
    if(err){
        return res.status(500).json({
            message:'internal server error'
        })
    }
    const sql = 'select * from users where email = ?';
    db.query(sql,[[email]],async(err,result)=>{
        if(err){
            return res.status(500).json({
                message:'internal server error'
            })
        }
        else{
            console.log(result);
            if(result.length>0){
                const isExit = await bcrypt.compare(password,result[0]["password"]);
                if(isExit){
                    return res.status(201).json({
                        email:email,
                        message:'login successfully'
                        }) 
                }else{
                    return res.status(404).json({
                        message:'user id or password wrong'
                    })
                }
            }else{
                return res.status(404).json({
                    message:'user id or password wrong'
                })
            }
        }
    })
   })
}
module.exports = {login};
const db = require('../models/database').conn;
function addMessage(req,res){
    console.log(req.body);
    const {from,to,sub,message,isRead} = req.body;
   // let n = message.length;
    //const str = message.substr(3,n-7);
   // console.log(str);
    db.connect((err)=>{
        if(err){
            console.log('err1');
            return res.status(500).json({
                messsage:'internal server error'
            })
        }
        const sql = 'insert into messages(sender,receiver,sub,message,isRead) values ?';
        db.query(sql,[[[from,to,sub,message,isRead]]],(err,result)=>{
            if(err){
                console.log('err2');
                return res.status(500).json({
                    messsage:'internal server error'
                })
            }
            return res.status(201).json({
                message:'message sent successfully'
            })
        })
    })
}
function updateIsRead(req,res){
    const id = req.params.id;
    console.log(id);
    db.connect((err)=>{
        if(err){
            return res.status(500).json({
                messsage:'internal server error'
            })
        }
        const sql = 'update messages set isRead=true where id=?';
        db.query(sql,[[id]],(err,result)=>{
            if(err){
                return res.status(500).json({
                    messsage:'internal server error'
                })
            }
            return res.status(201).json({
                messsage:'status update successfully'
            })
        })
    })
}
function deleteMessage(req,res){
    const id = req.params.id;
    db.connect((err)=>{
        if(err){
            return res.status(500).json({
                messsage:'internal server error'
            })
        }
        const sql = 'delete from messages where id=?';
        db.query(sql,[[id]],(err,result)=>{
            if(err){
                return res.status(500).json({
                    messsage:'internal server error'
                })
            }
            return res.status(201).json({
                messsage:'message deleted successfully'
            })
        })
    })
}
function getReceiveMessage(req,res){

    const email = req.params.id;
    db.connect((err)=>{
        if(err){
            return res.status(500).json({
                messsage:'internal server error'
            })
        }
        const sql = 'select * from messages where receiver=?';
        db.query(sql,[[email]],(err,result)=>{
            if(err){
                return res.status(500).json({
                    messsage:'internal server error'
                })
            }
            return res.status(201).json({
                messsage:'message got successfully',
                data:result
            })
        })
    })
}
function getSentMessage(req,res){

    const email = req.params.id;
    db.connect((err)=>{
        if(err){
            return res.status(500).json({
                messsage:'internal server error'
            })
        }
        const sql = 'select * from messages where sender=?';
        db.query(sql,[[email]],(err,result)=>{
            if(err){
                return res.status(500).json({
                    messsage:'internal server error'
                })
            }
            return res.status(201).json({
                messsage:'message got successfully',
                data:result
            })
        })
    })
}
module.exports = {addMessage,updateIsRead,deleteMessage,getReceiveMessage,getSentMessage};
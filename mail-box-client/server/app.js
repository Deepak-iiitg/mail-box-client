const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json());
const authRouter = require('./routes/auth');
const messageRouter = require('./routes/message');
app.use(cors({
    origin:true
}))
app.use(bodyParser.urlencoded());

app.listen(8080,()=>{
    console.log('server running at port 8080');
})
app.use(authRouter.router);
app.use(messageRouter.router);
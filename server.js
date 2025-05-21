const express = require("express")
const app = express()
// app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(express.static("public")) // middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs")
// app.use(logger) // se middleware

// app.get('/',logger,(req,res)=>{

//     // res.status(500).json({message:"error"})
//     // res.json({message:"error"})
//     res.download('server.js')
//     res.render("index",{text:"World"})
// })
const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')

app.use('/users',userRouter)
// app.use('/posts',postRouter)

//middleware
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
 
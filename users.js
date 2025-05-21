//router

const express = require('express')
const router = express.Router()



router.get('/',(req,res)=>{
    res.send("User List")
})

router.get('/new',(req,res)=>{
    res.render('users/new',{firstName:"Test"})
})

router.post("/", (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
})

router
.route("/:id")
.get((req,res)=>{
    console.log(req.user)
    req.params.id
    res.send(`Get User with ID ${req.params.id}`)
})
.put((req,res)=>{
    req.params.id
    res.send(`Update User with ID ${req.params.id}`)
})
.delete((req,res)=>{
    req.params.id
    res.send(`Delete User with ID ${req.params.id}`)
})

// router.get('/:id',(req,res)=>{
//     req.params.id
//     res.send(`Get User with ID ${req.params.id}`)
// })
// router.put('/:id',(req,res)=>{
//     req.params.id
//     res.send(`Update User with ID ${req.params.id}`)
// })
// router.delete('/:id',(req,res)=>{
//     req.params.id
//     res.send(`Delete User with ID ${req.params.id}`)
// })

const users=[{name:"Kyle"},{name:"Sally"}]
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next()
})

module.exports = router
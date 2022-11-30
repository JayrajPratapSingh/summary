const router = require("express").Router()


router.get("/", (req, res)=>{
    res.render("index.ejs");
})

router.post("/", (req, res)=>{
    res.render()
})



module.exports = router
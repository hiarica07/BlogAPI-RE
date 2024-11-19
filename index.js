"use-strict"

/* -------------------------------------- */
            // Express JS
/* -------------------------------------- */

const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8000



/* -------------------------- */
// Middlewares:
app.use(express.json())
require('express-async-errors')


/* -------------------------- */

// Cookie-Session (login-logout holder)
const session = require("cookie-session")
app.use(session({
    secret: process.env.SECRET_KEY,
}))
/* -------------------------- */
app.use(require("./src/middlewares/authentication"))
/* -------------------------- */


// DB connection
require("./src/configs/dbConnection")
/* -------------------------- */


/* -------------------------- */
// Routes
app.all("/",(req,res)=>{
    res.send({
        
    message: "WELLCOME ^^",
    session: req.session,
    isLogin : req.session ? true : false
    
    })
    
})

app.use("/blog",require("./src/routes/blog"))
app.use("/user",require("./src/routes/user"))
app.use("/auth",require("./src/routes/auth"))
/* -------------------------- */


/* -------------------------- */
// Error Handler
app.use(require("./src/middlewares/errorHandler"))
/* -------------------------- */

app.listen(PORT,()=> console.log("Running : http//127.0.0.1:"+ PORT))


"use strict"

const { login, logout } = require("../controllers/auth")

const router = require("express").Router()

router.post("/login", login)
router.get("/logout", logout)


module.exports= router
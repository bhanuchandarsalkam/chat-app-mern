const express=require("express");
const protectRoute = require("../middlewares/Protectroute");
const { Getusersforsidebar } = require("../Controllers/Usercontroller");
const userrouter=express.Router();
userrouter.get("/",protectRoute,Getusersforsidebar)
module.exports=userrouter;
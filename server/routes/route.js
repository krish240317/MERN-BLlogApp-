import express from "express"
import signupuser from "../controller/user-controller.js";

//set up router 
const router=express.Router();

//post method is used(endpoint,function)
router.post('/signup',signupuser);


export default router;
const express=require(`express`);
const router=express.Router();

const userController=require(`../controllers/users_controller`);

router.get(`/signin`,userController.signin);
router.get(`/signup`,userController.signup);
router.post(`/create_user`,userController.create_user);


module.exports=router;
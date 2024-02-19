var express = require('express');
var router = express.Router();
const {login,register,createUser,processlogin,update,edform, logout, dashboard} = require("../controllers/usersController");
const adminValidation = require("../middlewares/adminValidation");
const sessionValidate = require("../middlewares/sessionValidate");
const authValidate = require("../middlewares/authValidate");
const loginValidator = require("../validations/loginValidator");
const registerValidator = require("../validations/registerValidator");
const editUserValidator = require("../validations/editUserValidator");
const upload = require('../validations/uploadUser');




/* GET users listing. */

router.get('/ingresar', authValidate, login)
router.post('/ingresar', loginValidator,processlogin)

router.get('/registrarme', register)
router.post('/registrarme', registerValidator, createUser)

router.get('/editar/:id',sessionValidate, edform)
router.put('/editar/:id',upload.single('image'), editUserValidator, update)

router.get("/logout", logout);

router.get('/dashboard', adminValidation, dashboard)

module.exports = router;

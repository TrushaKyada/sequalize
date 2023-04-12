const router = require('express').Router();

const { 
    
    insert, 
    login,
    verifyPassword,
    update


} = require('../controllers/user.ctrl');


router.post('/insert', insert);
router.post('/login' , login);
router.put('/verifyPassword/:id' , verifyPassword);
router.put('/update/:id',update)


module.exports = router;
const router = require('express').Router();

const {

    insert,
    update

} = require('../controllers/city.ctrl');

router.post('/insert/:state_id', insert);
router.put('/update', update);

module.exports = router;
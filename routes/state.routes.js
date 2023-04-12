const router = require('express').Router();

const {

    InsertState


} = require('../controllers/state.ctrl');

router.post('/insert', InsertState);

module.exports = router
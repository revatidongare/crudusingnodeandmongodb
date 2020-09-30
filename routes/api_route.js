const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();
router.get('/:id', postcontroller.showIndex);
router.post('/', postcontroller.postIndex);
router.put('/:id', postcontroller.putIndex);
router.delete('/:id', postcontroller.deleteIndex);
module.exports = router;
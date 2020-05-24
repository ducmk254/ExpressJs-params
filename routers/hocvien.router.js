var express = require('express');



var controller = require('../controllers/hocvien.controller');
var authMiddleware = require('../middleware/auth.middleware');

var router = express.Router();


router.get('/',controller.index);
router.get('/create',controller.create);

router.get('/search',controller.search);

router.get('/:id',controller.viewbyid);

// các phương thức POST:
router.post('/create',controller.postCreate); 

module.exports = router;
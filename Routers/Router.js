let express = require('express');
let router = express.Router();
let controller = require('../controller/Controller');

router.post('/cat', function (req, res) {
    controller.postCat(req, res);
});

router.get('/cats', (req, res) => {
    controller.getAllCats(req, res);
});

module.exports = router;


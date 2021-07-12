const{ Router } = require('express');
const router = Router();

const ComponentsController = require('../controllers/components.controllers.js')

router.get('/', ComponentsController.GetComponents);

router.post('/',ComponentsController.addComponents)

module.exports = router;

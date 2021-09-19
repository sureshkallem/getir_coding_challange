
const { Router } = require('express');
const recordsController = require("../controllers/recordsController");
const { filterRecordsSchema } = require('../validations/records');

const router = Router();
router.post("/records", filterRecordsSchema, recordsController.postRecordController);

module.exports = router;
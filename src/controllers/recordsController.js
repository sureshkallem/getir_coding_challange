const recordsModel = require("../models/records");

// Records controller takes the request, response and next object 
exports.getRecordController = async (req, res) => {
    const records = await recordsModel.getRecords();
    res.json(records);
};

exports.postRecordController = async (req, res) => {
    const records = await recordsModel.getRecords(req.body);
    res.json(records);
};

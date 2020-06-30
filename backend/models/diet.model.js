const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dietSchema = new Schema({

    maxCalories: { type: Number, required: true },
}, {
    timestamps: true,
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;

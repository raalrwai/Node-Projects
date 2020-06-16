const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dietSchema = new Schema({

    foodName: { type: String, required: true },
    portions: { type: Number, required: true },
    calories: { type: Number, required: true },
}, {
    timestamps: true,
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;

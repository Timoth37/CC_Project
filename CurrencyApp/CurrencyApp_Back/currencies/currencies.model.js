const mongoose = require('mongoose');
const currencySchema = new mongoose.Schema({
    iso: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    usernameUser: {
        type: String,
        required: true,
    },
    isoFrom: {
        type: String,
        required: true,
    },
    isoTo: {
        type: String,
        required: true,
    },
    rate:{
        type: Number,
        required: true,
    },
    valueIn:{
        type: Number,
        required: true,
    },
    valueOut:{
        type: Number,
        required: true,
    }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
const mongoose = require("mongoose");

const panelSchema = new mongoose.Schema({
    id: Number, 
    count: Number,
    panel1: String,
    panel2: String,
    panel3: String
});

const Panel = new mongoose.model("panels", panelSchema);

module.exports = Panel;
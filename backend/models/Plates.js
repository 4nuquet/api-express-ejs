const { Schema, model } = require('mongoose');


const schemePlates = new Schema({
    name: {type: String, required: true},
    info : {type: String, required: true},
    price: {type: Number, required: true},
    imgPath: {type: String}
});


module.exports = model('Plates', schemePlates);
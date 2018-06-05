const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    FirstName : String,
    LastName : String,
    Age : String,
    Email : String,
    Born : String,
    Gender : String
});

const Form = mongoose.model("form", FormSchema);

module.exports = Form;
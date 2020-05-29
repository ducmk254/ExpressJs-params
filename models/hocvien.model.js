const mongoose = require('mongoose');

const hocvienSchema = new mongoose.Schema({
    fullname: String,
    avatar: String
});

const HocVien = mongoose.model("HocVien",hocvienSchema,'dshv'); // tham so thu ba la collection ( ten table) se duoc luu vao.

module.exports = User;
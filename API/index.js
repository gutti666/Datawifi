const express = require('express');
const app = express();
var cors = require('cors')
const multer = require('multer');
const storg = multer.diskStorage({
    destination: 'public/uploads/',
    filename: (res, file, cb) => {
        cb(null, file.filename + ".jpg")
    }
});

//Settings
app.set('Port', process.env.PORT || 3000);
app.use(cors());
app.use(multer({
    storage: storg,
    dest: 'public/uploads/'
}).single('image'));
app.use(express.json());

//Routes
app.use(require('./Routes/Menus.js'));
//Star server

app.listen(3000, () => {
    console.log("conexion puerto", app.get('Port'));
})
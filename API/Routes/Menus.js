const express = require('express');
const router = express.Router();


var cors = require('cors')



const mysqlconection = require('../database');
const { query } = require('../database');
router.get('/api/menus', cors(), (req, res) => {
    mysqlconection.query('select * from menu ', (err, rows, flieds) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/api/menus/:id', cors(), (req, res) => {
    const { id } = req.params;

    mysqlconection.query('SELECT  * FROM contmenu where id=? ', [id], (err, rows, flieds) => {
        if (!err && rows != 0) {
            res.json(rows);

        } else {
            res.json('1');
        }
    })
});
router.delete('/api/menus/deletecom/:id', (req, res) => {
    const { id } = req.params;

    mysqlconection.query(`  CALL eliminarproduc(?); `, [id], (err, rows, flieds) => {
        if (!err) {
            return res.json(rows);

        } else {
            console.log(err);
        }
    })
});
// INGRESAR
router.post('/api/menus/agregar/:nombre/:descripcion/:valor', (req, res) => {
    console.log(req.params);
    const { nombre } = req.params;
    const { descripcion } = req.params;

    const { valor } = req.params;
    const { pop } = 0;


    mysqlconection.query(`CALL agregarmenu_3(?,?,0,?);`, [nombre, descripcion, valor], (err, rows, flieds) => {
        if (!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});
router.post('/api/menus/uploadimg/', (req, res) => {

    return 0;
});

module.exports = router;
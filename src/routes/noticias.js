const { Router } = require('express');
const fs = require('fs');
const router = Router();
const _ = require("underscore");

const noticias = require('../sample.json');
let data = fs.readFileSync('src/sample.json');
let myObject = JSON.parse(data);

router.get('/', (req, res) => {
    res.json(noticias);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    _.each(noticias, (noticia, i) => {
        if (noticia.id === id) {
            noticia.title = noticia.title;
            noticia.descr = noticia.descr;
            noticia.cuerpo = noticia.cuerpo;
            noticia.fecha = noticia.fecha;
            noticia.img = noticia.img
            res.json(noticia)
        }
    });
});

router.post('/', (req, res) => {
    const id = (noticias.length + 1).toString();
    const { title, descr, cuerpo, fecha, img } = req.body;
    const newNoticia = { ...req.body, id };
    if (id && title && cuerpo && fecha && img) {
        noticias.push(newNoticia);
        myObject.push(newNoticia);
        let newData2 = JSON.stringify(myObject);
        fs.writeFile("src/sample.json", newData2, (err) => {
            if (err) throw err;
            console.log("New data added");
        })
        res.json(noticias);
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, descr, cuerpo, fecha, img } = req.body;
    if (id && title && cuerpo && fecha && img) {
        _.each(noticias, (noticia, i) => {
            if (noticia.id === id) {
                noticia.title = title;
                noticia.descr = descr;
                noticia.cuerpo = cuerpo;
                noticia.fecha = fecha;
                noticia.img = img;
            }
        });
        let newData2 = JSON.stringify(noticias);
        fs.writeFile("src/sample.json", newData2, (err) => {
            if (err) throw err;
            console.log("EDITADOOO");
        })
        res.json(noticias);
    } else {
        res.status(500).json({ error: 'There was an error.' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        _.each(noticias, (noticia, i) => {
            if (noticia.id == id) {
                noticias.splice(i, 1);
            }
        });
        let newData2 = JSON.stringify(noticias);
        fs.writeFile("src/sample.json", newData2, (err) => {
            if (err) throw err;
            console.log("ELIMINADO");
        })
        res.json(noticias);
    }
});


module.exports = router;
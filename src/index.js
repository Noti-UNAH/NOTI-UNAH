const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const app = express();
 
// settings
app.set('port', process.env.PORT || 8000);
app.set("json spaces",2);

// middleware
app.use(morgan(`dev`));
app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
app.use(express.json());

// routes
app.use(require("./routes/noticias"));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

// require expressapp
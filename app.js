const express = require('express');
const app = express();
const path = require("path")


app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

// app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
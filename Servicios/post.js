const router = require("./Routes")
const fs = require('fs')

router.post('/', (req, res)=>{
    let json = JSON.parse(fs.readFileSync(__dirname+"/products.json"))
    fs.writeFileSync("products.json", JSON.stringify({ name: req.body.Nombre_Producto, price: req.body.Precio_Producto }));
    res.send("ok");
});


module.exports = router;
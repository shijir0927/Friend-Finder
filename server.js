let port = process.env.PORT || 8087;
let express = require('express')
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/css"));
app.use(express.static(__dirname + "/app/javascript"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(port,()=>{
    console.log(`Listening to Port ${port}`)
})
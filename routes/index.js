const bodyParser = require("body-parser");
module.exports = app => {
app.use(bodyParser.json());
app.get("/", (req, res) => {
res.status(200).send({ message: "Bem-vindo!" });
});
};
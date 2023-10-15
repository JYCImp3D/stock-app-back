const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
      `mongodb+srv://jycimpresiones3d:${process.env.MONGO_DB_PASS}@development.eoemdhr.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then((result) => {
      const PORT = process.env.PORT;
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
      });
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;

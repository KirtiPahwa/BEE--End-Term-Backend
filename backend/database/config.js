const mongoose = require("mongoose");

const dbConfigConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ete", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar la base de datos");
  }
};

module.exports = dbConfigConnection;

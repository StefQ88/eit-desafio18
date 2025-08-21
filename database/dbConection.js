import mongoose from "mongoose";

export const dbConection = async () => {
  try {
    const uri = process.env.BASE_URL_DB;
    if (!uri) throw new Error("Falta BASE_URL_DB en .env");
    console.log("Conectando a Mongo:", uri);
    const conn = await mongoose.connect(uri);
    console.log("Conectado a:", conn.connection.host, conn.connection.port, conn.connection.name);
  } catch (error) {
    console.error("Error al conectar la BD:", error.message);
    throw error;
  }
};

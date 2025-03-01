// import { google } from "googleapis";
// import { credentialsJson } from "../constant/constant.js";

export async function sendData() {
  // try {
  //   // Autenticación
  //   const auth = new google.auth.GoogleAuth({
  //     credentials: credentialsJson,
  //     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  //   });

  //   // Crear instancia de Google Sheets
  //   const sheets = google.sheets({ version: "v4", auth });

  //   // ID de la hoja de cálculo (solo el ID, no la URL completa)
  //   const spreadsheetId = "1BoJAUksBnW2PbiTEWX2TnGdDZq8CkHMBdKWtMbbP1X0";

  //   // Rango donde se agregarán los datos
  //   const range = "Hoja1!A1"; // Ajusta según tu tabla

  //   // Datos a enviar
  //   const values = [["Nuevo Dato 1", "Nuevo Dato 2", "Nuevo Dato 3"]];

  //   // Enviar datos a Google Sheets
  //   await sheets.spreadsheets.values.append({
  //     spreadsheetId,
  //     range,
  //     valueInputOption: "RAW",
  //     resource: { values },
  //   });

  //   console.log("Fila añadida con éxito");
  // } catch (error) {
  //   console.error("Error al enviar datos a Google Sheets:", error.message);
  // }
}
import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const {date , email, message } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
      },

      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      //   spreadsheetId: process.env.DATABASE_ID,
      spreadsheetId: "1RkQX8bttqtM--D5hsHmJly4eSpxRxREE-Yq7bNzq64E",
      range: "Mensajes!A2:C",
      valueInputOption: "RAW",
      requestBody: {
        values: [[date, email, message]],
      },
    });
    res.status(201).end();
    // res.redirect(307, "../contact");
  }
}

export default handler;

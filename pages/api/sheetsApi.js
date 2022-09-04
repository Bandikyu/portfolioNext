import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    console.log(email, message);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.PRIVATE_KEY,
        // private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
      },
/*       credentials: {
        // private_key: process.env.PRIVATE_KEY,
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDoiAnMj5SkW8HA\nSnnmI3XTC+UiI0vItLylD7BhkRy/E8OVVb5iOUG0u95C/gt+NkuTmyIgsFVzzYSp\noxye89Xe31k7FX+s0Wye25/w0IWNVfyQfZUfZEEXpRGI7xnMBFHWb4eLZ8hjt7aY\n7brb29scffRRHnOodApp3c2MVHMPPjLtnT/lSj9+ENisOT0Bd8hRKV7wYbU9/smd\ndgqI7GAXwNHnePhJYxCcm7CyF3GmSTaVzOuMvNBZM5OozQe/dMNkxQ+nnB9Iq4RA\n7T4NfWymTPA4HzVP8imGKi9yYaCPyv8EUshEUA6XuENXjkxLqim+uaPzckCsjgtZ\nd5mg/KzZAgMBAAECggEACFLmVuZE4eVO+D0yQ+S9EQL5/tDYo6SkpBv9qmBxcP2a\nILxjBk0aZwfamvdRHgF/jxccj6MATBbtSs1F9wKvgzznis/oNB2DD+S4wvwT681K\nLznvnqIOGnSUPhyhBcaZz11KstjSOY+X/71y1O/31ftERasbZMpSnRuNghp7y+3S\nlMvXrs78igis0OScLIox0ElAYN5B00b1nJxZRCrSZkRVkd4vb6x1BKND+BPyDSdo\nW322XCUMpjGjdpQV0wjJUiB2qgRxww2BuBtrNeol+b0nCS5wsfjUlVnuOvJwQnZA\nt9Go2vuLXBKbeVJ4xrupI+MzGxiDCeJCun4Cx2z3AQKBgQD+9IlIG0AT+kCphUkZ\nNP52nfK736wTANZHv9H3xbVcHNfEtAtuchnZJg3ApC5RJrItKg/il/jUkE2cMlPw\nJiLc+SdufHJ7LUU/uL/FsvVnDegF2HR7JQ/HOTVGFJW2zjR5PgQVt7Tl7BHWrdyJ\n4vMSetCydnbrwCvxn5F+9AsrcQKBgQDpe/phkQFLDIUD/KlP+gvwv1GgbuvmmZuk\nnQuIxrJ6zd8/l9jFp7hyDRyaWy2kMpvkOKlox98taJ8TJ/RbId+4RXJUuxUmdBYW\nhk63t5K6UEAqgD4OJXrgNRyteMkpmndnNnGK+h7w14VNBnQ0M2qASjOxStPQn9so\ns+zzBETT6QKBgBz1gbJjBgA+6KFYtljaoByxDCUy3sS5z50OuLbACj2QOSHqoXHG\nHBGCNQWwoGIvVwWyRWOjh2v9iBM51Dbu3f7jfgsar5Y2Kit2vLGkBiPSfIxNbc2f\nBA/I+7geFnNRMLykwqoE19NV4SDVVruCv8FVmebrdc6JYXRsf4ZAChTBAoGAHqyd\nDmhghR2V9BojnFA7dVuNO8iW0Wro2c2QEF4aYKvfYplubzlDsCgs09KawnGrrWYM\nS6nGlk6iZ3/eSILAw5LMHHmfo7eolzj56oUBj9yvMWY7wNwHsqEHrXqq4v5aJYMv\nk5ScsAOAjcgFSD5hBY26ENbF0SjPQB+zR5IOANECgYEAszXFqq7TwJQji0m9B1SG\nHGs4d/UaIjv+00SjWbmcteuWOqgWDU2KwY7kiOcEPPWChLjHaFBvxgqIsywZO+kv\nKnfTP/ffDrTuzvoOvEVVhYVlaGKC+uoQ4TEMCrtdK6cThc4XcZWKgYUt+rbItEKu\nk28okS7qUToehyPuGEEpOTY=\n-----END PRIVATE KEY-----\n",
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
      }, */
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
      range: "Mensajes!A2:B",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, message]],
      },
    });
    //res.status(201).json({ message: 'It works!'});
    res.redirect(307, "/contact");
  }
}

export default handler;

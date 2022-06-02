const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=MqHeXwqHVyI3DL9Ps5hjrAJC8a60etFDLsaztbSyAzHkLfiOyVLzIoRoqVIt822CgGNtQ6RXqqrsJz3hBeLWMk4qPFXPoOogm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDsMcJx9e6kGqetilaE8F1WkAYHfzPNw5KBLahzd7DgGDE-gQD6pr-_I5URgSZwxfaFLLC4pk8aiOQrZZUxpPc_ZwJH_ZWGVmw&lib=MiUkTyRDBd8KElwlE7hND95Tfj4_1MZ2S';

let sheetDetails = new Promise((resolve, reject) => {
    let detallesJSON;
    fetch(url)
    .then((response)=> response.json())
    .then(j => detallesJSON = j)
    .then(()=> resolve(detallesJSON))
})

export default sheetDetails;
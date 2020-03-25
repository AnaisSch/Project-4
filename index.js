const express = require("express");
const app = express();

app.listen(3000, () =>  {
    console.log("SERVER STARTED !");
});

app.get("/", (req, res) => {
    res.send ({
        id: 1,
        email: "opale60@hotmail.fr",
        firstname: "Anais",
        lastname: "Sch",
        birthdate: new Date(1996, 4, 23),
    });
});

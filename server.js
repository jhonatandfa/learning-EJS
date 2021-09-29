const express = require('express');

const app = express();

//setando que a engine vai ser ejs
app.set("view engine", "ejs");

//criando rota home
app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/ serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar html"
        },
        {
            title: "M",
            message: "uito prático de usar"
        },
        {
            title: "A",
            message: "dorando utilizar"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    })
})

//criando rota pag sobre
app.get("/sobre", function (req, res){
    res.render("pages/about")
})

//rodando o server na porta 8080
app.listen(8080)
console.log('running')
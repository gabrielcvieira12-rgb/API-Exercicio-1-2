// Desafio 02
// Promoção de supermercado
// Compras a partir de R$ 150 recebem 5% de desconto, a partir de R$ 300 recebem 10%
// e a partir de R$ 500 recebem 15%. O sistema determina o valor final e informa
// quanto o cliente economizou. Nenhum valor inválido deve ser aceito.

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

app.post("/desconto", (req, res) => {
    const { valor1 } = req.body ?? {};

    if (typeof valor1 !== "number" || !Number.isFinite(valor1) || valor1 <= 0) {
        return res.status(400).json({
            erro: "O valor está errado",
        });
    }

    let percentual = 0;
    let situacao = "Sem desconto";

    if (valor1 >= 500) {
        percentual = 15;
        situacao = "15% de Desconto";
    } else if (valor1 >= 300) {
        percentual = 10;
        situacao = "10% de Desconto";
    } else if (valor1 >= 150) {
        percentual = 5;
        situacao = "5% de Desconto";
    }

    const valorFinal = valor1 * (1 - percentual / 100);
    const economia = valor1 - valorFinal;

    return res.json({
        valorOriginal: valor1,
        situacao,
        economia: Number(economia.toFixed(2)),
        valorFinal: Number(valorFinal.toFixed(2)),
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
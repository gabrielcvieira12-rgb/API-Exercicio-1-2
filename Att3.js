// // Desafio 03
// // Estacionamento inteligente

// Um estacionamento cobra R$ 8 pela primeira hora e R$ 5 por cada hora adicional iniciada.
// O proprietário deseja um sistema capaz de calcular o valor devido por um motorista com base no tempo de permanência.
// Qualquer fração de hora adicional será cobrada como uma hora completa.Por exemplo, um veículo estacionado durante 2 horas e 15 minutos deverá pagar por 3 horas.

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

app.post("/estacionamento", (req, res) => {
    const { valor1 } = req.body ?? {};

    if (typeof valor1 !== "number" || !Number.isFinite(valor1) || valor1 <= 0) {
        return res.status(400).json({
            erro: "O valor está errado",
        });
    }

    const prmeiraHora = 8;
    const HoraExtra = 5;

    if (valor1 >= 500) {
        percentual = 15;
        situacao = "15% de Desconto";
    } else if (valor1 >= 300) {
 

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
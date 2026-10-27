const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/notaFinal", (req, res) => {
    const { nota1, nota2, nota3 } = req.body ?? {};
    const notas = [nota1, nota2, nota3];

    if (notas.some(n => typeof n !== "number" || !Number.isFinite(n) || n < 0 || n > 10)) {
        return res.status(400).json({ erro: "Notas inválidas" });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    res.json({
        media: Number(media.toFixed(2)),
    });
});

app.listen(PORT, () => {
    console.log(`Rodando. Porta: ${PORT}`);
});
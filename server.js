const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/process", (req, res) => {
    try {
        const { question } = req.body;
        let answer = "Извините, я пока не умею отвечать на этот вопрос.";

        if (question.toLowerCase().includes("привет")) {
            answer = "Привет! Как я могу помочь?";
        }

        res.json({ answer });
    } catch (error) {
        console.error("Ошибка обработки запроса:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🚀 Сервер запущен на http://localhost:" + PORT);
});

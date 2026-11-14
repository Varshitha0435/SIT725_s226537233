
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if (
        req.query.a === undefined ||
        req.query.b === undefined ||
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        return res.status(400).json({
            error: 'Please enter two valid numbers.'
        });
    }

    const sum = a + b;

    res.json({
        firstNumber: a,
        secondNumber: b,
        result: sum
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

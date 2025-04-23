const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    password: String
}));

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password }); // For real apps, hash passwords!
        if (!user) {
            return res.json({ success: false, error: "Invalid credentials" });
        }
        res.json({ success: true, user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

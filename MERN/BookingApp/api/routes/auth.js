import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)



const PORT = process.env.PORT || 4000; // You can choose any available port

const app = express();

app.get('/test', (req,res)=>{
    res.json('test OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default router
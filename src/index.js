import dotenv from "dotenv";
import connectDD from "./db/index.js";
import { app } from "./app.js";

dotenv.config();
connectDD().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
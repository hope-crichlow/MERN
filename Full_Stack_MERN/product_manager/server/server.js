// 1. IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// 1.5 CONFIGURE MONGOOSE
require("./config/mongoose.config");

// 2. CONFIGURE EXPRESS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// 3. ATTACH ROUTES TO EXPRESS SERVER
const productRoutes = require("./routes/product.routes");
productRoutes(app);

// 4. RUN EXPRESS SERVER
app.listen(port, () => console.log(`EXPRESS SERVER RUNING ON ${port}`));

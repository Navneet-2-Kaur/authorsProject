const express = require('express');
const cors = require('cors') 
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./server/config/mongoose.config'); 
    
app.use(cors()) // This is to test ability to make cross -orgin requests
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
require('./server/routes/author.routes')(app);


app.listen(port, () => console.log(`✨✨✨✨✨✨ Server up on on port: ${port}`) );
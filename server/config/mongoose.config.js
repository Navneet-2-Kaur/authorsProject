const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// need to include the connection string from Atlas or will get the error message. 
    //replace @YOUR_CONNECTION_STRING_HERE/ with @cluster.q9g2n3p.mongodb.net/
const uri = `mongodb+srv://${username}:${pw}@cluster.q9g2n3p.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("🎉🎉🎉🎉🎉🎉Established a connection to mongoose database"))
    .catch(err => console.log("❌❌❌❌❌❌Something went wrong when connecting to the mongoose database", err));


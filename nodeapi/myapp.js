const express = require('express');
const cors = require("cors");
var agents = require('./routes/agents.routes');

var app = express();
port = 3070;
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use('/api/agents',agents);
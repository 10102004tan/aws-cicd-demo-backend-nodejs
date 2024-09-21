'use strict';
const PORT = 3000;
const server = require('./src/v1').listen(PORT, () => console.log(`Listening on ${PORT}`));

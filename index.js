const express = require('express');
const app = express();
const grenades = require('./Routes/grenades');
const handguns = require('./Routes/handguns');
const iatweapons = require('./Routes/iatweapons');
const landmines = require('./Routes/landmines');
const machineguns = require('./Routes/machineguns');
const rifles = require('./Routes/rifles');
const submachineguns = require('./Routes/submachineguns');

app.listen('3000', () => {
    console.log('server started on port 3000');
});

app.use(grenades);
app.use(handguns);
app.use(iatweapons);
app.use(landmines);
app.use(machineguns);
app.use(rifles);
app.use(submachineguns);
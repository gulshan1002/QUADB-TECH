const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});


const app = require('./app');



const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is listening on PORT ${PORT}`);
});
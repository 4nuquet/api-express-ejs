if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express =  require('express');
const morgan = require('morgan');
const path = require('path')

//Initializations
const app = express();
require('./dbHelper');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use('/api/plates', require('./routes/plates'));


//Static Files


//Start the Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});
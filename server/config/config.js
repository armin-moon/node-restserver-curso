//puerto
process.env.PORT = process.env.PORT || 3000;

//=========
//enterno
//=========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://aluna:mRE32W6qlv8qguNo@cluster0-fgigd.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
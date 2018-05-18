var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var categoriesRouter = require('./routes/categories');
var formRouter = require('./routes/form');
var listRouter = require('./routes/list');
var patchRouter = require('./routes/patch');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

// TODO: insert a new route here :)
app.use('/categories', categoriesRouter);
app.use('/form', formRouter);
app.use('/list', listRouter);
app.use('/patch', patchRouter);






module.exports = app;

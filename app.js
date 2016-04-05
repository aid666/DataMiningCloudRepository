var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var jobs = require('./routes/jobs');
var models = require('./routes/models');
var archives = require('./routes/archives');

var app = express();

var Datastore = require('nedb')
modelMetaDS = new Datastore({filename: 'modelMetas.db', autoload: true});
jobMetaDS = new Datastore({filename: 'jobMetas.db', autoload: true});
archiveMetaDS = new Datastore({filename: 'archiveMetas.db', autoload: true});
modelDS = new Datastore({filename: 'models.db', autoload: true});
jobDS = new Datastore({filename: 'jobs.db', autoload: true});
archiveDS = new Datastore({filename: 'archives.db', autoload: true});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  //to allow cross domain requests to send cookie information.
  //res.header('Access-Control-Allow-Credentials', true);
  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin',  '*');

  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

  req.uid = "public";
  next();
});

app.use('/repo/jobs', jobs);
app.use('/repo/models', models);
app.use('/archives', archives);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


module.exports = app;

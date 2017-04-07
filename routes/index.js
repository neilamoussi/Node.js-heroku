var express = require('express');
var router = express.Router();
var  flash= require('connect-flash');
var passport = require('passport');
var  Movie  = require('../models/movie');
var csrf = require('csurf');
var csurfProtection = csrf();
router.use(csurfProtection);
router.get('/', function(req, res, next) {
Movie.find(function(err, docs)
{var movieChunk= [];
	var chunkSize=3;
for (var i = 0; i < docs.length; i+= chunkSize ) {
	movieChunk.push(docs.slice(i, i + chunkSize));
}
  res.render('shop/index', { title: 'Film Store', movies: movieChunk });
});
});

router.get('/user/signup', function(req, res, next) {
	var messages =req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });

});
router.get('/user/signin', function(req, res, next) {
	var messages =req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });

});

router.post('/user/signin',passport.authenticate('local.signin',{		
successRedirect:'/',
failureRedirect: '/user/signin',
failureFalsh: true
})
	);
router.post('/user/signup',passport.authenticate('local.signup',{		
successRedirect:'/user/profile',
failureRedirect: '/user/signup',
failureFalsh: true
})
	);
router.get('/user/profile', function(req, res, next) {
//retourner vue
  res.render('user/profil');
});
module.exports = router;

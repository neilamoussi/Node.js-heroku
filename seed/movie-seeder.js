var  Movie  = require('../models/movie');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/movieD');
var movies =[

 new Movie({
id: 1,
imagePath: 'https://www.macxdvd.com/mac-dvd-video-converter-how-to/article-image/dumb-and-dumber-comedy.jpg',
title: 'dumb and dumber',
year: 1994,
author: 'Bennett Yellin'
}),

 new Movie({
id: 2,
imagePath: 'http://static.tvtropes.org/pmwiki/pub/images/HomeAlone.jpg',
title: 'Home Alone',
year: 1990,
author: 'John Hughes'
}),

 new Movie({
id: 3,
imagePath: 'http://fr.web.img6.acsta.net/c_300_300/pictures/16/12/15/15/40/086055.jpg',
title: 'Jackie',
year: 2016,
author: 'Noah Oppenheim'
}),

 new Movie({
id: 4,
imagePath: 'http://img.actucine.com/wp-content/uploads/2012/01/Jack-Et-Julie.jpg',
title: 'Jack et Julie',
year: 2012,
author: 'martin horz'
}),
new Movie({
id: 5,
imagePath: 'http://fr.web.img6.acsta.net/medias/nmedia/18/82/26/27/19639330.jpg',
title: 'Le Mytho - Just Go With It',
year: 2011,
author: 'Noah Oppenheim'
})
];

var done=0;
for (var i = 0; i < movies.length  ; i++) {
	movies[i].save(function(err,result) {
		done++;
		if(done== movies.length)
		{
			exit();
		}
		// body...
	});
}
function exit()
{

	mongoose.disconnect();
}



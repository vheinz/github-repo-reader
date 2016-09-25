const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Vision = require('vision');
const Handlebars = require('handlebars');
const Inert = require('inert');

var server = new Hapi.Server();

server.connection({  
    host: 'localhost',
    port: 3000
});

server.register(Inert, () => {});

server.register(require('vision'), (err) => {
    if (err) {
        throw err;
    }

    server.views({  
        engines: {
            html: require('handlebars')
        },
        path: 'views',
        layoutPath: 'views/shared',
        layout: 'layout',
        partialsPath: 'views/partials'
    });

    var routes = 
		[  
	      {
	          method: 'GET',
	          path: '/',
	          handler: function(request, reply) {
	              var data = { };
	              return reply.view('partials/index', data);
	          }
	      },
	      {  
	    	  method: 'GET',
	    	  path: '/js/{file*}',
	    	  handler: {
	    	    directory: {
	    	      path: 'public/js'
	    	    }
	    	  }
	      },
	      {  
	    	  method: 'GET',
	    	  path: '/css/{file*}',
	    	  handler: {
	    	    directory: { 
	    	      path: 'public/css'
	    	    }
	    	  }
	      },
	      {  
	    	  method: 'GET',
	    	  path: '/libs/css/{file*}',
	    	  handler: {
	    	    directory: { 
	    	      path: 'public/libs/css'
	    	    }
	    	  }
	      },
	      {  
	    	  method: 'GET',
	    	  path: '/libs/js/{file*}',
	    	  handler: {
	    	    directory: { 
	    	      path: 'public/libs/js',
	    	      listing: true
	    	    }
	    	  }
	      },
	      {  
	    	  method: 'GET',
	    	  path: '/htmlTemplates/{file*}',
	    	  handler: {
	    	    directory: { 
	    	      path: 'public/htmlTemplates/',
	    	      listing: true
	    	    }
	    	  }
	      }
	  ];
    
    server.route(routes);
});

server.start(function() {  
    console.log('Server started at: ' + server.info.uri);
});
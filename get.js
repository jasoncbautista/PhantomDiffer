var page = require('webpage').create();

page.viewportSize = { width: 1200, height: 1600 };

page.open('http://sqor.com', function() {
  setTimeout(function(){
	  page.render('example.png');
	  phantom.exit();
  }, 3000);
});

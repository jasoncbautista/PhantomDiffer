var page = require('webpage').create();
page.open('http://sqor.com', function() {
  setTimeout(function(){
	  page.render('example.png');
	  phantom.exit();
  }, 3000);
});

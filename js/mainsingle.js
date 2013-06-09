var NUM_PAGES = 100;
$(document).on('pageinit', '#startpage', function () {
  var startTime = 0,
      workers = [],
      first = true,
      count = 0,
      page = '<div data-role="page" id="thepage" class="simplepage"><div data-role="header" data-position="fixed" data-tap-toggle="false"><h1>This is a simple header</h1></div><div data-role="content"><ul data-role="listview" data-inset="true">';

  $.get('http://search.twitter.com/search.json?q=balling&rpp=20', function (data) {
    var body = $('body');
    startTime = Date.now();
    for (var i = 0; i < NUM_PAGES; i++) {
      console.log("Doing " + i);
      for (var j = 0; j < data.results.length; j++) {
        page += '<li><img src="' + data.results[j].profile_image_url + '"><h2>' + data.results[j].from_user_name + '</h2><p>' + data.results[j].text + '</p><p class="ui-li-aside">' + data.results[j].created_at + '</p></li>';
      }
      page += '</ul></div></div>';
      body.append(page);
    }
    console.log((Date.now() - startTime));
  });
});

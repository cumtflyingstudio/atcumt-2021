// 动态隐藏导航栏js部分

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
var headerabtn = document.getElementById("header-abtn");
var headerul = document.getElementById("headerurls");

headerabtn.onclick= function(){showurls();}
headerul.onclick= function(){showurls();}

function showurls(){
  if(headerul.className=="headerurls")
    headerul.className += " header-show";
  else
    headerul.className = "headerurls";
}

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    header.classList.remove("styles");
    header.classList.remove("slideDown");
    header.classList.add("slideUp");
  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    header.classList.add("styles");
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }
  if(last_scroll_position<80){
    header.classList.remove("styles");
    header.classList.remove("slideDown");
  }
  headerul.className = "headerurls";
  new_scroll_position = last_scroll_position;
});


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e0bf39d91914d6099433f3fec1c177f6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


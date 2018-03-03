window.addEventListener("load", function() {
  document.getElementById("btSearch").addEventListener("click", function(){ccsearch()});
  //console.log(getParameterByName('t', false));
  var t = gett();
  if (t) {
    document.getElementById("kw").value = t;
    ccsearch();
  }
}, false);
function ccsearch() {
  var kw = document.getElementById("kw").value;
  var xhr;
  if (window.XMLHttpRequest)  {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", '/s', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      var cl = JSON.parse(xhr.responseText).result;
      var clr = document.getElementById("clr");
      while (clr.lastChild) {
        clr.removeChild(clr.lastChild);
      }
      for (var i = 0; i < cl.length; i++) {
        var li = document.createElement("li");
        li.className = "search-list";
        var lis = '<h4>'+cl[i].name+'</h4><hr/>';
        var weblink = cl[i].weblink;
        if (weblink) lis += '<a href="'+weblink+'" target="_blank">'+weblink+'</a>';
        lis += '<p>'+cl[i].description+'</p><hr/><p>'+cl[i].contact_info+'</p>';
        li.innerHTML = lis;
        clr.appendChild(li);
      }
    }
  }
  xhr.send('t='+kw); 
}
function gett() {
  var url = window.location.href;  
  var re = new RegExp("[?&]t=([^&#]*)");
  var res = re.exec(url);
  if (!res) return null;
  if (!res[1]) return null;
  return decodeURIComponent(res[1]);
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
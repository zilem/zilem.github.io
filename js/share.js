function shareFunction(shareID) {
  var box = document.getElementById(shareID);
  box.classList.toggle("show");
}


// SHARING CURRENT DOMAIN, PAGE HAS TO INCLUDE .HTML, POST HAS TO INCLUDE #
function waShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + pagepost;
}
function teShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'tg://msg_url?url=' + location.href.replace(location.hash,"")+ pagepost + '&text=' + post_title;
}
function twShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + pagepost);
}
function fbShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + location.href.replace(location.hash,"") + pagepost);
}
function emShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + location.href.replace(location.hash,"") + pagepost + "%0A%0A" + document.getElementsByTagName("meta")[5].content + "%0A%0A" + byname);
}
function liShare(post_title, pagepost) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + location.href.replace(location.hash,"") + pagepost);
}
//function mShare(post_title, pagepost) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + location.href.replace(location.hash,"") + pagepost);
//}
//function gShare(post_title, pagepost) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + location.href.replace(location.hash,"") + pagepost);
//}



// SHARING SUBDOMAIN PAGE
function wasubpShare(subdomain,page,post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html";
}
function tesubpShare(subdomain,page,post_title) {
  window.location = 'tg://msg_url?url=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html%0A&text=" + post_title;
}
function twsubpShare(subdomain,page,post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}
function fbsubpShare(subdomain,page,post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}
function emsubpShare(subdomain,page,post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Check this out: %0A%0A' + window.location.protocol + '//' +  subdomain + "." +window.location.hostname + "/" + page + ".html" + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}
function lisubpShare(subdomain,page,post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname + "/" + page + ".html");
}



// REDIRECTING SUBDOMAIN
function locationHashChanged() {
    if (location.hash == "#Spaceman") {
        window.location.assign("https://spaceman.zilem.studio");
    }
}

window.onhashchange = locationHashChanged;

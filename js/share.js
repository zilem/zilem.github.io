function shareFunction(shareID) {
  var box = document.getElementById(shareID);
  box.classList.toggle("show");
}
// SHARING PAGE
function wHShare(post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + location.href.replace(location.hash,"");
}
function tHShare(post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + location.href.replace(location.hash,""));
}
//function mHShare(post_title) {
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + location.href.replace(location.hash,""));
//}
function fHShare(post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + location.href.replace(location.hash,""));
}
function lHShare(post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + location.href.replace(location.hash,""));
}
//function gHShare(post_title) {
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + location.href.replace(location.hash,""));
//}
function eHShare(post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Thought you might like this: %0A%0A' + location.href.replace(location.hash,"") + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}

// SHARING POST
function wShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post;
}
function tShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
}
//function mShare(post,post_title) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
//}
function fShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + location.href.replace(location.hash,"") + '%23' + post);
}
function lShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
}
//function gShare(post,post_title) {
//  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + location.href.replace(location.hash,"") + '%23' + post);
//}
function eShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('mailto:?subject=' + post_title + '&body=Thought you might like this: %0A%0A' + location.href.replace(location.hash,"") + "#" + post + "%0A%0A" + document.getElementsByTagName("meta")[5].content + "%0A%0A" + byname);
}

// SHARING SUBDOMAIN
function wsubShare(subdomain,post_title) {
  window.location = 'whatsapp://send?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname;
}
function tsubShare(subdomain,post_title) {
  window.open ('//twitter.com/intent/tweet?text=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
//function msubShare(subdomain,post_title) {
//  window.open ('fb-messenger://share?link=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
//}
function fsubShare(subdomain,post_title) {
  window.open ('//facebook.com/sharer/sharer.php?quote=' + post_title + '&u=' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
function lsubShare(subdomain,post_title) {
  window.open ('//linkedin.com/shareArticle?mini=true&url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
}
//function gsubShare(subdomain,post_title) {
//  window.open ('//plus.google.com/share?url=' + post_title + '%0A' + window.location.protocol + '//' + subdomain + "." + window.location.hostname);
//}
function esubShare(subdomain,post_title) {
  window.open ('mailto:?subject=' + post_title + '&body=Thought you might like this: %0A%0A' + window.location.protocol + '//' +  subdomain + "." +window.location.hostname + "%0A%0A" + 'by Zi R. Lem, Screenwriter-Filmmaker');
}

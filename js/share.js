$(document).ready(function shareFunction(shareID) {
  document.getElementById(shareID).classList.toggle("show");
}
function wShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.location = 'whatsapp://send?text=' + post_title + byname + location.href.replace(location.hash,"") + '%23' + post;
}
function tShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('https://twitter.com/intent/tweet?text=' + post_title + byname + location.href.replace(location.hash,"") + '%23' + post);
} //https://twitter.com/share?text=
function mShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('fb-messenger://share?link=' + post_title + byname + location.href.replace(location.hash,"") + '%23' + post);
}
function fShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('https://facebook.com/sharer/sharer.php?u=' + post_title + byname + location.href.replace(location.hash,"") + '%23' + post);
}
function lShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('https://linkedin.com/shareArticle?mini=true&url=' + location.href.replace(location.hash,"") + '%23' + post + post_title + byname + "%0A%0A" + '&summary=' + document.getElementsByTagName("meta")[4].content);
}
function gShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('https://plus.google.com/share?url=' + post_title + byname + location.href.replace(location.hash,"") + '%23' + post);
}
function eShare(post,post_title) {
  var byname = '%0Aby Zi R. Lem, Screenwriter-Filmmaker%0A';
  window.open ('mailto:?subject=' + post_title + byname + '&body=Thought you might enjoy reading this: %0A%0A' + location.href.replace(location.hash,"") + "#" + post + "%0A%0A" + document.getElementsByTagName("meta")[4].content);
}
)();

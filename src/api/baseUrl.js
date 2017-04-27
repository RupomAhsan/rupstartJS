/*export default function getBaseUrl(){
  const inDevelopment=window.location.hostname==='localhost';
  return inDevelopment?'http://localhost:3001/':'/';
}*/

export default function getBaseUrl() {
 return getQueryStringParameterByName('useMockApi') ? "http://localhost:3001/" :"/"; //"https://desolate-beyond-55700.herokuapp.com/";
}

function getQueryStringParameterByName(name, url) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS, 'i');
  if (!url) {
    url = window.location.href;
  }
  var results = regex.exec(url);
  if (results == null) return "";
  else return decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * Created by GreenElephaantt on 11.01.2017.
 */
//copy in site.js on wp-game.com
var VK={};
VK.api=function(vk_method, vk_params, callback) {
  var script = document.createElement('SCRIPT');
  var tmp_str='';
  for (var key in vk_params) {
    tmp_str+=key+'='+vk_params[key]+'&';
  }
  if(vk_method=="pages.get")
  {
    tmp_str+='access_token='+access_token+'&';
  }
  script.src = 'https://api.vk.com/method/'+vk_method+'?v=5.30&'+tmp_str+'callback=callbackFunc';
  document.getElementsByTagName("head")[0].appendChild(script);
  window.callback=callback;
}
function callbackFunc(result) {
  callback(result);
}
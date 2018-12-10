/**
 * Created by GreenElephaantt on 05.02.2017.
 */
const scripts={};
scripts['work'] = require('./js/wpScripts/work.js');// TODO: cycle require in wpScripts folder

function route(id, key) {
  var container = document.getElementById('scriptsContainer');
  var scriptsForms = container.children;
  for(let i = 0, o = scriptsForms.length; i<o;i++){
    let script = scriptsForms[i],
      scriptForm = script.children,
      res= {};//getElementsByName('need')
    for(let k=0,n=scriptForm.length;k<n;k++){
      if(scriptForm[k].value=='on'){
        res[scriptForm[k].id]=scriptForm[k].checked;
        continue;
      }
      res[scriptForm[k].id]=scriptForm[k].value;
    }
    scripts[scriptsForms[i].id](id, key,res);
  }
  //TODO: parse scriptsContainer and run functions(id element in scriptsContainer) which required with parsed arguments
}
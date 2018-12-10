/**
 * Created by GreenElephaantt on 05.02.2017.
 */
function work(id,key,arg) {
  var res={};
  res.id=id;
  res.key=key;
  res.arg=arg;

  console.log(JSON.stringify(res));

   fetch(`http://nwpstatistics-ghostdivision.rhcloud.com/work?${JSON.stringify(res)}`).catch(function(err) {
   console.log('err in fetch')
   });
}
module.exports=work;
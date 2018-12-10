/**
 * Created by GreenElephaantt on 23.01.2017.
 */
getAllBotsWindow();

function getAllBotsWindow() {
  var bots=db.getAllStatistics();
  var botsContainer = document.getElementById('botsContainer');
  botsContainer.innerHTML='';
  var ol = document.createElement('ol');
  for(let i in bots){
    let li = document.createElement('li');
    li.innerHTML=bots[i]['name'];
    li.style.color= '#217ac0';
    li.style.cursor= 'pointer';
    li.key=bots[i]['key'];
    li.id=i;
    li.addEventListener('click', (e)=>{
      render(e.target.id,e.target.key);
    });
    ol.appendChild(li);
    botsContainer.insertBefore(ol, botsContainer.firstChild);
  }
}
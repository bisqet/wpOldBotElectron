/**
 * Created by GreenElephaantt on 08.03.2017.
 */
const fs = require('fs'),
  pathToDb = path.join(__dirname,'db/db.json'),
  os = require('os'),
  homeDir = os.homedir();
function dbSet (){
  const db = fs.readFileSync(input[4].files[0].path,'utf8');
  fs.writeFileSync(pathToDb, `${db}`);
}
function dbGet (){
  const db = fs.readFileSync(pathToDb,'utf8');
  fs.writeFileSync(path.join(homeDir,'desktop/db.json'), `${db}`);
}
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
function dbCompare (){
  const db1 = JSON.parse(fs.readFileSync(input[4].files[0].path,'utf8')),
    db2 = JSON.parse(fs.readFileSync(input[4].files[1].path,'utf8'));
  console.info(db1,db2);
  const db = JSON.stringify(Object.assign(db1,db2));
  console.info(db);
  fs.writeFileSync(path.join(homeDir,'desktop/db.json'), `${db}`);
}
function dbGet (){
  const db = fs.readFileSync(pathToDb,'utf8');
  fs.writeFileSync(path.join(homeDir,'desktop/db.json'), `${db}`);
}

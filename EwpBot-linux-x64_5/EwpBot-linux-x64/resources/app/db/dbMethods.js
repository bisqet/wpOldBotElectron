/**
 * Created by GreenElephaantt on 23.01.2017.
 */
const
  path = require('path'),
  fs = require('fs'),
  db={},
  pathToDb = path.join(__dirname,'db.json');


db.createConnection = () => {
  try {
    fs.statSync(pathToDb);
    console.log('db.json exists');
  }
  catch (err) {
    if (err.code == 'ENOENT') {
      fs.openSync(pathToDb, 'w');
      fs.appendFileSync(pathToDb, '{}');
      fs.appendFileSync('log', 'db.json was created\n');
    } else {
      console.error('Some other error in dbMethods.createConnection: ', err.code);
    }
  }
};
db.addObject = (u) => {
  console.log(u);
  let data= db.getAllStatistics();
  data[u.id]=u;
  data=JSON.stringify(data);
  fs.writeFileSync(pathToDb, `${data}`);
  fs.appendFileSync('log', `${JSON.stringify(u)}\n`);
};
db.setNewUser = (userInfo) => {
  db.addObject(userInfo);
  return console.info(`user ${userInfo.name} has been added`);
};

db.getAllStatistics = () => {
  return JSON.parse(fs.readFileSync(pathToDb,'utf8'));
};

module.exports=db;
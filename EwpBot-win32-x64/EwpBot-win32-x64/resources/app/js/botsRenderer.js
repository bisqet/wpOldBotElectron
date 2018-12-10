// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
const ipc =require('electron').ipcRenderer;
const db = require('./db/dbMethods.js');
db.createConnection();

function render(id,key) {
  if(!id&&!key){
    var id = document.getElementById('id').value;
    var key = document.getElementById('key').value;
    save(id,key);
  }
  const reply = ipc.sendSync('getInf', `{"id":"${id}","key":"${key}"}`);

  let win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/indexWP.html'),
    protocol: 'file:',
    slashes: true
  }));
  win.webContents.openDevTools();
  win.on('close', function () { win = null });
  route(id,key);
}

function save(id,key) {
  db.setNewUser({'id':id,'key':key});
  getAllBotsWindow();
}
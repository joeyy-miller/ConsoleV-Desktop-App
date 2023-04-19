const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 920,
    height: 600,
    transparent: true,
    frame: false,
    icon: __dirname + '/AppIcon.icns',
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })                  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('close-btn')
    if (el) {
      el.addEventListener('click', function (e) {
		var window = BrowserWindow.getFocusedWindow()
		window.close()
		app.quit()
	  }, false)
    }
})

document.cookie = 'ppkcookie1=testcookie; expires=Tue, 18 Apr 2023 12:00:11 UTC; path=/'

/*
(function () {

    var remote = require('remote'); 
    var BrowserWindow = remote.require('browser-window'); 

   function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
             var window = BrowserWindow.getFocusedWindow();
             window.minimize(); 
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
             var window = BrowserWindow.getFocusedWindow(); 
             window.maximize(); 
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
            var window = BrowserWindow.getFocusedWindow();
            window.close();
            app.quit()
        }); 
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init(); 
        }
   };

})();*/
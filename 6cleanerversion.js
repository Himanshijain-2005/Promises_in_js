function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url wrong"))
        }
        else {
            setTimeout(function () {
                     //async fun for promise
                 console.log("start download" + url)    
                let filename = url.split("/").pop()
                resolve(filename)
            }, 1000)
        }
    })

}
function resize(filename) {
    return new Promise(function (resolve, reject) {
        if (!filename.endsWith(".png")) {
            reject(new Error("file wrong"))
        }
        else {
            console.log("start resize" + filename)
            setTimeout(function () {
                let resizedfile = filename.split(".")[0] + "-resized.png"
                resolve(resizedfile)
            }, 4000)
        }
    })
}
function upload(resizedfilename) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("start upload" + resizedfilename)
            let uploadedurl = "http://imgur.com/" + resizedfilename
            resolve(uploadedurl)
        }, 3000)
    })
}
download("http://cb.lk/logo.png")
    .then(function (fileName) {  //promise chain
        return resize(fileName); //this .then is acting as promise object whose then is in next line
    })
    .then(upload)
    .then(function (resizedFile) {
        console.log("file uploaded to   " + resizedFile);
    })
    .catch(function (err) {
        console.log("Error: " + err);
    });


/*// ❌ Wrong: calling the function instead of passing it
promise.then(console.log("Done!")); // This runs immediately!
This immediately calls console.log("Done!") and passes its return value (undefined) to .then(), which is wrong.

✅ Correct: promise.then(() => console.log("Done!"));

*/
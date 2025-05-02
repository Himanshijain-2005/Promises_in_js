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

Promise.all([
    download("http://bd.lk/logo.png"),
    download("http://bd.lk/logo.png"),
    download("http://bd.lk/logo.png"),

]).then(function (values) {
    return Promise.all(values.map(resize))
})
    .then(function (values) {
        console.log(values)
    }).catch(function (err) {
        console.error(err)
    })

//promise.all([promise1,promise2,promise3]).then(function(values))
//all files run parallely 
//thier resolved value comes in .then
//.then works when all resolved 
//.catch when any one of them dont work
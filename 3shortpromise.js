function downloadpromise() {
    return new Promise(function (resolve, reject) {
        console.log("starting to download file")
        setTimeout(function () {
            console.log("download is complete")
            resolve();
        }, 3000)
    })
}
downloadpromise().then(function () {
    console.log("after download");
})

//promise object me executer function hota jab hum constructor call krte toh executor function call ho jata
//agr uske andar async shi se chal jaye toh resolve bhi call ho jata
//resolve hone ke baad promise fulfill ho jata and then run krta
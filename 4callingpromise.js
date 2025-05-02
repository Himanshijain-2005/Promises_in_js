function downloadpromise() {
    return new Promise(function (resolve, reject) {
        console.log("starting to download");
        setTimeout(function () {
            console.log("log is comp");
            resolve();
        }, 3000)
    })
}
let downloadfile = downloadpromise()
setTimeout(function () {
    downloadfile.then(function () {
        console.log("after download")
    })
}, 4000) //promise and this settimeout function are running side by side
//whole code takes 4 sec not 7 sec --> beauty of asynchronus code
//async task wrapped in promise and promise in another function
//and that function is called




function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url wrong"))
        }
        else {
            setTimeout(function () {     //async fun for promise
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
            setTimeout(function () {
                let resizedfile = filename.split(".")[0] + "-resized.png"
                resolve(resizedfile)
            }, 4000)
        }
    })
}

download("fttp://cb.lk/logo.png").then(
    function (fileName)  //function to recive resolve return value
    {
        resize(fileName).then(function (resizedfile) {
            console.log("resized file" + resizedfile)
        }).catch(function(err)
        {
            console.log(err)
        })
    }
).catch(function(err)
{
    console.log(err)
})
 //.then takes function as arguement
// downalaod call --> promise --> .then --> reiszecalled-->promise --> .then






//new Promise(executor(resolve, reject)) → resolve("data") → .then(result => ...)
/*Step-by-Step Explanation:
✅ 1. new Promise(function(resolve, reject) { ... })
You are creating a new Promise object.

This Promise constructor takes a function as an argument — called the executor function.

That function has two parameters: resolve and reject, which are also functions

✅ 2. resolve(data)
This calls the resolve function and passes "Hello from resolve!" to it.

When you call resolve(), you're saying: "This promise has completed successfully, and here's the result."

✅ 3. .then(function(result) { ... })
The .then() method is used to handle the result from the resolve() function.

It takes another function as an argument, which receives the value passed to resolve().

*/
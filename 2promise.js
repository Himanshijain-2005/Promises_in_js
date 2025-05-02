function sometask(callback) {
    console.log("beginnig of task");
    setTimeout(function () {
        console.log("ending of task");
        callback();  //resolve gets called
    }, 3000)
    console.log("bye");
}

let settaskpromise=function()
{
    return new Promise(function (resolve,reject)
{
    sometask(resolve);
})  //when resolve is called inside setTimeout function promise gets fulfilled 
}
//when resolve gets called it calls then function
settaskpromise().then(function()
{
    console.log("after task is completed");
});
//promise se async function ko easily handle kr skte hai
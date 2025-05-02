function sometask(callback) {
    setTimeout(function () {
        callback();
    }, 3000)
    console.log("bye");
}
sometask(function()
{
    console.log("hello");     

})
//isme pata lagane ke liye async code chal gaya ya nhi hum ek aur function pass krte nested function se
//bachne ke liye hum promise use krte
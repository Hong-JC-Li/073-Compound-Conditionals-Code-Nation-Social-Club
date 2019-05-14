// set the correct username and password combination below
var correctUsername = "hmmmhmmmhmm";
var correctPassword = "hmmmhmmmhmm";


$("button").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
if (username === correctUsername && password === correctPassword) {
    $(".message").text("What's the point of getting it right if it can be hacked in 2 seconds?");
} else if (username === "" || password === "") {
    $(".message").text("ONE PLACE IS BLANK WTF BRUH.");
}
else if 
    (username !== correctUsername && password === correctPassword) {
        $(".message").text("your trash username is wrong");
} 
else if (username === correctUsername && password !== correctPassword) {
    $(".message").text("your password is so bad, you probably suck");
}
else if (username !== correctUsername && password !== correctPassword) {
    $(".message").text("you really suck, like you got zero for two");
}
    
    


});

function showMessage(){

    var msg = document.getElementById("message");
    var post = document.getElementById("box");

    var para = document.createElement("p");
    var str = document.createTextNode(msg.value);

    para.appendChild(str);
    post.appendChild(para);

//^sends messages to newsfeed and resets the form

var firebaseRef = firebase.database().ref().child("messages");
//var messageText = para.value;
firebaseRef.push().set(msg.value);

  document.getElementById('sendmsgs').reset();
}

Retrieving data
var box = doument.getElementById("box");
var firebaseBoxRef = firebase.database().ref().child("box");
firebaseBoxRef.on('value', function(datasnapshot){
 fireBoxheading.innerText = datasnapshot.val();
 });


    //console.log(`${message}`);

 //window.alert("Congrats!!!!! you are our 100th visitor. Click here to win an iPhone X");


function showMessage(){

    var msg = document.getElementById("message");
    var post = document.getElementById("box");

    //var para = document.createElement("p");
    //var str = document.createTextNode(msg.value);
    //para.appendChild(str);
    //post.appendChild(para);

//^sends messages to newsfeed and resets the form

var firebaseRef = firebase.database().ref().child("messages");

firebaseRef.push().set(msg.value);

  document.getElementById('sendmsgs').reset();
}

// retrieving data and load real time

$(document).ready(function(){
  var rootRef = firebase.database().ref().child("messages");
  rootRef.on("child_added", snap => {
    var name = snap.val();
    $('#box').append("<p>" + name + "</p>");
});
});

    //console.log(`${message}`);

 //window.alert("Congrats!!!!! you are our 100th visitor. Click here to win an iPhone X");

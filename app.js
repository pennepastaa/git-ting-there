
function showMessage(){

    var msg = document.getElementById("message");
    var post = document.getElementById("box");

    var para = document.createElement("p");
    var str = document.createTextNode(msg.value);

    para.appendChild(str);
    post.appendChild(para);
    //box.innerHTML = (`${msg}`);
    document.getElementById('sendmsgs').reset();
    //document.getElementById('elementId').value='';
}


         //console.log(`${message}`);

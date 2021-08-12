function addUser(){
    username = document.getElementById("KitUser").value;

    localStorage.setItem("KwitUser", username);

    window.location = "kwitter_room.html";

}
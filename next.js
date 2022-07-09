var firebaseConfig = {
    apiKey: "AIzaSyBYLMbOMbec8GXo4o2Z7wS4J2qa3YiNgmA",
  authDomain: "chat-all-day-39e9a.firebaseapp.com",
  databaseURL: "https://chat-all-day-39e9a-default-rtdb.firebaseio.com",
  projectId: "chat-all-day-39e9a",
  storageBucket: "chat-all-day-39e9a.appspot.com",
  messagingSenderId: "558989174515",
  appId: "1:558989174515:web:326c1595c3e5ced41b3986"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitterpage.html";
  }
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
      });
    });
  
  }
  
  getData();
  
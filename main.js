function Select_name(){
 name= document.getElementById("text_input_screen1").value ;
 localStorage.setItem("name", name)
 window.location= "nextpage.html";
}
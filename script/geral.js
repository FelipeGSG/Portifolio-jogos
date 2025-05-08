function changeTheme(){
  if(document.body.classList.contains("lightTheme")){
    document.body.classList.replace("lightTheme", "darkTheme")
  } else{
    document.body.classList.replace("darkTheme", "lightTheme")
  }
  
}
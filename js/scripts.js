function akanName(){
    var yr=document.getElementById("year").value;
    var cc=parseInt(yr.slice(0 ,1))
    var yy =parseInt(yr.slice(2 ,3))
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var gender = document.getElementByName("gender")
    var dayWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var maleName= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
    var birthday=(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)
    var getAkanName;
}
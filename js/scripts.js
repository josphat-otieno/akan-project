function akanName(){
  var yr=document.getElementById("year").value;
  // var cc=parseInt(yr.slice(0 ,1))
  // var yy =parseInt(yr.slice(2 ,3))  
  var mm = parseInt(document.getElementById("month").value);
  var dd = parseInt(document.getElementById("day").value);
  var dayBorn=mm+"/"+dd+"/"+yr;
  var gender= prompt("Enter your you gender, male or female?")
  alert("Your date of birth (mm/dd/yy) is " +(dayBorn));
  getAkanName(dayBorn,gender, yr, mm ,dd);
  // daysOfWeek=(((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7
  } 
  function getAkanName(dayBorn, gender, yr, mm, dd){
    var dateOfBirth = new Date(dayBorn);
    var daysOfWeek = dateOfBirth.getDay(); 
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var maleName= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  
    if (yr==" " || yr<1900 || yr>2037 && mm==" " || mm<=0 || mm>12 && dd==" " || dd<=0 || dd>31){
      alert ("please enter valid value")
   }if(gender == "male"){
       alert("Your were born on  " + weekDay[daysOfWeek] + " and your Akan name is " + maleName[daysOfWeek]);
    }else if (gender == "female"){
      alert("You were born on " + weekDay[daysOfWeek] + " and your Akan is "+ femaleName[daysOfWeek]);
    }
  }
  
  
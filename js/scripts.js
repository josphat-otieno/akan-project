function akanName(){
    var yr=document.getElementById("year").value;
    var cc=parseInt(yr.slice(0 ,1))
    var yy =parseInt(yr.slice(2 ,3))  
    var mm = parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var dayBorn=mm+"/"+dd+"/"+yr;
    var gender= prompt("Enter your you gender, either male or female?")
    getAkanName(dayBorn);
    } 
    function getAkanName(dayBorn, gender){
      var dateOfBirth = new Date(dayBorn);
      var daysOfWeek = dateOfBirth.getDay();  
      var maleName= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
      var femaleName= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
    
    if(year<1900 || year>2036 && month<=0 || month>12 && day<=0 || day>31){
      alert("Please enter valid values")
    }
      if(gender == "male"){
         console.log (maleName([daysOfWeek]));
      }else if (gender == "female"){
        alert("You were born on " + daysOfWeek[d] + " and you were akan is "+ femaleName[daysOfWeek]);
      }
    }
    
    
    
    
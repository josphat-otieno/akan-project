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
    if(birthday%7==0 && gender.checked==male){
        alert("You were born on "+ dayWeek[0] +" and your Akna name is "+maleName[0])
    }else if (birthday%7==1 && gender.checked==male){
      alert("You were born on "+ dayWeek[1] +" and your Akna name is "+maleName[1])
    }else if (birthday%7==2 && gender.checked==male){
      alert("You were born on "+ dayWeek[2] +" and your Akna name is "+maleName[2])
    }else if (birthday%7==3 && gender.checked==male){
      alert("You were born on "+ dayWeek[3] +" and your Akna name is "+maleName[3])
    }else if (birthday%7==4 && gender.checked==male){
      alert("You were born on "+ dayWeek[4] +" and your Akna name is "+maleName[4])
    }else if (birthday%7==5 && gender.checked==male){
      alert("You were born on "+ dayWeek[5] +" and your Akna name is "+maleName[5])
    }else if (birthday%7==6 && gender.checked==male){
      alert("You were born on "+ dayWeek[6] +" and your Akna name is "+maleName[6])
    }else if (birthday%7==0 && gender.checked==female){
      alert("You were born on "+ dayWeek[0] +" and your Akna name is "+femaleName[0])
    }else if (birthday%7==1 && gender.checked==female){
      alert("You were born on "+ dayWeek[1] +" and your Akna name is "+femaleName[1])
    }else if (birthday%7==2 && gender.checked==female){
      alert("You were born on "+ dayWeek[2] +" and your Akna name is "+demaleName[2])
    }else if (birthday%7==3 && gender.checked==female){
      alert("You were born on "+ dayWeek[3] +" and your Akna name is "+femaleName[3])
    }else if (birthday%7==4 && gender.checked==female){
      alert("You were born on "+ dayWeek[4] +" and your Akna name is "+femaleName[4])
    }else if (birthday%7==5 && gender.checked==female){
      alert("You were born on "+ dayWeek[5] +" and your Akna name is "+femaleName[5])
    }else if (birthday%7==6 && gender.checked==female){
      alert("You were born on "+ dayWeek[6] +" and your Akna name is "+femaleName[6])
    }
    if (year<1900 && year>2100){
        onlcick.button; alert("Please enter a valid year")
    }else if (month<=0 && month>12){
        alert("please enter a valid month")
    }else if (day<=0 && day>31){
        alert ("please enter a valid day")
    }
}
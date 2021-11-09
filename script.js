function buttonListener(){


    const d = new Date();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let day = weekday[d.getDay()];

    if(day=="Wednesday")
    {console.log="positive";
    document.getElementById("positive").style.visibility="visible";
    
    }else{
        document.getElementById("negative").style.visibility="visible";
        alert("Nah, my dudes, it ain't wednesday.");
    }
      



}






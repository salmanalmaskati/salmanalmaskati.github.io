const datee= document.getElementById("date")

function updateTime() {
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
  
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
  
    datee.textContent = `the time is ${timeString} ${dateString}`;
    
    setTimeout(updateTime, 1000); // Call this function again after 1 second
    
    if (hour >= 5 && hour <= 11){

        document.body.style.backgroundImage = "url('sunrise.png')";
        document.body.style.backgroundSize= "cover";
        document.body.style.backgroundRepeat= "no-repeat";
        document.body.style.height="100vh";
        document.body.style.backgroundPosition = "center";
    
    
        datee.style.color = "white";
        datee.style.textAlign = "center";
     
    
        
    
    }

    else if (hour >= 12 && hour <= 17){
        
        document.body.style.backgroundImage = "url('afternoon.png')";
        document.body.style.backgroundSize= "cover";
        document.body.style.backgroundRepeat= "no-repeat";
        document.body.style.height="100vh";
        document.body.style.backgroundPosition = "center";
    
    
        datee.style.color = "white";
        datee.style.textAlign = "center";



    }

    else if (hour >= 18 && hour <= 20){

        document.body.style.backgroundImage = "url('sunset.png')";
        document.body.style.backgroundSize= "cover";
        document.body.style.backgroundRepeat= "no-repeat";
        document.body.style.height="100vh";
        document.body.style.backgroundPosition = "center";
    
    
        datee.style.color = "white";
        datee.style.textAlign = "center";

    
    }
    else if (hour >= 21 || hour <= 4){

        document.body.style.backgroundImage = "url('night.png')";
        document.body.style.backgroundSize= "cover";
        document.body.style.backgroundRepeat= "no-repeat";
        document.body.style.height="100vh";
        document.body.style.backgroundPosition = "center";
    
    
        datee.style.color = "white";
        datee.style.textAlign = "center";
   
    
    }
    
    
}

// Call the function to start updating the time on the page
updateTime();
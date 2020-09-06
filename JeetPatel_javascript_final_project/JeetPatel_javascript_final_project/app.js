window.addEventListener("load", () => {
    // declared variable
   let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    
    let locationTimezone = document.querySelector(".location-timezone");
    
    let temperatureSection = document.querySelector(".temperature");
    
    const temperatureSpan = document.querySelector(".temperature span");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
            lat = position.coords.latitude;
        // get permission for access    
        const proxy = "https://cors-anywhere.herokuapp.com/";    
        // online link to get current Temperature, longitude and latitude
            const api = `${proxy}https://api.darksky.net/forecast/f8c49c10e0a89a1270fbccdfeee0a501/${lat},${long}`;
            
            fetch(api)
            .then(response => {
                return response.json();
            })
            
            .then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                
                // Set Dom elements from Api
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                
                // formula for celsius
                
                let celsius = (temperature - 32) * (5 / 9);
                // change temerature from C TO F
                
                temperatureSection.addEventListener('click', () =>{
                    if(temperatureSpan.textContent === "F"){
                       temperatureSpan.textContent = "C"; 
                        temperatureDegree.textContent = Math.floor(celsius);
                    }else{
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent=temperature;
                    }
                });
            });
        });
    }
});
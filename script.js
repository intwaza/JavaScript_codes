function cities() {
    const city = ["kampala", "kigali", "nairobi"];
    for (let element of city) {
        element= element.charAt(0).toUpperCase() + element.slice(1);
        console.log(element);
    }
} 
cities();





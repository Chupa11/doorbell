function playSound(){
    const audio = document.getElementById("sound");
    audio.play();
}



document.getElementById("myButton").addEventListener('click', async()=>{
    try{
        // const filters = [
        //     { name: "Headphones" }, // Filter by device name
        //   ];
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true // You can specify the services you need
        });
        console.log("Name: " + device.name);
        console.log("ID: " + device.id);
    
        // Connect to the remote GATT server
        const server = await device.gatt.connect();
        console.log("Connected: " + server.connected);
    }catch(error){
            console.log(error);
    }
});


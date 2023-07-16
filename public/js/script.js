var gpio = require("onoff").Gpio
var LED = new gpio(4, "out")

function togglePin(){
    console.log("Fungerar!")
    if(LED.readSync() === 0){
        console.log("På!")
        LED.writeSync(1)
    }
    else{
        console.log("Av!")
        LED.writeSync(0)
    }
}
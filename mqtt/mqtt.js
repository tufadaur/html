


// Create a client instance
client = new Paho.MQTT.Client("212.227.226.198", 8083, "peppe");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("tufadaur");
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {

    var topic = message.destinationName;
    var payload = message.payloadString;
    console.log (payload) ;

    obj = JSON.parse(payload);

    document.getElementById('temperatura').innerText = obj.temperatura.toFixed(1) ;
    

}

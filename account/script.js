Console.log("Donot send any info shown in the delevoper tools, Your account might be at risk of being hacked if you do so.")
var database=firebase.database();
var token=localStorage.getItem("authid")
console.log("Connecting to the auth id ::::: "+token+" (Donot copy this!!!!!)")

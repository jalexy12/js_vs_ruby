function Car(model, noise) {
	this.model = model;
	this.noise = noise;
}

Car.prototype.makeNoise = function(){
	console.log(this.noise);
}

Car.prototype.drive = function(){
	console.log("Whooosh");
}

Car.prototype.fill = function(gallons){
	console.log("Filling "
				 + this.model 
				 + " with " 
				 + gallons 
				 + " gallons of gas");
}

var tesla = new Car("Tesla PSOMECAR", "Silence")
tesla.makeNoise();
tesla.fill(14);



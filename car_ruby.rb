class Car 
	def initialize(model, noise)
		@model = model
		@noise = noise
	end

	def fill_tank(gallons)
		puts "Filling #{@model} with #{gallons} gallons of gas"
	end

	def make_noise
		puts @noise
	end

	def drive
		puts "Wooooosssh"
	end
end

tesla = Car.new("Tesla PSOMECAR", "'Silence'")
tesla.make_noise
tesla.fill_tank(14)
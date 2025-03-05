class TipsCalc {
	constructor() {
		this.reset();
	}

	setValue(property, value) {
		if (this.hasOwnProperty(property)) {
			this[property] = value;
		}
	}

  	getValue(property) {
    	if (this.hasOwnProperty(property)) {
      		return this[property];
    	} else {
      		return null;
    	}
	}

	calculate() {
		if(this.people > 0) {
			this.totalAmount = this.billAmount + (this.billAmount * this.tipRatio / 100);
			this.amountPerPerson = this.totalAmount / this.people;
		} else {
			this.totalAmount = 0.00;
			this.amountPerPerson = 0.00;
		}
	}

	reset() {
		this.tipRatio = 0;
		this.billAmount = 0;
		this.people = 0;
		this.totalAmount = 0.00;
		this.amountPerPerson = 0.00;
	}
}
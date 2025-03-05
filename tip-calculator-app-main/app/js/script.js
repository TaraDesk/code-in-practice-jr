// Element
const tipsRadio = document.querySelectorAll('.tips__button-radio');
const customTip = document.querySelector('.tips__custom-input');
const bill = document.querySelector('.bill__input');
const numOfPeople = document.querySelector('.peoples__input');
const errMessage = document.querySelector('.error-message');

const totalNumber = document.querySelector('.total__value');
const amountNumber = document.querySelector('.amount__value');

const resetBtn = document.querySelector('.reset');
resetBtn.disabled = true;

// Variable 
const tipsCalculator = new TipsCalc();

const handleCalc = () => {
	tipsCalculator.calculate();

	let totalAmount = tipsCalculator.getValue('totalAmount').toFixed(2);
	let amountPerPerson = tipsCalculator.getValue('amountPerPerson').toFixed(2);

	totalNumber.textContent = `$${totalAmount}`;
	amountNumber.textContent = `$${amountPerPerson}`;
}

const disabledReset = () => {
	if( bill.value != 0 || numOfPeople.value !=0) {
		resetBtn.disabled = false;
	} else {
		resetBtn.disabled = true;
	}
}

bill.addEventListener('input', (e) => {
	const value = parseFloat(e.target.value);
  
	if (!isNaN(value) && value < 0) {
    	e.target.value = '';
    	return;
  	}
  
  	tipsCalculator.setValue('billAmount', !isNaN(value) ? value : 0);
  	handleCalc();
  	disabledReset();
})

numOfPeople.addEventListener('input', (e) => {
	const value = parseFloat(e.target.value);

    if (!isNaN(value) && value < 0) {
    	e.target.value = '';
    	return;
  	}

  	if (value == 0) {
    	errMessage.style.display = 'block';
    	numOfPeople.classList.add("error");
  	} else {
  		errMessage.style.display = 'none';
  		numOfPeople.classList.remove("error");
  	}
  
  	tipsCalculator.setValue('people', !isNaN(value) ? value : 0);
  	handleCalc();
  	disabledReset();
})

customTip.addEventListener('input', (e) => {
	const value = parseFloat(e.target.value);

    if (!isNaN(value) && value < 0) {
    	e.target.value = '';
    	return;
  	}
  	
	tipsRadio.forEach(radio => radio.checked = false);
  	tipsCalculator.setValue('tipRatio', !isNaN(value) ? value : 0);
  	handleCalc();
});

tipsRadio.forEach(radio => {
    radio.addEventListener('click', (e) => {
        if (customTip.value.trim() !== '') {
            customTip.value = '';    
        }

        tipsCalculator.setValue('tipRatio', e.target.value);
	    handleCalc();
    });
});



resetBtn.addEventListener('click', () => {
	tipsCalculator.reset();

	tipsRadio.forEach(radio => radio.checked = false);
	customTip.value = '';
	bill.value = '';
	numOfPeople.value = '';
	totalNumber.textContent = '$0.00';
	amountNumber.textContent = '$0.00';

	disabledReset();
})

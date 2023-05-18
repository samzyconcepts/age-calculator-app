/**
 *      target the value from day, month and year
 *      check if the input is empty and display error if they are
 *      else run the calculation and return the result
 *
 *      new Date(year, month, date, hours, minutes, seconds, ms)
 *
 *      let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
 *      alert(date);
 *
 *      getFullYear()
 *      Get the year (4 digits)
 *      getMonth()
 *      Get the month, from 0 to 11.
 *      getDate()
 *      Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
 */

const calculateBtn = document.querySelector('button'),
	inputContainer = document.querySelector('.input-container')

calculateBtn.addEventListener('click', () => {
	const dayInput = document.querySelector('#day').value,
		monthInput = document.querySelector('#month').value,
		yearInput = document.querySelector('#year').value

	// Condition for an empty field
	if (dayInput === '' || monthInput === '' || yearInput === '') {
		labels = document.getElementsByTagName('label')
		inputContainer.classList.add('error')

		Array.from(labels).forEach((label) => {
			const errorMsg = document.createElement('p')
			errorMsg.classList.add('error')
			errorMsg.textContent = 'This field is required'
			label.appendChild(errorMsg)

			// remove the error after 3seconds
			setTimeout(() => {
				inputContainer.classList.remove('error')
				label.removeChild(errorMsg)
			}, 3000)
		})
	}

	if (dayInput > 31) {
		labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be a valid day'

		labels[0].appendChild(errorMsg)

		setTimeout(() => {
			inputContainer.classList.remove('error')
			labels[0].removeChild(errorMsg)
		}, 3000)
	}

	if (monthInput > 12) {
		labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be a valid month'

		labels[1].appendChild(errorMsg)

		setTimeout(() => {
			inputContainer.classList.remove('error')
			labels[1].removeChild(errorMsg)
		}, 3000)
	}

	const currentDate = new Date(),
		currentYear = currentDate.getFullYear(),
		currentMonth = currentDate.getMonth() + 1,
		currentDay = currentDate.getDate()

	if (yearInput > currentYear) {
		labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be in the past'

		labels[2].appendChild(errorMsg)
		setTimeout(() => {
			inputContainer.classList.remove('error')
			labels[2].removeChild(errorMsg)
		}, 3000)
	}

	const ageDay = currentDay - dayInput,
		ageMonth = currentMonth - monthInput,
		ageYear = currentYear - yearInput

	if (ageDay < 0) {
		ageMonth--

                
	}

	document.querySelector('.result-container .day-value').innerHTML = ageDay
	document.querySelector('.result-container .month-value').innerHTML =
		ageMonth
	document.querySelector('.result-container .year-value').innerHTML = ageYear
})

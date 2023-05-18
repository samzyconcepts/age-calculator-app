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

const day = document.querySelector('#day').value,
	month = document.querySelector('#month').value,
	year = document.querySelector('#year').value,
	calculateBtn = document.querySelector('button'),
	inputContainer = document.querySelector('.input-container')

calculateBtn.addEventListener('click', () => {
	
        // Condition for an empty field
	if (day === '' || month === '' || year === '') {
		labels = document.getElementsByTagName('label')
		inputContainer.classList.add('error')

		Array.from(labels).forEach((label) => {
			const errorMsg = document.createElement('p')
			errorMsg.classList.add('error')
			errorMsg.textContent = 'This field is required'
			label.appendChild(errorMsg)

			// remove after 3seconds
			setTimeout(() => {
				inputContainer.classList.remove('error')
				label.removeChild(errorMsg)
			}, 3000)
		})
	}

	if (day > 31) {
		labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be a valid day'

		labels[0].appendChild(errorMsg)
	}
        if (month > 12) {
                labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be a valid month'

		labels[1].appendChild(errorMsg)
        }
        if (year > new Date()) {
                labels = document.getElementsByTagName('label')

		inputContainer.classList.add('error')

		const errorMsg = document.createElement('p')
		errorMsg.classList.add('error')
		errorMsg.textContent = 'Must be in the past'

		labels[3].appendChild(errorMsg)
        }
})



const input = document.querySelector('input')
const btn = document.querySelector('button')
const list = document.querySelector('ul')

function addListItem() {
	const newItem = document.createElement('li')
	const text = input.value
	newItem.innerText = text
	list.appendChild(newItem)
	input.value = ''
}

btn.addEventListener('click', addListItem)
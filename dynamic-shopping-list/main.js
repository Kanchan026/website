let add = document.querySelector("#addItem");
let items = document.querySelector("#items");
let input = document.querySelector("#listinput");

add.onclick = function () {
	let text = document.listform.listname.value;
	//alert(text);
	//creating list element
	let list = document.createElement("li");

	//creating text node
	let listtext = document.createTextNode(text);

	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	//adding list items inside ul
	items.appendChild(list);
	list.appendChild(listtext);
	list.appendChild(deleteButton);

	//removing the list itenms after clicking on the delete button
	deleteButton.onclick = function () {
		items.removeChild(list);
	};
	input.value = "";
};

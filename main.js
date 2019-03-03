/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
// Get box and button by id
// Listen for click

const inputBox = document.getElementById('inputBox');
const itemList = document.getElementById('items');
const totalContainer = document.getElementById('total-container');


inputBox.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
  e.preventDefault();

  const newItem = parseFloat(document.getElementById('item').value).toFixed(2);
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(`${'$'}${newItem}`));

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  document.getElementById('calculate').remove();
  sumItems();
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
  document.getElementById('calculate').remove();
  sumItems();
}

function sumItems() {
  const items = itemList.getElementsByTagName('li');
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
  // do something with items[i], which is a <li> element
    const num = parseFloat(items[i].innerText.replace('$', ''));
    // console.log();
    sum += num;
  }
  const total = document.createTextNode(`${'$'}${sum.toFixed(2)}`);
  const div = document.createElement('div');
  div.className = 'ml-auto p-2 bd-highlight';
  div.id = 'calculate';
  totalContainer.appendChild(div);
  div.appendChild(total);
}

sumItems();

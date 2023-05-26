const addItem = document.querySelector('#addItemBtn');
const removeItem = document.querySelector('#removeItemBtn');

addItem.addEventListener('click', () => {
  let item = document.querySelector('#addItem');
  let itemVal = item.value;
  if (itemVal !== '' && itemVal !== NaN) {
    console.log(itemVal);
    window.localStorage.setItem(itemVal, itemVal);
    item.value = '';
    item.style.border = '';
    alert('Value add to local Storage');
  } else {
    item.style.border = '1px solid red';
    alert('Please enter some Value to add');
  }
  viewAllItems();
});

removeItem.addEventListener('click', () => {
  let remItem = document.querySelector('#removeItem');
  let remItemVal = remItem.value;
  if (remItemVal !== '' && remItemVal !== NaN) {
    let getItem = window.localStorage.getItem(remItemVal);
    console.log(getItem);
    if (getItem) {
      window.localStorage.removeItem(remItemVal);
      remItem.value = '';
      remItem.style.border = '';
      alert(remItemVal + ' removed from local storage');
    } else {
      alert(remItemVal + ' not found in local storage');
    }
  } else {
    remItem.style.border = '1px solid red';
    alert('Please enter some Value to remove');
  }
  viewAllItems();
});

function viewAllItems() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  var ulItem = document.querySelector('#items');
  ulItem.innerHTML = '';
  ulItem.style.width = '300px';
  while (i--) {
    values.push({ key: keys[i], value: localStorage.getItem(keys[i]) });
    let tempItem = document.createElement('li');
    tempItem.style.margin = '3px';
    tempItem.style.borderBottom = '1px solid gray';
    if (i % 2 === 0) tempItem.style.backgroundColor = '#CCC';
    tempItem.innerText = `key:${keys[i]}, value:${localStorage.getItem(
      keys[i]
    )}`;
    ulItem.appendChild(tempItem);
  }

  console.log(values);
}
viewAllItems();

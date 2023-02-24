let id = 0;

document.getElementById('submit').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1); //position one = row 2
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-bill').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('date-due').value;
    row.insertCell(3).innerHTML = document.getElementById('amount-due').value;
    let actions = row.insertCell(4);
    actions.appendChild(createPaidButton(id++));
    document.getElementById('new-bill').value = '';
});

function createPaidButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Paid';
    btn.onclick = () => {
      let elementPaid = document.getElementById(`item-${id}`);
      elementPaid.setAttribute("class", "table-success");
    };
    return btn;
}
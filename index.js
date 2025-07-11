let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const dltBtn = document.getElementById('dlt-btn');
const saveBtn = document.getElementById('save-btn');

//localStorage.clear();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: 'https://www.linkedin.com/in/per-harald-borgen/' }];

saveBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (save) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
  });
});

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

dltBtn.addEventListener('dblclick', function () {
  //console.log('dubble clicked');
  //alert('click the dlt button');
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

//console.log(leadsFromLocalStorage)

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  // Save the myLeads array to localStorage
  // PS: remember JSON.stringify()
  //localStorage.getItem("myLeads" ,JSON.parse(myLeads))

  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);

  // To verify that it works:
  console.log(localStorage.getItem('myLeads'));
});

let state = {
  stadiums: [
    { id: 1, name: 'San Siro', date: '28/05/2021', visited: 'no' },
    { id: 2, name: 'Wembley', date: '28/05/2021', visited: 'yes' },
  ],
};

// STATE FUNCTIONS
const setState = (stadiumToUpdate) => {
  state = { ...state, ...stadiumToUpdate };
  render();
};
// RENDER FUNCTIONS
const appEl = document.querySelector('#app');

const renderStadium = (stadium) => {
  const listEl = document.createElement('li');
  listEl.setAttribute('class', 'stadium-item');

  listEl.innerText = stadium.name;

  const visitedPEl = document.createElement('p');
  visitedPEl.setAttribute('class', 'visited-stadium');
  visitedPEl.innerText = `Have you been to this stadium?: ${stadium.visited}`;

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'X';

  deleteButton.addEventListener('click', function () {
    const filteredStadiums = state.stadiums.filter(function (targetedStadium) {
      return targetedStadium.id !== stadium.id;
    });
    setState({ stadiums: filteredStadiums });
  });
  listEl.append(visitedPEl, deleteButton);

  return listEl;
};

const renderStadiumList = () => {
  const ulEl = document.createElement('ul');
  ulEl.setAttribute('class', 'stadium-list');

  for (const stadium of state.stadiums) {
    const liEl = renderStadium(stadium);
    ulEl.append(liEl);
  }

  appEl.append(ulEl);
};

const renderAddStadiumForm = () => {
  const formEl = document.createElement('form');
  formEl.setAttribute('class', 'add-stadium-form');

  const nameInput = document.createElement('input');

  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Enter stadium name...');
  nameInput.setAttribute('required', 'true');

  const visitedSelect = document.createElement('select');
  visitedSelect.setAttribute('name', 'visited');

  const visited = ['Yes', 'No'];

  for (const visit of visited) {
    const optionEl = document.createElement('option');
    optionEl.innerText = visit;
    optionEl.setAttribute('value', visit.toLocaleLowerCase());
    visitedSelect.append(optionEl);
  }

  const addStadiumButton = document.createElement('button');
  addStadiumButton.setAttribute('type', 'submit');
  addStadiumButton.setAttribute('class', 'add-stadium-button');
  addStadiumButton.innerText = 'ADD STADIUM';

  formEl.append(nameInput, visitedSelect, addStadiumButton);

  formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    let date = new Date();
    const stadium = {
      name: nameInput.value,
      date: date.toLocaleDateString(),
      visited: visitedSelect.value,
    };
    // server
  });
  appEl.append(formEl);
};

// MAIN RENDER
const render = () => {
  appEl.innerHTML = '';

  renderAddStadiumForm();
  renderStadiumList();
};

render();

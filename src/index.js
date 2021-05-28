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

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'X';

  deleteButton.addEventListener('click', function () {
    const filteredStadiums = state.stadiums.filter(function (targetedStadium) {
      return targetedStadium.id !== stadium.id;
    });
    setState({ stadiums: filteredStadiums });
  });
  listEl.append(deleteButton);

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

const renderAddStadiumForm = () => {};

// MAIN RENDER
const render = () => {
  appEl.innerHTML = '';

  renderStadiumList();
};

render();

const cardsGrid = document.querySelector('.cards-grid');
const cards = document.querySelectorAll('.card');

const url = 'https://picsum.photos/v2/list';

const loadedContent = async () => {
  const response = await fetch(url);
  const data = await response.json();
  createdCards(data);
};

const createdCards = (data) => {
  let cardsList = '';

  for (let i = 0; i < cards.length; i++) {
    const newCard = `
      <article class="card">
        <img src=${data[i].download_url} class="top-img" alt=${data[i].author}>
  
        <div class="content">
          <h3 class="card-title">Lorem ipsum</h3>
          <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p class="card-text">Nemo, voluptatum!</p>
        </div>
      </article>
    `;

    cardsList += newCard;
  }

  cardsGrid.innerHTML = cardsList;
};

loadedContent();

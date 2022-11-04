// Variables
const themeIcon = document.querySelector('.theme-icon');
const cards = [...document.querySelectorAll('.card')];

// Dark mode
themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.contains('dark-mode')
        ? themeIcon.innerHTML = '<i class="far fa-sun"></i>'
        : themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
});

// Expanding cards to show more info
function expandCard(card) {
    let cardImgs = card.querySelectorAll('.card-img');
    let moreInfo = card.querySelectorAll('.more-info');
    cardImgs.forEach(cardImg => {
        cardImg.classList.toggle('active');
    });
    moreInfo.forEach(p => {
        p.classList.toggle('active');
    });
};

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        let index = cards.indexOf(e.target);
        console.log(index);
        if ((index >= 1) || (e.target == document.querySelector('.card-links-list').firstChild)) {
            expandCard(cards[index]);
        };
    });
});

// const readMore = document.getElementById('')

// readMore.forEach(link => {
//     link.addEventListener('click', function() {
//         expandCard();
//     });
// });










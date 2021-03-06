const moreLessBtnQuery = window.matchMedia('(min-width: 992px)');

const speakers = [
  {
    name: 'Marwan Alzarouni',
    position: 'CEO, Dubai Blockchain Center; UAE',
    description: 'Marwan, a Crypto Pioneer is also the CEO of Foresee Payment Services LLC which is the UAE’s first crypto commodity payment processing company.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/marwan-alzarouni.jpg',
  },
  {
    name: 'Christian Kranicke',
    position: 'Founding Partner, Blufolio; Geneva, Switzerland',
    description: 'Christian has over 20 years’ experience working across emerging markets.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/Christian-Kranicke.jpg',
  },
  {
    name: 'Isabell M. Welpe',
    position: 'Chair for Strategy and Organization, Technical University of Munich, Germany',
    description: 'Professor Welpe conducts research in the area of leadership, innovation, and organization from a behavioral science perspective.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/Isabell-M-Welpe.jpg',
  },
  {
    name: 'Toby Young',
    position: 'Chief Investment Officer, NeoFlow Asset Management',
    description: 'Tobias is an accomplished and experienced professional with over 20 years’ experience in financial markets and trading.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/Toby-Young.jpg',
  },
  {
    name: 'Constantin-Claudiu Minea',
    position: 'Co-Founder & CEO, SeedOn, Romania',
    description: 'As the co-founder and project coordinator of SeedOn, Constantin has put all his effort, passion, and dreams into building software solutions.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/Constantin-Claudiu-Minea.jpg',
  },
  {
    name: 'Anna Agu',
    position: 'Partner, Lex Law Office, Estonia',
    description: 'Anna Agu is an inspiring Organizer of Blockchain/Crypto/Fintech conferences, especialized in arranging Blockchain/Fintech events successfully.',
    profilePic: 'https://tresconglobal.com/conferences/blockchain/dubai/assets/img/speakers/2022/Anna-Agu.jpg',
  },
];

function addSpeakers(speakers) {
  const speakersContainer = document.getElementById('speakers');
  const strHTML = [];
  let strTemp = '';
  for (let i = 0; i < speakers.length; i += 1) {
    strTemp = `
    <div class="col-lg-6">
      <div class="row m-0 speaker-card">
        <div class="col-3 p-0 d-flex justify-content-end align-items-end speaker-photo-bg">
          <img class="speaker-photo" src=${speakers[i].profilePic} alt="speaker photo">
        </div>
        <div class="col-9 ps-4 d-flex flex-column">
          <h2 class="speaker-name">${speakers[i].name}</h2>
          <h3 class="speaker-position fs-4">${speakers[i].position}</h3>
          <hr class="mx-0 my-auto">
          <p class="speaker-description mb-0 mt-1">
          ${speakers[i].description}
          </p>
        </div>
      </div>
    </div>
    `;
    strHTML.push(strTemp);
  }
  speakersContainer.innerHTML = strHTML.join('');
}

addSpeakers(speakers);

const speakersContainer = document.getElementById('speakers');

function speakersCollapse() {
  const collapsedHeight = document.getElementsByClassName('col-lg-6')[0].clientHeight + document.getElementsByClassName('col-lg-6')[1].clientHeight + 36;
  speakersContainer.style.maxHeight = `${collapsedHeight}px`;
}

function speakersExpand() {
  speakersContainer.style.maxHeight = `${speakersContainer.scrollHeight}px`;
}

const moreBtn = document.getElementById('more-btn');

if (!moreLessBtnQuery.matches) {
  moreBtn.collapsed = true;
  speakersCollapse();
}

function moreLessBtnFunc(mediaQuery) {
  if (mediaQuery.matches) {
    speakersExpand();
    speakersContainer.style = '';
    if (!moreBtn.collapsed) {
      moreBtn.innerHTML = 'MORE<i class="fas fa-angle-down caret"></i>';
      moreBtn.collapsed = true;
    }
    window.removeEventListener('resize', () => {
      speakersContainer.classList.toggle('animation', false);
      if (!moreLessBtnQuery.matches) {
        if (moreBtn.collapsed) {
          speakersCollapse();
        } else {
          speakersExpand();
        }
      }
    });
  } else {
    window.onload = speakersCollapse;
    window.addEventListener('resize', () => {
      speakersContainer.classList.toggle('animation', false);
      if (!moreLessBtnQuery.matches) {
        if (moreBtn.collapsed) {
          speakersCollapse();
        } else {
          speakersExpand();
        }
      }
    });
  }
}

moreBtn.addEventListener('click', () => {
  if (moreBtn.collapsed) {
    speakersContainer.classList.toggle('animation', true);
    speakersExpand();
    moreBtn.innerHTML = 'LESS<i class="fas fa-angle-up caret"></i>';
    moreBtn.collapsed = false;
  } else {
    speakersContainer.classList.toggle('animation', true);
    speakersCollapse();
    moreBtn.innerHTML = 'MORE<i class="fas fa-angle-down caret"></i>';
    moreBtn.collapsed = true;
  }
});

moreLessBtnQuery.addEventListener('change', moreLessBtnFunc);
moreLessBtnFunc(moreLessBtnQuery);

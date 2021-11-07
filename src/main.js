// Query Selectors
var mainPosterImage = document.querySelector('.poster-img');
var mainPosterTitle = document.querySelector('.poster-title');
var mainPosterQuote = document.querySelector('.poster-quote');

// *Buttons
var savePosterButton = document.querySelector('.save-poster');
var savedPostersButton = document.querySelector('.show-saved');
var showRandomButton = document.querySelector('.show-random');
var createPosterButton = document.querySelector('.show-form');
var backToMainButton = document.querySelector('.back-to-main');
var showMainButton = document.querySelector('.show-main');
var makePosterButton = document.querySelector('.make-poster');

// *Sections
var posterForm = document.querySelector('.poster-form');
var mainPosterArea = document.querySelector('.main-poster');
var savedPostersArea = document.querySelector('.saved-posters');
var savedPostersGrid = document.querySelector('.saved-posters-grid');

// *Form Elements
var inputImageURL = document.getElementById('poster-image-url');
var inputTitle = document.getElementById('poster-title');
var inputQuote = document.getElementById('poster-quote');

// Data
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// Event Listeners
window.addEventListener('load', changePoster);

savePosterButton.addEventListener('click', savePoster);
savedPostersButton.addEventListener('click', showSavedPosters);
showRandomButton.addEventListener('click', changePoster);
createPosterButton.addEventListener('click', showForm);
backToMainButton.addEventListener('click', showMainPoster);
showMainButton.addEventListener('click', showMainPoster);
makePosterButton.addEventListener('click', makePoster);

savedPostersArea.addEventListener('dblclick', function(event) {
  removePoster(event);
});

// Functions and Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function changePoster() {
  var newImage = images[getRandomIndex(images)];
  var newTitle = titles[getRandomIndex(titles)];
  var newQuote = quotes[getRandomIndex(quotes)];

  mainPosterImage.src = newImage;
  mainPosterTitle.innerText = newTitle;
  mainPosterQuote.innerText = newQuote;

  currentPoster = new Poster(newImage, newTitle, newQuote);
}

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }

  savedPostersGrid.innerHTML +=
    `<section class="mini-poster" id="${currentPoster.id}">
      <img src=${currentPoster.imageURL}>
      <h2>${currentPoster.title}</h2>
      <h4>${currentPoster.quote}</h2>
    </section>`;
}

function showSavedPosters() {
  savedPostersArea.classList.remove('hidden');
  mainPosterArea.classList.add('hidden');
}

function showForm() {
  posterForm.classList.remove('hidden');
  mainPosterArea.classList.add('hidden');
}

function showMainPoster() {
  var savedPostersClasses = savedPostersArea.classList;
  var posterFormClasses = posterForm.classList;

  mainPosterArea.classList.remove('hidden');
  savedPostersArea.classList.add('hidden');
  posterForm.classList.add('hidden');
}

function makePoster() {
  event.preventDefault();

  var newImage = inputImageURL.value;
  var newTitle = inputTitle.value;
  var newQuote = inputQuote.value;

  images.push(newImage);
  titles.push(newTitle);
  quotes.push(newQuote);

  currentPoster = new Poster(newImage, newTitle, newQuote);

  mainPosterImage.src = newImage;
  mainPosterTitle.innerText = newTitle;
  mainPosterQuote.innerText = newQuote;

  showMainPoster();
}

function removePoster(event) {
  var miniPoster = event.target.closest('section.mini-poster');
  var miniPosterId = miniPoster.getAttribute('id');

  for (var i = 0; i < savedPosters.length; ++i) {
    if (savedPosters[i].id == miniPosterId) savedPosters.splice(i, 1);
  }

  miniPoster.remove();
}

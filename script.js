
// PAGE NAVIGATION
let currentPage = 0;
const totalPages = 7;

function showPage(number) {
  currentPage = Math.max(0, Math.min(number, totalPages - 1));

  document.querySelectorAll(".page").forEach((page, index) => {
    page.classList.toggle("active", index === currentPage);
  });

document.getElementById("pageNumber").textContent =
  String(currentPage + 1).padStart(2, "0") + " / " +
  String(totalPages).padStart(2, "0");


  document.getElementById("nav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

// EMOTIONAL LETTERS
const letters = [
  {
    title: "When you miss me ♡",
    text: "Nenu kuda ninnu chala miss avthunna. Mana three days memories gurthuchesukuntu, malli eppudu kalusthama ani wait chesthunna. 🥹❤️"
  },
  {
    title: "When you're sad ♡",
    text: "Em jarigina sare, nuvvu okkadive kaadhu. Nenu eppudu nee pakkana unta, problems anni kalisi face cheddham. 🫂❤️"
  },
  {
    title: "When you need a hug ♡",
    text: "Ippudu nee daggara undi gattiga hug chesukoni, ninnu assalu vadalakunda undali anipisthundhi. 🥹🫂"
  },
  {
    title: "When you can't sleep ♡",
    text: "Mana cute memories anni gurthuchesuko, kitchen lo kalisi spend chesina aa moments. I wish I was there beside you. ❤️"
  },
  {
    title: "When you doubt yourself ♡",
    text: "Nuvvu entha special oo neeku teliyakapovachu, kaani naaku maatram nuvvu chala precious. I believe in you and I'm always proud of you. ❤️"
  },
  {
    title: "When you need a smile ♡",
    text: "Nee smile naaku chala istam. Inka mana mutton curry, potato fry lanti dates chala pending unnayi! 😂❤️🧿"
  }
];

function openLetter(index) {
  document.getElementById("letterTitle").textContent =
    letters[index].title;

  document.getElementById("letterText").textContent =
    letters[index].text;

  document.getElementById("letterModal").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letterModal").classList.add("hidden");
}

document.getElementById("letterModal").addEventListener("click", function(e) {
  if (e.target === this) closeLetter();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeLetter();
});

// 25 REASONS TO LOVE HIM
const reasons = [
  "Your caring nature",
"The way you make me feel at home",
"Your princess treatment",
"The way you remind me of my dad's care",
"Your little gestures",
"The effort you put in to see me",
"Your 400+ km journey for me",
"Remembering my love for dark chocolates",
"Your warm hugs",
"The way you hold my hand",
"Your beautiful eyes",
"The way you admire me",
"Your concern for my comfort",
"The way you ask if I'm okay",
"Your patience and understanding",
"The way you cook for me",
"Feeding me with your own hands",
"Our little kitchen moments",
"Our cute car drives",
"The way you check on me",
"Your sweet surprises",
"The happiness you bring me",
"The way you make me feel safe",
"Our beautiful three days together",
"The way you made me believe in love again"
];

const reasonGrid = document.getElementById("reasonGrid");
const reasonCount = document.getElementById("reasonCount");
let discovered = 0;

reasons.forEach((reason, index) => {
  const card = document.createElement("button");
  card.className = "reason";
  card.innerHTML =
    '<span class="symbol">♡</span>' +
    '<span class="reason-text">Reason ' + (index + 1) + '</span>';

  card.addEventListener("click", function() {
    if (card.classList.contains("revealed")) return;

    card.classList.add("revealed");
    card.querySelector(".symbol").textContent = "♥";
    card.querySelector(".reason-text").textContent = reason;
    discovered++;
    reasonCount.textContent = discovered;

    card.animate(
      [
        { transform: "scale(.8)" },
        { transform: "scale(1.12)" },
        { transform: "scale(1)" }
      ],
      { duration: 450, easing: "ease-out" }
    );
  });

  reasonGrid.appendChild(card);
});

// GIFT SURPRISE
function openGift() {
  const box = document.getElementById("giftBox");
  const message = document.getElementById("giftMessage");

  if (message.classList.contains("hidden")) {
    box.querySelector(".gift-emoji").textContent = "💝";
    box.querySelector(".gift-hint").textContent = "A little piece of my heart";
    message.classList.remove("hidden");
    createConfetti();
  }
}

// FLOATING HEARTS AND PETALS
function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = ["✿", "♡", "❀", "✧"][
    Math.floor(Math.random() * 4)
  ];

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 18) + "px";
  petal.style.animationDuration = (7 + Math.random() * 7) + "s";

  document.getElementById("petals").appendChild(petal);

  setTimeout(() => petal.remove(), 15000);
}

setInterval(createPetal, 700);

// GIFT CONFETTI
function createConfetti() {
  for (let i = 0; i < 35; i++) {
    const bit = document.createElement("span");
    bit.className = "petal";
    bit.textContent = ["♡", "♥", "✿", "✧"][
      Math.floor(Math.random() * 4)
    ];
    bit.style.left = (35 + Math.random() * 30) + "vw";
    bit.style.top = "40vh";
    bit.style.fontSize = (12 + Math.random() * 20) + "px";
    bit.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.getElementById("petals").appendChild(bit);
    setTimeout(() => bit.remove(), 5500);
  }
}

// START WEBSITE
showPage(0);

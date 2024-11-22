var allQuote = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Always forgive your enemies; nothing annoys them so much.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "We accept the love we think we deserve.",
    "Without music, life would be a mistake."
];

var previousIndex = -1;

function getQuote() {
    var randomIndex = Math.floor(Math.random() * allQuote.length);

    if (randomIndex === previousIndex) {
        randomIndex = (randomIndex + 1); 
    }

    var randomQuote = allQuote[randomIndex];
    previousIndex = randomIndex; 

    document.getElementById("new-quote").innerHTML = randomQuote;
    console.log(randomIndex);
    
}


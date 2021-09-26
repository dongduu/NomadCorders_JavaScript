const quotes = [
    {
        quote: "Well begun is half done.",
        author: "Aristotle",
    },
    {
        quote: "There is no love sincerer than the love of food.",
        author: "George Bernard Shaw",
    },
    {
        quote: "Patience is bitter, but its fruit is sweet.",
        author: "Aristotle",
    },
    {
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
    },
    {
        quote: "A wise man will make more opportunities than he finds.",
        author: "Sir Francis Bacon",
    },
    {
        quote: "All that is straight lies. All truth is crooked; time itself is a circle.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "By nature, men are nearly alike; by practice, they get to be wide apart.",
        author: "Confucius",
    },
    {
        quote: "The true traveler is he who goes on foot, and even then, he sits down a lot of the time.",
        author: "Colette",
    },
    {
        quote: "It is not always the same thing to be a good man and a good citizen.",
        author: "Aristotle",
    },
    {
        quote: "The reading of all good books is like a conversation with the finest men of past centuries.",
        author: "Rene Descartes",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
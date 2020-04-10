$(document).ready(function(){

    // GET ARRAY TO STORE DATA FROM QUOTE
    // 0 - currentLib
    // 1 - input1
    // 2 - input2
    // 3 - input3
    var quoteData = JSON.parse(sessionStorage.getItem("quoteDataJSON"));
    console.log(quoteData)

    const userInput = {
        input1: quoteData[1],
        input2: quoteData[2],
        input3: quoteData[3]
    };

    const data = {
        playAgain: "PLAY AGAIN",
        currentLib: quoteData[0]
    };

    var madQuote = []

    // GENERATE MAD LIB QUOTE BASED ON USER INPUT
    madQuotes = [
        "Happiness can be found even in the " + userInput.input1 + " of times, if only we remember to " + userInput.input2 + " on the " + userInput.input3 + ".",
        "If you knew " + userInput.input1 + " as well as I do, you wouldn't " + userInput.input2 + " about " + userInput.input3 + " it.",
        "Yesterday is history, tomorrow is a mystery, but today is a " + userInput.input1 + ". " + "That's why we " + userInput.input2 + " it the " + userInput.input3 + ".",
        "When you " + userInput.input1 + " in a " + userInput.input2 + ", " + userInput.input1 + "  it all the way, " + userInput.input3 + " and unquestionable.",
        userInput.input1 + " will " + userInput.input2 + " you from A to Z, " + userInput.input3 + " will get you everywhere.",
        "Be " + userInput.input1 + ", for everyone you meet is " + userInput.input2 + " a hard " + userInput.input3 + ".",
        "I alone cannot change the " + userInput.input1 + ", but I can " + userInput.input2 + " a stone across the waters to create " + userInput.input3 + " ripples.",
        "The more that you " + userInput.input1 +  ", the more things you will " + userInput.input2 + ", the more that you "  + userInput.input3 + ", the more places you'll go.",
        "This is the " + userInput.input1 + " where you " + userInput.input2 + " " + userInput.input3 + "."
    ]

    // ARRAY OF ORIGINAL QUOTES
    var quotes = [
        "Happiness can be found even in the darkest of times, if only we remember to turn on the light. - Albus Dumbledore",
        "If you knew Time as well as I do, you wouldn't talk about wasting it. - Mad Hatter, Alice in Wonderland",
        "Yesterday is history, tomorrow is a mystery, but today is a gift. That's why we call it the present. - Winnie the Pooh",
        "When you believe in a thing, believe in it all the way, implicitly and unquestionable. - Walt Disney",
        "Logic will take you from A to Z, imagination will get you everywhere. - Albert Einstein",
        "Be kind, for everyone you meet is fighting a hard battle. - Socrates",
        "I alone cannot change the world, but I can cast a stone across the waters to create many ripples. - Mother Teresa",
        "The more that you read, the more things you will know, the more that you learn, the more places you'll go. - Dr. Seuss",
        "This is the part where you run away. - Shrek"
    ];

    // SET USER INTERFACE
    $('#playAgain').html(data.playAgain)
    $('#madQuote').html(madQuotes[data.currentLib]);
    $('#quote').html(quotes[data.currentLib]);

    var madQuoteHTML = document.getElementById('madQuote');

    setFont();

    // SET FONT BASED ON QUOTE
    function setFont() {

        if (data.currentLib == "0") {
          // Dumbledore
          madQuoteHTML.style.fontFamily = 'Tangerine';
        }
        else if (data.currentLib == "1") {
          // Alice in Wonderland
          madQuoteHTML.style.fontFamily = 'Mountains of Christmas';
        }
        else if (data.currentLib == "2") {
          // Pooh
          madQuoteHTML.style.fontFamily = 'Amatic SC';
        }
        else if (data.currentLib == "3") {
          // Disney
          madQuoteHTML.style.fontFamily = 'Fredericka the Great';
        }
        else if (data.currentLib == "4") {
          // Einstein
          madQuoteHTML.style.fontFamily = 'Princess Sofia';
        }
        else if (data.currentLib == "5") {
          // Socrates
          madQuoteHTML.style.fontFamily = 'Bebas Neue';
        }
        else if (data.currentLib == "6") {
          // Mother Teresa
          madQuoteHTML.style.fontFamily = 'Pinyon Script';
        }
        else if (data.currentLib == "7") {
          // Dr. Seuss
          madQuoteHTML.style.fontFamily = 'Henny Penny';
        }
        else if (data.currentLib == "8") {
          // Shrek
          madQuoteHTML.style.fontFamily = 'Barrio';
        }
    }

})

$(document).ready(function(){

    const data = {
      title: 'Mad Libs Quotes',
      play: "GENERATE QUOTE",
    };

    var userInput = {
      input1:"",
      input2:"",
      input3:""
    };

    var speech = {
      noun:"Noun:",
      noun_ation:"Noun ending in 'ation':",
      adj:"Adjective:",
      adj_est: "Adjective ending in 'est':",
      adj_ly: "Adjective ending in 'ly':",
      verb:"Verb (present tense):",
      verb_ing:"Verb ending in 'ing':",
      adverb:"Adverb:"
    };

    var madSpeech = [
      [speech.adj_est, speech.verb, speech.noun],
      [speech.noun, speech.verb, speech.verb_ing],
      [speech.noun, speech.verb, speech.noun],
      [speech.verb, speech.noun, speech.adj_ly],
      [speech.noun, speech.verb, speech.noun_ation],
      [speech.adj, speech.verb, speech.noun],
      [speech.noun, speech.verb, speech.adj],
      [speech.verb, speech.verb, speech.verb],
      [speech.noun, speech.verb, speech.adverb]
    ];

    // ARRAY TO STORE DATA FROM QUOTE
    // 0 - currentLib
    // 1 - input1
    // 2 - input2
    // 3 - input3
    var quoteData = []

    // CURRENT LIB FOR THIS INSTANCE
    var currentLib = Math.floor(Math.random() * 9);


    // GENERATE CONTENT ON BUTTON CLICK
    $("#play").click(function(){

        // GET USER INPUTS
        userInput.input1 = $('#input1').val();
        userInput.input2 = $('#input2').val();
        userInput.input3 = $('#input3').val();

        // SAVE DATA TO ARRAY
        quoteData[0] = currentLib.toString();
        quoteData[1] = userInput.input1;
        quoteData[2] = userInput.input2;
        quoteData[3] = userInput.input3;

        console.log(quoteData);

        // SET DATA TO SENT TO NEXT PAGE
        sessionStorage.setItem("quoteDataJSON", JSON.stringify(quoteData));

    }),

    // SET USER INTERFACE
    $('#speech1').html(madSpeech[currentLib][0])
    $('#speech2').html(madSpeech[currentLib][1])
    $('#speech3').html(madSpeech[currentLib][2])

    $('#title').html(data.title),
    $('#play').html(data.play)

})

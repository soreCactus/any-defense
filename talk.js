var talk = new p5.Speech();
var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized


function setup() {
    
    talk.speak('Hello World');
}

function draw() {

}

function keyPressed() {
    foo.start(); // start listening
}

function showResult()
{
   console.log(foo.resultString); // log the result
   if (foo.resultString.includes('name')) {
       talk.speak('what a stupid name');
   }
}

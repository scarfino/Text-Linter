/*
@scarfino 2018
This script evaluates and improves text by removing unnecessary words and counting setences, total words and words that are overused.
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

//define overused and unnecessary words
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

//break the original story string into an array of individual words
let storyWords = story.split(' ');

//remove unnecessary words from story and create a new array called betterWords
let betterWords = storyWords.filter(function(words){
  return !unnecessaryWords.includes(words);
});

//count how many times overusedWords were used
var used = {};
story.split(/[\s,]+/).forEach(item => {
    if (overusedWords.indexOf(item) >= 0) {
        if (!used[item]) {
            used[item] = 1
        }
        else {
         used[item] = used[item]+ 1
        }
    }
});

//display word, sentence and overused word counts.
console.log("Text Linter")
console.log("-----------------------------------")
console.log(betterWords.length +(' total words'));
console.log(+(' sentences'));
console.log("Overused Words:", used);
console.log("-----------------------------------")
console.log(betterWords.join(' '));

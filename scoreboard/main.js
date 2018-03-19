
console.log(scores);

var scoresSorted = _.sortBy(scores, 'score');

var scoresReversed = new Array();
scoresReversed = scoresSorted.slice(0);
scoresReversed.reverse();

console.log("------sorted---------");
console.log(scoresSorted);

console.log("--------reversed----------");
console.log(scoresReversed);
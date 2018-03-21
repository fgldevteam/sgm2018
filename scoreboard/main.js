

// console.log(scores);

var scoresSorted = _.sortBy(scores, 'score');

var scoresReversed = new Array();
scoresReversed = scoresSorted.slice(0);
scoresReversed.reverse();

// console.log("------sorted---------");
// console.log(scoresSorted);

// console.log("--------reversed----------");
// console.log(scoresReversed);


_.each(scoresReversed, function (element, index, list) {

    console.log("index:" +index);
    var currentSlide = "1";

    switch(index){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            currentSlide = "1";
        break;

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            currentSlide = "2";
        break;

        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            currentSlide = "3";
        break;

        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            currentSlide = "4";
        break;
        
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            currentSlide = "5";
        break;
    
    }
    // if(index => 0 && index <= 4){
    //     currentSlide = "1";
    // }
    // if(index > 5 && index <= 9){
    //     currentSlide = "2";
    // }
    // if(index > 10 && index <= 14){
    //     currentSlide = "3";
    // }
    // if(index > 15 && index <= 19){
    //     currentSlide = "4";
    // }    
    // if(index > 20 && index <= 24){
    //     currentSlide = "5";
    // }    
    var selector = "#section" + currentSlide;
    console.log("selector: " + selector);
    // var output = 'Element: ' + element + ', ' + 'Index: ' + index + ', ' + 'List Length: ' + list.length;
    if(!element.colour){
        element.colour = '#000';
    }
    var teamBox = `<div class="team">` +
                        `<div class="rank">`+ parseInt(index + 1) + `</div>` +
                        `<div class="logo" style="background: `+element.colour+` url('/svg/`+element.logo+`') center center no-repeat/130%; cover">` +
                        // `<img src="/svg/`+ element.logo +`" />` +
                        `</div>` +
                        `<div class="teamnamelogo" style="background: `+element.colour+` url('/svg/`+element.logo+`') -400px center no-repeat/220%; cover">` +
                        `<div class="teamname">` +
                        element.teamName + `&nbsp;&nbsp;&nbsp;&nbsp;[ `+element.score+` ]  ` +
                        `</div>` +
                        `</div>` +
                    `</div>`;

    // console.log(teamBox);
    $( selector).append(teamBox);

});


$(function() {
    $.deck('.slide');
  });
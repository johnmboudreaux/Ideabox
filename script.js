var $saveBtn = $('.save-btn');
var $card = $('.card');
var $ideaTitle = $('#idea-title');
var $ideaBody = $('#idea-info');
var $qualityText;
var cardArray = [];

var IndexCard = function (title, body, id) {
  this.title = title;
  this.body = body;
  this.quality = 'swill';
  this.id = id || Date.now();
};

IndexCard.prototype.build = function () {
  $('.bottom-container').prepend(
    `<article id="${this.id}" class="card">
     <h3 class="card-title" contenteditable="true">${this.title}</h3>
     <div class="delete"></div>
     <p class="card-text" contenteditable="true">${this.body}</p>
     <div class="up-vote"></div>
     <div class="down-vote"></div>
     <p class="quality">quality: <span id="quality-text">${this.quality}</span></p>
   </article>`
  );
};

$saveBtn.click(function (e) {
  e.preventDefault();
  var title = $ideaTitle.val();
  var body = $ideaBody.val();

  // console.log(title);
  // console.log(body);
  var newIndexCard = new IndexCard(title, body);
  newIndexCard.build();
  cardArray.push(newIndexCard);

  // console.log(cardArray);
});

$('.bottom-container').on('click', '.delete', function () {
  $(this).parent().remove();
});

$('.bottom-container').on('click', '.up-vote', function () {
  $qualityText = $('#quality-text');
  var $changeQuality = $('#quality-text').text();
  console.log($changeQuality);
  if ($changeQuality === 'swill') {
    $(this).parent().find('span').text('plausible');
  } else if ($changeQuality === 'plausible') {
    $(this).parent().find('span').text('genius');
  }
});

$('.bottom-container').on('click', '.down-vote', function () {
  $qualityText = $('#quality-text');
  var $changeQuality = $('#quality-text').text();

  // console.log($changeQuality);
  if ($changeQuality === 'genius') {
    $(this).parent().find('span').text('plausible');
  } else if ($changeQuality === 'plausible') {
    $(this).parent().find('span').text('swill');
  }
});

$saveBtn.on('click', clearInputFields);

function clearInputFields() {
  $ideaTitle.val('');
  $ideaBody.val('');
};

$ideaBody.on('blur', saveBtnOn);

function saveBtnOn() {
  $saveBtn.css('background-color', '#00a79d');
  $saveBtn.attr('disabled', false);
}

$('.search').on('keyup', runSearch);

function runSearch() {
  // var $searchInput = $('.search');
  var search = $(this).val();
  var title = $ideaTitle.val();
  console.log('search is... ' + search);
  if (search) {
  var ssss =  $('.bottom-container').find("h3:contains(" + search + "))").closest('.card').show();
  console.log(ssss);
    $('.bottom-container').find("h3:not(:contains(" + search + "))").closest('.card').hide();
  } else {
    //hide it
  }
  //make it to lowercase so if they type it as Idea, then search idea... Idea still pops up for them
  //.includes()
}

//
// $("title:contains(' + search + ')").closest('.card').show();
// $("title:not(:contains(' + search + ')").closest('.card').hide();
//  IndexCard.prototype.upvote = function () {
//      this.upvotes ++;
//  },
//
//  IndexCard.prototype.downvote = function () {
//      this.upvotes --;
//  }

//
// console.log('working1');
// $saveButton.on('click', addCard);
//
// function addCard(e) {
//
//   e.preventDefault();
//   console.log('working2');
//
//   var $bottomContainer = $('.bottom-container');
//   var $ideaTitle = $('#idea-title').val();
//   var $ideaInfo = $('#idea-info').val();
//
//   $newCard = `<article class="card">
//         <h3 class="card-title">${$ideaTitle}</h3>
//         <img class="delete" src="assets/delete.svg" alt="delete button" />
//         <p class="card-text">${$ideaInfo}</p>
//         <img class="up-vote" src="assets/upvote.svg" alt="up-vote button" />
//         <img class="down-vote" src="assets/downvote.svg" alt="down-vote button" />
//         <p class="quality">quality: <span id="quality-text">swill</span></p>
//       </article>`
//
//   $bottomContainer.prepend($newCard);
//
//   $('.delete').on('click', deleteCard);
//
//   $('.up-vote').on('click', upvoteFunction);
//
//   $('.down-vote').on('click', downvoteFunction);
//
// };
//
// function deleteCard () {
//   console.log('working3');
//   console.log($(this));
//   $(this).parent().remove();
// };
//
// function upvoteFunction () {
//   var $replaceText = $('#quality-text');
//   $qualityText = $('#quality-text').text();
//   console.log($qualityText);
//   if ($qualityText === 'swill') {
//     console.log($('if'));
//     $replaceText.text('plausible')
//   } else if ($qualityText === `plausible`) {
//     //  ($(this).attr('src',"assets/upvote-hover.svg"))
//     // can us this code for each if else statement to enable
//     // hovered states for buttons remain active when clicked
//     console.log($('else if'));
//     $replaceText.text('genius')
//   }
// };
//
// function downvoteFunction () {
//   var $replaceText = $('#quality-text');
//   $qualityText = $('#quality-text').text();
//   console.log($qualityText);
//   if ($qualityText === 'genius') {
//     console.log($('if'));
//     $replaceText.text('plausible')
//   } else if ($qualityText === `plausible`) {
//   //  ($(this).attr('src',"assets/upvote-hover.svg"))
//   // can us this code for each if else statement to enable
//   // hovered states for buttons remain active when clicked
//     console.log($('else if'));
//     $replaceText.text('swill')
//   }
// };
//
// // NEED TO REFACTOR, THIS FUNCTION CAN BE PULL OUT OF ADDCARD
//
// // $(function() {
// //  $('.up-vote').click(function(){
// //    $(this).attr('src',"assets/upvote-hover.svg");
// //     });
// //   });
// //
// // $('.list-toggle').click(function() {
// //   if ($('.list-sort').attr('colspan')) {
// //       $('.list-sort').removeAttr('colspan');
// //   } else {
// //       $('.list-sort').attr('colspan', 6);
// //   }
// // });
//
// $saveButton.on('click', clearInputFields);
//

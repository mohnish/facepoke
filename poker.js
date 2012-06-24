// Setting up everything we need to attack the pokers ;-)
var listOfPokers = document.querySelectorAll('a[ajaxify^="/ajax/pokes/poke_inline.php?uid="]')
  , poke = document.createEvent('MouseEvents')
  , mouseOverPoker = document.createEvent('MouseEvents')
  , pokeDialog = document.querySelector('.fbRemindersStory img[alt=Pokes]');

// Setting up the poke itself
poke.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

// Fooling FB into thinking that it's actually done by a human and not a bot
mouseOverPoker.initMouseEvent('mouseover', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

// The bot opens the list of pokers dialog
pokeDialog.dispatchEvent(poke);

// Missiles away...poke-em-all!!!!111
Array.prototype.forEach.call(listOfPokers, function(poker) {
  poker.dispatchEvent(mouseOverPoker);
  setTimeout(function() {
    poker.dispatchEvent(poke);
  }, 1000);
});

// The bot closes the list of pokers dialog
pokeDialog.dispatchEvent(poke);
(function() {
  // Filter cards based on typed input
  filterCards = function filterCards() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    cardsList = document.getElementById("cardsList");
    cards = cardsList.getElementsByClassName('card');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < cards.length; i++) {
      p = cards[i].getElementsByTagName("p")[0]
      h = cards[i].getElementsByTagName("h5")[0]
      a = cards[i].getElementsByTagName("a")[0];
      txtValue = (a.textContent || a.innerText) + (p.textContent || p.innerText) + (h.textContent || h.innerText);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        cards[i].parentElement.style.display = "";
      } else {
        cards[i].parentElement.style.display = "none";
      }
    }
  }  
})();


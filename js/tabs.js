'use strict';

// Features section tabs

(function () {
  var tabsButtons = document.querySelectorAll(".features__item");
  var tabsArticles = document.querySelectorAll(".features__article");

  tabsButtons.forEach(element => {
    element.addEventListener('click', function () {
      for (var i = 0; i < tabsButtons.length; i++) {
        if ( tabsButtons[i] === element) {
          tabsButtons[i].classList.add('features__item--active');
          tabsArticles[i].classList.add('features__article--active');
        } else {
          tabsButtons[i].classList.remove('features__item--active');
          tabsArticles[i].classList.remove('features__article--active');
        }
      }
    });
  });

})();

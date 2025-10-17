$(document).ready(function($){
  // cursor effect =================== >>>
    new kursor({
      type: 2,
      color: "#121111",
    });
  // MENU ============================ >>>
    $(".menu").sticky({topSpacing:0});
  // typed =============>
    var typed = new Typed('.type', {
        strings: ['Social Media Management',
                'Facebook Ads',
                'Google Ads',
                'SEO',
                'social media problem solver!'],
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 300,
                startDelay: 1000,
                loop:true
    });
  // counter ============= >>
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = 0;

      function updateCounter() {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 500;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 10);;
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
    });
});

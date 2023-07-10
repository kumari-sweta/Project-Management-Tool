// Add active class to the clicked navigation item
var navItems = document.querySelectorAll('nav ul li a');

navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    navItems.forEach(function(navItem) {
      navItem.classList.remove('active');
    });
    this.classList.add('active');
  });
});
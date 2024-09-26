document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const allContent = document.querySelectorAll('.content p');
            
            allContent.forEach(function(content) {
                content.classList.add('hidden');
            });
            
            targetElement.classList.remove('hidden');
        });
    });
});

function searchFunction() {
    var input, filter, content, p, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    content = document.getElementsByClassName('content')[0];
    p = content.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++) {
      txtValue = p[i].textContent || p[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        p[i].style.display = "";
      } else {
        p[i].style.display = "none";
      }
    }
  }
  

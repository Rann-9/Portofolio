const toggleButton = document.getElementsByClassName('toggle_btn')[0];
        const navbarItem = document.getElementsByClassName('nav-list');
        toggleButton.addEventListener('click', function () {
            for (let i = 0; i < navbarItem.length; i++) {
                navbarItem[i].classList.toggle('active');
            }
        });
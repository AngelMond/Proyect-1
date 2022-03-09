const navigation_bar = document.querySelector('#navigationBar');

    window.addEventListener('scroll', function(){
        navigation_bar.classList.toggle('active' , window.scrollY > 250)
    })
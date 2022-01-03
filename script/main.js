/////Slider
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/////Slider-End

/////Tabs
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('passive') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('passive')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('passive')
            });
    
            currentBtn.classList.add('passive')
            currentTab.classList.add('passive')
        }
    });
}

document.querySelector('.tabs__nav-btn').click()


//TABS - END =====================================


//////Slider_two
/* Индекс слайда по умолчанию */
var slideIndex_ten = 1;
showSlides_ten(slideIndex_ten);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide_ten() {
    showSlides_ten(slideIndex_ten += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide_ten() {
    showSlides_ten(slideIndex_ten -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide_ten(n) {
    showSlides_ten(slideIndex_ten = n);
}

/* Основная функция слайдера */
function showSlides_ten(n) {
    var i;
    var slides_ten = document.getElementsByClassName("item_ten");
    var dots_ten = document.getElementsByClassName("slider-dots_item_ten");
    if (n > slides_ten.length) {
      slideIndex_ten = 1
    }
    if (n < 1) {
        slideIndex_ten = slides_ten.length
    }
    for (i = 0; i < slides_ten.length; i++) {
        slides_ten[i].style.display = "none";
    }
    for (i = 0; i < dots_ten.length; i++) {
        dots_ten[i].className = dots_ten[i].className.replace(" active_ten", "");
    }
    slides_ten[slideIndex_ten - 1].style.display = "flex";
    dots_ten[slideIndex_ten - 1].className += " active_ten";
}

////////Slider two - End

document.querySelector(".page_three")
.addEventListener('click', function(){
document.querySelector("#slide_tree").style.display = "block"
})
.addEventListener("click", function(){
document.querySelectorAll(".item").style.display = "none"    
})

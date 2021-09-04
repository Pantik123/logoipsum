function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) { 
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
const animItems = document.querySelectorAll('.-anim-items');
const planCard = document.querySelectorAll('.plan__card');
const card = document.querySelectorAll('.card');
const container = document.querySelector('.container');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                let animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('-active');
            }
            else {
                if (!animItem.classList.contains('-anim-no-hide')) {
                    animItem.classList.remove('-active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


// Прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);

    });

    function onMenuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            document.body.classList.remove('-lock');
            iconMenu.classList.remove('-active');
            menuBody.classList.remove('-active');
            headerRow.classList.remove('-active');
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerRow = document.querySelector('.header__row');


if (iconMenu) {
    
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('-lock');
        iconMenu.classList.toggle('-active');
        menuBody.classList.toggle('-active');
        headerRow.classList.toggle('-active');
    });
}

const menu = document.querySelector(".menu__list");
menu.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("menu__link")) {
    menu.style.setProperty(
      "--underline-width",
      `${event.target.offsetWidth}px`
    );
    menu.style.setProperty(
      "--underline-offset-x",
      `${event.target.offsetLeft}px`
    );
  }
});
menu.addEventListener("mouseleave", () =>
  menu.style.setProperty("--underline-width", "0")
);



;



let planYear = {
    0:{
        name : "Starter",
        price : "$29<span>/year</span>",
        website : 5,
        gb : 20,
        sup: "Limited"
    },
    1:{
        name : "Premium",
        price : "$290<span>/year</span>",
        website : 20,
        gb : 100,
        sup: "Premium"
    },
    2:{
        name : "Enterprise",
        price : "$490<span>/year</span>",
        website : "Unlimited",
        gb : 200,
        sup: "Premium"
    }
        
}
let planMonth = {
    0:{
        name : "Starter",
        price : "Free",
        website : 1,
        gb : 5,
        sup: "Limited"
    },
    1:{
        name : "Premium",
        price : "$29<span>/month</span>",
        website : 10,
        gb : 50,
        sup: "Premium"
    },
    2:{
        name : "Enterprise",
        price : "$49<span>/month</span>",
        website : "Unlimited",
        gb : 50,
        sup: "Premium"
    }
    
}
const title = document.querySelectorAll(".card__title");
const price = document.querySelectorAll(".card__price");
const website = document.querySelectorAll(".card__site");
const gb = document.querySelectorAll(".card__hosting");
const sup = document.querySelectorAll(".card__sup");


const year = document.querySelector(".plan__year");
const month = document.querySelector(".plan__month");

for (let i = 0; i < 3; i++){
    title[i].innerHTML = planMonth[i].name;
    price[i].innerHTML = planMonth[i].price;
    website[i].innerHTML = `${planMonth[i].website} Website`;
    gb[i].innerHTML = `${planMonth[i].gb} GB Hosting`;
    sup[i].innerHTML = `${planMonth[i].sup} Support`;
}

if (year) {

    
    year.addEventListener('click', function (e) {
        console.log(year)
        year.classList.add('-active');
        month.classList.remove('-active');
        
        for (let i = 0; i < 3; i++){
            title[i].innerHTML = planYear[i].name;
            price[i].innerHTML = planYear[i].price;
            website[i].innerHTML = `${planYear[i].website} Website`;
            gb[i].innerHTML = `${planYear[i].gb} GB Hosting`;
            sup[i].innerHTML = `${planYear[i].sup} Support`;
        }
        
    });
}
if (month) {

    
    month.addEventListener('click', function (e) {

        month.classList.add('-active');
        year.classList.remove('-active');

        for (let i = 0; i < 3; i++){
            title[i].innerHTML = planMonth[i].name;
            price[i].innerHTML = planMonth[i].price;
            website[i].innerHTML = `${planMonth[i].website} Website`;
            gb[i].innerHTML = `${planMonth[i].gb} GB Hosting`;
            sup[i].innerHTML = `${planMonth[i].sup} Support`;
        }
        
    });
}


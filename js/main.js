$(document).ready(function(){
    $('.news__wrapper').slick({
    //   setting-name: setting-value
        arrows: true,
        slidesToShow: 3,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
                breakpoint: 885,
                settings: {
                    arrows: false,
                    dots: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 2
              }
            },
            {
                breakpoint: 620,
                settings: {
                    arrows: true,
                    dots: false,
                    // centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
              }
            }
          ]
    });
});

let map;
function initMap() {
    let icon = `../img/marker.png`;
    let dote = {lat: 51.495866, lng: 31.2204984};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.271397, lng: 31.3722444},
        zoom: 6
    });
    let  marker = new google.maps.Marker({
        position: dote,
        map: map,
        icon: icon
    });
}

$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$('.header__nav a').click(function () {
        // console.log('sdsds');
        let elementClick = $(this).attr("href");
        $(this).addClass('header__item--active');
        // console.log($(this));
        // console.log($(this).attr());
        // console.log(elementClick);
		let destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1200);
	});
});

$(document).ready(function(){
    $('.header__arrow').click(function() {
        // console.log('ok');
        $('body, html').animate({
            scrollTop: $('#projects').offset().top
        }, 1200);
    });
});


checkFixed = () => {
    const elem = document.querySelector('.fixed-nav');
    const projects = document.getElementById('projects');
    const aboutUs = document.getElementById('about-us');
    const elems = document.getElementsByClassName('fixed-nav__item');
    // console.log(elems);
    areaArr = [projects, aboutUs];

    let projectsPosition = {
        top: projects.getBoundingClientRect().top + pageYOffset,
        bottom: projects.getBoundingClientRect().bottom + pageYOffset
    };

    let aboutUsPostion = {
        top: aboutUs.getBoundingClientRect().top + pageYOffset,
        bottom: aboutUs.getBoundingClientRect().bottom + pageYOffset
    };

    // let elemPosition = {
    //     top: elem.getBoundingClientRect().top + pageYOffset,
    //     bottom: elem.getBoundingClientRect().bottom + pageYOffset
    // };
    for (let elem of elems) {
        // console.log(elem);
        let test;
        let elemPosition = {
            top: elem.getBoundingClientRect().top + pageYOffset,
            bottom: elem.getBoundingClientRect().bottom + pageYOffset
        };

        if ((elemPosition.bottom > projectsPosition.top && elemPosition.top < projectsPosition.bottom) || 
            (elemPosition.bottom > aboutUsPostion.top && elemPosition.top < aboutUsPostion.bottom)) {
            elem.classList.add('fixed-nav__item--change');
            if (elem.classList.contains('fixed-nav__item--active')) {
                elem.classList.add('fixed-nav__item--change--active');
            } else {
                elem.classList.remove('fixed-nav__item--change--active');
            }

            // test = document.querySelector('.fixed-nav__item--active');
            // test.style.setProperty('background', 'green');
            // elem.style.setProperty('background-color', 'green');
        // console.log('ok');
        } else {
            elem.classList.remove('fixed-nav__item--change');
            elem.classList.remove('fixed-nav__item--change--active');

            // if (elem.classList.contains('fixed-nav__item--active')) {
            //     elem.classList.add('fixed-nav__item--change--active');
            // } else {
            //     elem.classList.remove('fixed-nav__item--change--active');
            // }


            // test = document.querySelector('.fixed-nav__item--active');
            // test.style.setProperty('background', 'white');
            // document.querySelectorAll('fixed-nav__item--active').style.setProperty('background', 'white');

            // elem.style.setProperty('background-color', 'white');
        // console.log('ne ok');
    }

    }

    // if ((elemPosition.bottom > projectsPosition.top && elemPosition.top < projectsPosition.bottom) || 
    //     (elemPosition.bottom > aboutUsPostion.top && elemPosition.top < aboutUsPostion.bottom)) {
    //     elem.classList.add('fixed-nav--change');
    //     // console.log('ok');
    // } else {
    //     elem.classList.remove('fixed-nav--change');
    //     // console.log('ne ok');
    // }

}
// document.addEventListener('scroll', function())
lastFix = () => {
    let arrFixChenge = document.getElementsByClassName('fixed-nav__item');
    if (!arrFixChenge[0].classList.contains('fixed-nav__item--active') &&
     !arrFixChenge[1].classList.contains('fixed-nav__item--active') && 
    !arrFixChenge[2].classList.contains('fixed-nav__item--active') && 
    !arrFixChenge[3].classList.contains('fixed-nav__item--active')) {
        arrFixChenge[4].classList.add('fixed-nav__item--active');
    }

    // if (!$('fixed-nav').find('.fixed-nav__item--active')) {
    //     arrFixChenge[4].classList.add('fixed-nav__item--active');
    // }
}



isVisible = (elem) => {
    let box = elem.getBoundingClientRect();
    let boxPosition = {
        // top: document.documentElement.clientHeight - box.top,
        // bottom: document.documentElement.clientHeight - box.bottom
        bottom: box.bottom + pageYOffset,
        top: box.top + pageYOffset
    };
    // console.log(document.documentElement.scrollHeight);
    let windowPostion = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight / 2
    }

    // console.log(boxPosition);
    // console.log(windowPostion);

    if (boxPosition.bottom > windowPostion.top && boxPosition.top < windowPostion.bottom
        && boxPosition.bottom > windowPostion.bottom) {
        return true;
    } else {
        return false;
    }


    // return {
    //     top: box.top + pageYOffset,
    //     left: box.left + pageXOffset
    // };
}

// console.log(document.documentElement.clientHeight / 2);
// console.log(a.childNodes);

checkOnWindow = () => {
    // console.log('ok');
    const header = document.getElementById('header')
    const projects = document.getElementById('projects');
    const aboutUs = document.getElementById('about-us');
    const contact = document.getElementById('contact');
    const news = document.getElementById('news');
    const anchorArr = [header, projects, aboutUs, contact, news];
    const itemArr = document.getElementsByClassName('header__item');
    const itemArrFix = document.getElementsByClassName('fixed-nav__item');

    
    for (let anchor of anchorArr) {
        let idName = '#' + anchor.getAttribute('id');
        // console.log(idName);
        // console.log(anchor);
        if (isVisible(anchor)) {
            for (let i of itemArr) {
                // console.log(i.getAttribute('href'));
                if (i.getAttribute('href') == idName) {
                    i.classList.add('header__item--active');
                }
            } 
            for (let i of itemArrFix) {
                // console.log(i.dataset.anchor);
                if (i.dataset.anchor == idName) {
                    i.classList.add('fixed-nav__item--active');
                }
            }
        } else {
            for (let i of itemArr) {
                // console.log(i.getAttribute('href'));
                if (i.getAttribute('href') == idName) {
                    i.classList.remove('header__item--active');
                }
            } 
            for (let i of itemArrFix) {
                if (i.dataset.anchor == idName) {
                    i.classList.remove('fixed-nav__item--active');
                }
            }
        }
    }
}

window.addEventListener('scroll', function() {
    checkOnWindow();
    checkFixed();
    lastFix();
});




moveFixed = (elem) => {
    elem.classList.add('fixed-nav__item--active');
    let elementClick = elem.dataset.anchor;
    let destination = $(elementClick).offset().top;
	$("body,html").animate({scrollTop: destination }, 1200);
    console.log(elem.dataset.anchor);
    // elem.dataset.anchor
}





// window.addEventListener('scroll', function() {

//     console.log(isVisible(test));
// });

// $(document).ready(function() {
//     $(this).scroll(function(){
//         // console.log($(this));
//         let pro = $('#projects');
//         console.log(pro);
//         console.log(isVisible(pro));
//         // console.log(isVisible(test));
//     });
// });

// const animationTime = 3000;
// const framesCount = 20;
// const contact = document.querySelector('a[href*="#contact"]');
// const contacts = document.getElementById('contact');
// console.log(contact);

// contact.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault();
//     let coordY = contacts.getBoundingClientRect().top + window.pageYOffset;
//     console.log(coordY);

//     let scroller = setInterval(function(){
//         let scrollBy = coordY / framesCount;

//         if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//             window.scrollBy(0, scrollBy);
//         } else {
//             window.scrollTo(0, coordY);
//             clearInterval(scroller);
//         }
//     }, animationTime / framesCount);
// });


// $(document).ready(function(){
//     $('.js-slider').slick({
//     //   setting-name: setting-value
//         slidesToShow: 3
//         // arrows: false
//         // centerMode: true,
//         // centerPadding: '10px',
//     });
// });

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,s){},98:function(e,t,s){"use strict";s.r(t);s(62),s(13),s(20),s(85),s(89),s(95),s(97);var i="classList"in document.createElement("div")?function(e,t){return e.classList.contains(t)}:function(e,t){return function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}(t).test(e.className)},a=document.defaultView,r=a&&a.getComputedStyle?function(e){return a.getComputedStyle(e,null)}:function(e){return e.currentStyle},o=function(e){var t=document.querySelector("body"),s=document.querySelector(".c-navbar"),a=s.querySelector(".c-navbar__toggler"),o=s.querySelector(".c-navbar__menu"),n=s.querySelector(".c-navbar__menu-container"),c=document.querySelector(".o-main__container"),d=document.querySelector(".o-footer__bg"),u=document.querySelector(".c-navbar__close");a.addEventListener("click",(function(){var e=.01*window.scrollY;e>100&&(e=100);var a=r(n).width,u=r(n).height;i(s,"is-active")?m():(s.classList.add("is-active"),t.classList.add("is-nav-open"),l.matches?o.style.height=u:(o.style.width=a,c.style.transform="scale(.5)",d.style.transform="scale(.5)",c.style.filter="blur(6px)",d.style.filter="blur(6px)",c.style.transformOrigin="100% ".concat(e,"%")))})),u.addEventListener("click",(function(){m()}));var m=function(){s.classList.remove("is-active"),t.classList.remove("is-nav-open"),l.matches?o.style.height=0:(o.style.width=0,c.style.transform="scale(1)",c.style.filter="blur(0)",d.style.transform="scale(1)",d.style.filter="blur(0)")},p=o.querySelectorAll(".c-navbar__item"),v=s.querySelectorAll(".c-navbar__image"),_=o.querySelectorAll(".c-navbar__item-bg");l.matches||p.forEach((function(e,t){e.addEventListener("mouseenter",(function(){v[t].style.opacity="1",_[t].style.left="-20px"})),e.addEventListener("mouseleave",(function(){v.forEach((function(e){e.style.opacity="0"})),_[t].style.left="120%",_[t].addEventListener("transitionend",(function(){})),setTimeout((function(){_[t].style.display="none",_[t].style.left="-120%",setTimeout((function(){_[t].style.display="block"}),50)}),500)}))})),window.addEventListener("scroll",(function(e){window.scrollY>10?s.classList.add("is-scrolled"):s.classList.remove("is-scrolled")}))},l=window.matchMedia("(max-width: 1024px)");o(),l.addListener(o);var n=s(3),c=s(43),d=s(44),u=s(45),m=s(46),p=s(47);n.a.use([c.a,d.a,u.a,m.a,p.a]);var v=document.querySelector(".c-next-slider"),_=document.querySelector(".c-iamges-slider"),w=document.querySelector(".c-project-slider"),f=document.querySelector(".c-progress-slider__line"),y=new n.a(".c-next-slider",{slidesPerView:1,wrapperClass:"c-next-slider__wrapper",slideClass:"c-next-slider__item",slideActiveClass:"c-next-slider__item--active",loop:!0,allowTouchMove:!1}),h=new n.a(".c-count-slider",{direction:"vertical",slidesPerView:1,wrapperClass:"c-count-slider__wrapper",slideClass:"c-count-slider__item",slideActiveClass:"c-count-slider__item--active",loop:!0,allowTouchMove:!1}),L=new n.a(".c-progress-slider__container",{direction:"vertical",slidesPerView:1,wrapperClass:"c-progress-slider__wrapper",slideClass:"c-progress-slider__item",slideActiveClass:"c-progress-slider__item--active",loop:!0,allowTouchMove:!1}),E=new n.a(".c-project-slider",{fadeEffect:{crossFade:!0},spaceBetween:30,effect:"fade",wrapperClass:"c-project-slider__wrapper",slideClass:"c-project-slider__item",slideActiveClass:"c-project-slider__item--active",loop:!0,allowTouchMove:!1}),g=new n.a(".c-iamges-slider",{slidesPerView:1,wrapperClass:"c-iamges-slider__wrapper",slideClass:"c-iamges-slider__item",slideActiveClass:"c-iamges-slider__item--active",loop:!0,autoplay:{delay:3e3},controller:{control:[y,h,E,L],by:"container"}});g.on("slideChange",(function(e){f.classList.remove("is-active"),g.autoplay.running&&setTimeout((function(){f.classList.add("is-active")}),10)})),window.addEventListener("load",(function(e){f.classList.add("is-active")})),v.addEventListener("click",(function(e){g.slideNext()})),_.addEventListener("mouseenter",(function(){g.autoplay.stop(),f.classList.remove("is-active")})),_.addEventListener("mouseleave",(function(){g.autoplay.start(),f.classList.add("is-active")})),v.addEventListener("mouseenter",(function(){g.autoplay.stop(),f.classList.remove("is-active")})),v.addEventListener("mouseleave",(function(){g.autoplay.start(),f.classList.add("is-active")})),w.addEventListener("mouseenter",(function(){g.autoplay.stop(),f.classList.remove("is-active")})),w.addEventListener("mouseleave",(function(){g.autoplay.start(),f.classList.add("is-active")})),n.a.use([d.a,m.a,p.a]);var C=document.querySelectorAll(".c-testimonial-author"),S=new n.a(".o-testimonial__slider",{direction:"vertical",slidesPerView:1,wrapperClass:"o-testimonial__wrapper",slideClass:"o-testimonial__item",slideActiveClass:"o-testimonial__item--active",allowTouchMove:!1,autoplay:!0}),b=new n.a(".o-testimonial__authors-slider",{slidesPerView:"auto",centeredSlides:!0,slideToClickedSlide:!0,direction:"horizontal",wrapperClass:"o-testimonial__authors-slider-wrapper",slideClass:"o-testimonial__authors",slideActiveClass:"o-testimonial__authors--active",pagination:{el:".o-testimonial__authors-slider-pagination",clickable:!0},breakpoints:{1024:{direction:"vertical",allowTouchMove:!1,slidesPerView:1,autoplay:{delay:1e4}}}});window.innerWidth<1024&&(b.removeAllSlides(),C.forEach((function(e,t){var s=document.createElement("div");s.classList.add("o-testimonial__authors"),s.appendChild(e),b.appendSlide(s)})),setTimeout((function(){b.update()}),500)),C.forEach((function(e,t){e.addEventListener("click",(function(){C.forEach((function(e){e.classList.remove("is-active")})),S.slideTo(t),C[S.activeIndex].classList.add("is-active")})),e.addEventListener("mouseenter",(function(){S.autoplay.stop()})),e.addEventListener("mouseleave",(function(){S.autoplay.start()}))})),n.a.use([c.a]);new n.a(".o-blogs-news__slider",{freeMode:!0,wrapperClass:"o-blogs-news__slider-wrapper",slideClass:"o-blogs-news__slider-item",slideActiveClass:"o-blogs-news__slider-item--active",navigation:{nextEl:".o-blogs-news__slider-arrow--next",prevEl:".o-blogs-news__slider-arrow--prev"},breakpoints:{375:{slidesPerView:1.59},640:{slidesPerView:2},768:{slidesPerView:2.5},1024:{slidesPerView:4},1600:{slidesPerView:3}}});n.a.use([c.a,p.a]);new n.a(".o-picks__slider",{slidesPerView:"auto",freeMode:!0,spaceBetween:15,wrapperClass:"o-picks__slider-wrapper",slideClass:"o-picks__slider-item",slideActiveClass:"o-picks__slider-item--active",autoplay:!0,navigation:{nextEl:".o-picks__slider-arrow--next",prevEl:".o-picks__slider-arrow--prev"}});n.a.use([c.a]);var k=new n.a(".o-featured-work__companys-slider",{wrapperClass:"o-featured-work__companys-slider-wrapper",slideClass:"o-featured-work__company",slideActiveClass:"o-featured-work__company--active",centeredSlides:!0,slidesPerView:"auto",slideToClickedSlide:!0,loop:!0});window.innerWidth>1026&&k.destroy();var q=document.querySelector(".o-creative-studio__card--1"),x=document.querySelector(".o-creative-studio__card--2"),A=document.querySelector(".o-creative-studio__card--3"),T=function(e){x.addEventListener("mouseover",(function(t){e.matches?q.style.transform="translateX(-90%)":q.style.transform="translateX(-57%)"})),x.addEventListener("mouseout",(function(e){q.style.transform="translateX(0%)"})),A.addEventListener("mouseover",(function(t){e.matches?(q.style.transform="translateX(-90%)",x.style.transform="translateX(-220%)"):(q.style.transform="translateX(-57%)",x.style.transform="translateX(-136%)")})),A.addEventListener("mouseout",(function(t){q.style.transform="translateX(0%)",e.matches?x.style.transform="translateX(-128%)":x.style.transform="translateX(-70%)"}))},V=window.matchMedia("(max-width: 765px)");T(V),V.addListener(T);var P=document.querySelector(".o-creative-studio");window.addEventListener("scroll",(function(){window.scrollY>P.offsetTop-window.innerHeight+200?P.classList.add("is-scrolled"):P.classList.remove("is-scrolled")}));var M=document.querySelectorAll(".o-featured-work__company"),X=document.querySelectorAll(".o-featured-work__box-image"),j=document.querySelectorAll(".o-featured-work__detail");M.forEach((function(e){e.addEventListener("mouseenter",(function(){var t=e.dataset.index;X.forEach((function(e){e.style.opacity="0",e.style.transform=""})),j.forEach((function(e){e.style.opacity="0"})),j[t].style.opacity="1",X[t].style.opacity="1",X[t].style.transform="scale(1)"}))})),document.querySelector(".o-hero__scroll").addEventListener("click",(function(){window.scrollTo(0,window.innerHeight)}))}},[[98,1,2]]]);
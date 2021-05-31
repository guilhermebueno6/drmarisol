const scrollElements = document.querySelectorAll(".js-scroll");
const slide = document.querySelectorAll(".js-slide");


const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");

};

const slideElement = (element) => {
    element.classList.add("slided");
};


const hideSlide = (element) => {
    element.classList.remove("slided");
}
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  });
  slide.forEach((sl) => {
      if (elementInView(sl, 1.25)){
          slideElement(sl);
      } else if (elementOutofView(sl)) {
          hideSlide(sl)
      }
  });
  
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
const nav = document.querySelector("nav");
const sectionToTriggerChange = document.querySelector(".trigger");
const funSection = document.querySelector("#fun");

options = {
  root: null,
  threshold: 0.5,
};

const triggerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.remove("nav-main-color");
      nav.classList.add("nav-alternate-color");

      const h1_fun = document.createElement("h1");
      h1_fun.textContent = "Don't overdue it";
      funSection.append(h1_fun);
    } else {
      nav.classList.remove("nav-alternate-color");
      nav.classList.add("nav-main-color");
      funSection.innerHTML = "";
    }
  });
}, options);

triggerObserver.observe(sectionToTriggerChange);
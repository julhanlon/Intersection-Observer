let sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const renderSections = (num) => {
  const main = document.querySelector("main");
  return new Promise((resolve, reject) => {
    for (let i = 0; i < num; i++) {
      const section = document.createElement("section");
      const h1_text = document.createElement("h1");
      h1_text.textContent = "this is a section";
      section.append(h1_text);

      if (i === num - 1) {
        section.classList.add("the_end");
      }
      main.append(section);
    }
    sections = document.querySelectorAll("section");
    resolve("complete");
  });
};

renderSections(15).then((res) => console.log(res));

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("transformed");
      entry.target.querySelector("h1").textContent = "Activated";

      if (entry.target.classList[0] === "the_end") {
        alert("The end");
      }

      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
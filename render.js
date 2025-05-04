// render.js
const params = new URLSearchParams(window.location.search);
const pageId = parseInt(params.get("page")) || 1;
const pageData = pages[pageId - 1];

if (!pageData) {
  document.body.innerHTML = "<h1>Page Not Found</h1>";
} else {
  document.getElementById("page-title").textContent = pageData.title;
  document.getElementById("main-heading").textContent = pageData.mainHeading;
  document.getElementById("intro-paragraph").innerHTML = pageData.introParagraph;

  const serviceContainer = document.getElementById("our-services-container");
  pageData.services.forEach((service) => {
    const div = document.createElement("div");
    div.className = "our-first";
    div.innerHTML = `
      <h4>${service.heading}</h4>
      <p>${service.description}</p>
      <br />
      <div class="right-our">
        ${service.items.map(item => `<div class="right">${item}</div>`).join("")}
      </div>
    `;
    serviceContainer.appendChild(div);
  });

  const whyUsContainer = document.getElementById("why-us-container");
  pageData.whyUs.forEach((reason) => {
    const div = document.createElement("div");
    div.className = "us-cont";
    div.textContent = reason;
    whyUsContainer.appendChild(div);
  });

  document.getElementById("what-next").textContent = pageData.whatNext;

  const nextSteps = document.getElementById("next-steps-container");
  pageData.nextSteps.forEach((step) => {
    const div = document.createElement("div");
    div.className = "next-hpn";
    div.textContent = step;
    nextSteps.appendChild(div);
  });
}

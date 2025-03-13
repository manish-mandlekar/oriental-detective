const nextArrow = document.querySelector(".next-arrow");
const prevArrow = document.querySelector(".prev-arrow");

nextArrow?.addEventListener("click", () => {
  // Store elements before modifying them
  const t1 = document.querySelector(".t-1");
  const t2 = document.querySelector(".t-2");
  const t3 = document.querySelector(".t-3");
  const t4 = document.querySelector(".t-4");
  const t5 = document.querySelector(".t-5");
  const t6 = document.querySelector(".t-6");
  const t7 = document.querySelector(".t-7");

  // Modify classes in the correct sequence
  t1?.classList.replace("t-1", "t-7");
  t2?.classList.replace("t-2", "t-1");
  t3?.classList.replace("t-3", "t-2");
  t4?.classList.replace("t-4", "t-3");
  t5?.classList.replace("t-5", "t-4");
  t6?.classList.replace("t-6", "t-5");
  t7?.classList.replace("t-7", "t-6");
});

prevArrow?.addEventListener("click", () => {
  // Store elements before modifying them
  const t1 = document.querySelector(".t-1");
  const t2 = document.querySelector(".t-2");
  const t3 = document.querySelector(".t-3");
  const t4 = document.querySelector(".t-4");
  const t5 = document.querySelector(".t-5");
  const t6 = document.querySelector(".t-6");
  const t7 = document.querySelector(".t-7");

  // Modify classes in the correct sequence
  t1?.classList.replace("t-1", "t-2");
  t2?.classList.replace("t-2", "t-3");
  t3?.classList.replace("t-3", "t-4");
  t4?.classList.replace("t-4", "t-5");
  t5?.classList.replace("t-5", "t-6");
  t6?.classList.replace("t-6", "t-7");
  t7?.classList.replace("t-7", "t-1");
});

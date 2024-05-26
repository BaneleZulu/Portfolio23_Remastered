document.addEventListener("DOMContentLoaded", function (event) {
  //**SIDE BAR CONTROL FUNCTION */

  let is_nav_visible = false;
  const toggle_button = document.getElementById("bars_icon");
  const side_nav = document.getElementById("sidePanel");
  const nav_content = document.getElementsByClassName("side_nav_content")[0];
  const link_content = document.querySelectorAll(".link_content");

  toggle_button.addEventListener("click", () => {
    let count = 0;
    if (is_nav_visible == false) {
      toggle_button.classList.remove("fa", "fa-solid", "fa-bars");
      toggle_button.classList.add("fa-sharp", "fa-solid", "fa-x");
      side_nav.style.width = "300px";
      nav_content.style.visibility = "visible";
      is_nav_visible = true;
      link_content.forEach((content) => {
        content.style.display = "inline-block";
      });
    } else {
      toggle_button.classList.remove("fa-sharp", "fa-solid", "fa-x");
      toggle_button.classList.add("fa", "fa-solid", "fa-bars");
      side_nav.style.width = "70px";
      nav_content.style.visibility = "hidden";
      is_nav_visible = false;
      link_content.forEach((content) => {
        content.style.display = "none";
      });
    }
  });

  // ** RETURNING  NAV TO DEFAULT STATE AFTER CLICK
  side_nav.addEventListener("mouseover", () => {
    side_nav.style.width = "300px";
    nav_content.style.visibility = "visible";
    link_content.forEach((content) => {
      content.style.display = "inline";
    });
  });
  side_nav.addEventListener("mouseleave", () => {
    side_nav.style.width = "70px";
    nav_content.style.visibility = "hidden";
    link_content.forEach((content) => {
      content.style.display = "none";
    });
  });

  //**SKILLS FUNCTION */
  let circle = document.querySelectorAll(".circle");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let progress = entry.target;
          let degree = 0;
          let targetDegree = parseInt(progress.getAttribute("data-degree"));
          let color = progress.getAttribute("data-color");
          let number = progress.querySelector(".number");

          var interval = setInterval(function () {
            degree += 1;
            if (degree > targetDegree) {
              clearInterval(interval);
              // observer.observe(entry.target); // Stop observing the element after animation
              observer.unobserve(entry.target); // Unobserve the element after animation
              return;
            }
            progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + "<span>%</span>";
            number.style.color = color;
          }, 50);
        }
      });
    },
    { threshold: 0.1 }
  );
  circle.forEach((progress) => {
    observer.observe(progress); //this code set the how many time the observer must watch/listen to the scroll event. noobserver: the scroll is only received once.
  });


  //** FORM FUNCTION */
  // const scriptURL =
  //   "https://script.google.com/macros/s/AKfycbyIdntLa7V2PJ-Dn6TDGzQswMeUG8ba7GdEZbycDIfvYlc9y0BLF9wG77jeAwFxUtfd/exec";
  // const form = document.forms["submit-to-google-sheet"];
  // const msg = document.getElementById("msg");
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then((response) => {
  //       msg.innerHTML = "Message Sent Successfully";
  //       setTimeout(function () {
  //         msg.innerHTML = "";
  //       }, 5000);
  //       form.reset();
  //     })
  //     .catch((error) => console.error("Error!", error.message));
  // });
});

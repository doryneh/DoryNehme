document.querySelector(".navbar-btn")
.addEventListener("click", () => {
    document.querySelector(".navbar-wrapper")
    .classList.toggle("change");
});

setTimeout(fade_out, 1500);

function fade_out() {
  $("#mydiv").fadeOut().empty();
}


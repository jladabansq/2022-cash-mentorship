/* Back to Top
 */
const backToTopBtn = document.getElementById("backToTopBtn");

// code from W3schools
// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

backToTopBtn.addEventListener("click", backToTop);

/* Alert before leaving the page
 */
function redirectFunction(href) {
  if (confirm("Are you sure you want to navigate to another site?")) {
    window.alert("You will now be redirected.");
    window.open(href, "_blank");
  } else {
    // do nothing
  }
}

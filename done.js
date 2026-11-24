// After paying: take the user straight back to the My Islam Daily app.
(function () {
  var url = "intent://payment-done#Intent;scheme=com.namaztracker.app;package=com.namaztracker.app;end";
  var btn = document.getElementById("back");
  btn.setAttribute("href", url);
  setTimeout(function () { location.href = url; }, 600);
})();

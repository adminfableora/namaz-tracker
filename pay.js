// Opens Cashfree's secure checkout for a payment session created by our server.
// No keys here: the session id is single-use and only works for this one order.
(function () {
  var msg = document.getElementById("msg");
  function fail(t) {
    msg.textContent = t;
  }
  var q = new URLSearchParams(location.search);
  var session = q.get("s") || "";
  var mode = q.get("m") === "production" ? "production" : "sandbox";
  // Session ids are long tokens of letters, digits, _ and -; reject anything else.
  if (!/^[A-Za-z0-9_\-]{20,400}$/.test(session)) {
    return fail("This payment link is not valid. Please go back to the app and try again.");
  }
  if (typeof Cashfree !== "function") {
    return fail("Could not load the payment page. Check your internet and try again.");
  }
  try {
    Cashfree({ mode: mode }).checkout({ paymentSessionId: session, redirectTarget: "_self" });
  } catch (e) {
    fail("Could not open the payment page. Please go back to the app and try again.");
  }
})();

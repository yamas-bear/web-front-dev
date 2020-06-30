document.addEventListener("DOMContentLoaded", function () {
  //domの要素がロードされたときに実行される

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("inview");
    }
  };

  const so = new ScrollObserver(".cover-slide", cb);
});

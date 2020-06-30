document.addEventListener("DOMContentLoaded", function () {
  //domの要素がロードされたときに実行される

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".animate-title", cb);
});

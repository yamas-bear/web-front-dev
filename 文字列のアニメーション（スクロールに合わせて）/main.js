document.addEventListener("DOMContentLoaded", function () {
  //domの要素がロードされたときに実行される
  const els = document.querySelectorAll(".animate-title"); //.animate-titleの要素を全て取得する。配列でelsに格納される
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target); //object作成
        ta.animate();
        observer.unobserve(entry.target);
      } else {
      }
    });
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});

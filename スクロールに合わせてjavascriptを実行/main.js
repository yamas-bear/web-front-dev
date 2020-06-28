const child = document.querySelector(".child"); //class=childのhtml要素を取得する
const cb = function (entries, observer) {
  //entriesが各要素(DOMやそのほかのプロパティがまとめて渡される
  entries.forEach((entry) => {
    //対象の要素
    if (entry.isIntersecting) {
      //isIntersectingプロパティがtrueのとき
      console.log("inview");
      entry.target.classList.add("inview"); //tagetはDOM(child)のこと
      //   observer.unobserve(entry.target);  //監視を辞める
    } else {
      console.log("out view");
      entry.target.classList.remove("inview"); //tagetはDOM(child)のこと
    }
  });
};

const options = {
  rootMargin: "-300px 0px", //上下左右のどの位置なのかを指定する。デフォルトは0px。またpxを忘れるとエラーが出るので注意する
};

const io = new IntersectionObserver(cb, options); //windowの中に登録した要素が入ってくるときと出ていくときにcallback関数(cb)を実行する
io.observe(child); //監視対象を登録。DOMの要素はchild

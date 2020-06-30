class ScrollObserver {
  constructor(els, cb, options) {
    //constructor内ではプロパティの値だけ決定して関数などの複雑な処理はメソッドに分けてあげたほうがよい
    this.els = document.querySelectorAll(els); //.animate-titleの要素を全て取得する。配列でelsに格納される
    const defaultoptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultoptions, options); //同じ名前のプロパティ（options）があれば上書きされる。なければdefaultoptionsを使用
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true); //(監視しているdom,真値)
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false); //(監視しているdom,真値)
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => this.io.observe(el));
  }

  destroy() {
    this.io.disconnect();
  }
}

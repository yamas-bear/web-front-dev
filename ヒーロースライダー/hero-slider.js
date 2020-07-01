class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1, //スライド一枚だけを表示する
      speed: 1000,
      breakpoints: {
        //画面の大きさによってふるまいを変える
        1024: {
          //1024pxまではスライドの枚数は1だが1024pxからは2枚に変更する
          slidesPerView: 2,
        },
      },
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000, //4秒
        disableOnInteraction: false, //マウスで操作したあとも自動スワイプを適用する。tureの場合はマウスで操作したあとだと自動スワイプはされなくなる
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

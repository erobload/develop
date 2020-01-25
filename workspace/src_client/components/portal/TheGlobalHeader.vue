<template>
  <header class="l-header">
    <div class="l-header__wrapper">
      <div class="l-header__humburger">
        <span></span>
        <span class="over"></span>
        <span></span>
      </div>
      <h1>
        <a class="l-header__logo" href="/portal">
          <img src="/assets/img/logo.png" alt="えろげぶろーど" />
        </a>
      </h1>
      <figure class="u-mr-10 l-header__search js-header__search">
        <img src="/assets/img/ico_search.png" />
      </figure>
      <the-input-search v-model="keyword" />
    </div>
    <nav class="l-header__container">
      <ul class="l-header__container__list">
        <li class="l-header__container__item">
          <a class="l-header__container__link js-header__container__link" href="/portal">HOME</a>
        </li>
        <li class="l-header__container__item">
          <a class="l-header__container__link js-header__container__link" href="#news">最新情報</a>
        </li>
        <li class="l-header__container__item">
          <a class="l-header__container__link js-header__container__link" href="#popular">人気記事</a>
        </li>
        <li class="l-header__container__item">
          <a class="l-header__container__link js-header__container__link" href="#tweet">ツイート</a>
        </li>
        <li class="l-header__container__item">
          <a class="l-header__container__link js-header__container__link" href="#category">カテゴリ</a>
        </li>
      </ul>
    </nav>
    <!-- <div class="l-header__mv">
            <ul class="l-header__mv__list js-slider">
                <li class="l-header__mv__item -first">
                    <a class="l-header__mv__link" href="http://www.akabeesoft3.com/" target="_blank"><img src="http://www.akabeesoft3.com/products/charabration/images/banner600x150.jpg" border="0" width="600" height="150" alt="『きゃらぶれーしょん！』を応援しています！"></a>
                </li>
                <li class="l-header__mv__item -second">
                    <a class="l-header__mv__link" href="http://palette.clearrave.co.jp/product/yukiiro/" target="_blank"><img src="http://palette.clearrave.co.jp/product/yukiiro/images/special/banner/600-140_01.jpg" alt="9-nine-ゆきいろゆきはなゆきのあと"></a>
                </li>
                <li class="l-header__mv__item -third">
                    <a class="l-header__mv__link" href="http://madosoft.net/raspberry/" target="_blank"><img src="http://madosoft.net/raspberry/img/ouen/600x150_1.jpg" border="0" alt="【ラズベリーキューブ】応援中！"></a>
                </li>
            </ul>
    </div>-->
    <div class="l-overlay"></div>
  </header>
</template>

<script>
import TheInputSearch from "./TheInputSearch";

export default {
  components: {
    TheInputSearch
  },
  props: {
    input: Event,
    value: String
  },
  computed: {
    keyword: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

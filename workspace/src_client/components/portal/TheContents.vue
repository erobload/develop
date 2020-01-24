<template>
  <div>
    <ul class="p-portal__contents__list c-section__list">
      <li
        class="p-portal__contents__item c-section__item"
        v-for="(content, index) in getContents"
        :key="index"
      >
        <contents-item :content="content"></contents-item>
      </li>
    </ul>
    <paginate
      :page-count="getPageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'＜'"
      :next-text="'＞'"
      :container-class="'pagination'"
      :page-class="'p-portal__paginate__item'"
    ></paginate>
  </div>
</template>

<script>
import ContentsItem from "./ContentsItem";

export default {
  components: {
    ContentsItem
  },
  props: {
    keyword: String,
    cat_name: String
  },
  data() {
    return {
      parPage: 10,
      currentPage: 1
    };
  },
  computed: {
    contents() {
      let contents = this.testData();

      /* 検索フィルタリング */
      return contents.filter(content => {
        return (
          content.title.indexOf(this.keyword) != -1 &&
          content.categories.filter(category => {
            return category.indexOf(this.cat_name) != -1;
          }).length > 0
        );
      });
    },
    getContents: function() {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.contents.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.contents.length / this.parPage);
    }
  },
  methods: {
    /* テスト用データ作成 */
    testData() {
      let contents = [];
      for (let i = 1; i < 100; i++) {
        contents.push({
          title: "フォーリン・ラビリンス-隷属の少女たち- 紹介" + i,
          time: this.dateFormat(2020, "01", i),
          categories: ["カテゴリー" + i],
          brand: "会社" + i
        });
      }
      return contents;
    },
    dateFormat: function(year, month, date) {
      return `${year}年${month}月${date}`;
    },
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
};
</script>

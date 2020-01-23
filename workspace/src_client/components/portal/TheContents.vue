<template>
  <ul class="p-portal__contents__list c-section__list">
    <li class="p-portal__contents__item c-section__item" v-for="(content, index) in contents" :key="index">
      <contents-item :content="content"></contents-item>
    </li>
  </ul>
</template>

<script>
import ContentsItem from "./ContentsItem";

export default {
  components: {
    ContentsItem
  },
  props: {
    keyword: String
  },
  data() {
    return {};
  },
  computed: {
    contents() {
      let contents = this.testData();

      /* 検索フィルタリング */
      return contents.filter(content => {
        return content.title.indexOf(this.keyword) != -1;
      });
    }
  },
  methods: {
    /* テスト用データ作成 */
    testData() {
      let contents = [];
      for (let i = 1; i < 30; i++) {
        contents.push({
          title: "フォーリン・ラビリンス-隷属の少女たち- 紹介" + i,
          time: this.dateFormat(2020, "01", i)
        });
      }

      return contents;
    },
    dateFormat: function(year, month, date) {
      return `${year}年${month}月${date}`;
    }
  }
};
</script>

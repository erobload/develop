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
      content_list: [],
      parPage: 12,
      currentPage: 1
    };
  },
  created() {
    /* コンテンツ取得 */
    axios.get("/portal/api/contents").then(res => {
      this.content_list.splice(0, 0, ...res.data);
    });
  },
  computed: {
    contents() {
      /* 検索フィルタリング */
      return this.content_list.filter(content => {
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

      /* ペジネーション */
      return this.contents.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.contents.length / this.parPage);
    }
  },
  methods: {
    dateFormat: function(year, month, date) {
      return `${year}年${month}月${date}`;
    },
    clickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
};
</script>

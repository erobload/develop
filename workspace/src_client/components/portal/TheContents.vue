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
      :container-class="'p-portal__paginate'"
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
      currentPage: 1
    };
  },
  created() {
    /* コンテンツ取得 */
    axios.get("/portal/api/contents").then(res => {
      this.content_list.splice(0, 0, ...res.data);
    });

    /* 初期設定 */
    this.currentPage = store.data.currentPage;
  },
  computed: {
    contents() {
      /* 検索フィルタリング */
      return this.content_list.filter(content => {
        return (
          content.title.indexOf(this.keyword) != -1 &&
          content.categories.filter(category => {
            /* カテゴリーが「ALL」なら全て返す */
            return this.cat_name == "ALL"
              ? true
              : category.indexOf(this.cat_name) != -1;
          }).length > 0
        );
      });
    },
    getContents: function() {
      let current = this.currentPage * store.data.parPage;
      let start = current - store.data.parPage;

      /* ペジネーション */
      return this.contents.slice(start, current);
    },
    getPageCount: function() {
      return Math.ceil(this.contents.length / store.data.parPage);
    }
  },
  methods: {
    dateFormat: function(year, month, date) {
      return `${year}年${month}月${date}`;
    },
    clickCallback: function(pageNum) {
      store.data.currentPage = Number(pageNum);
      this.currentPage = Number(pageNum);
    }
  }
};
</script>

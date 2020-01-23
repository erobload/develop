<template>
  <ul class="p-portal__category__list c-section__list">
    <li
      class="p-portal__category__item c-section__item"
      v-for="(category, index) in categories"
      :key="index"
    >
      <category-item :category="category"></category-item>
    </li>
  </ul>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  components: {
    CategoryItem
  },
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.testData();
    }
  },
  methods: {
    /* テスト用データ作成 */
    testData() {
      let categories = [];
      for (let i = 1; i < 10; i++) {
        contents.push({
          slug: "category" + i,
          text: "カテゴリー" + i
        });
      }

      return categories;
    }
  }
};
</script>

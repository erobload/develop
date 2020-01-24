<template>
  <ul class="p-portal__category__list c-section__list">
    <li
      class="p-portal__category__item c-section__item"
      v-for="(category, index) in categories"
      :key="index"
    >
      <category-item :category="category" v-model="active"></category-item>
    </li>
  </ul>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  components: {
    CategoryItem
  },
  props: {
    value: Object,
    input: Event
  },
  computed: {
    active: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    },
    categories() {
      return this.testData();
    }
  },
  methods: {
    /* テスト用データ作成 */
    testData() {
      let categories = [];
      for (let i = 1; i < 10; i++) {
        categories.push({
          slug: "category" + i,
          name: "カテゴリー" + i
        });
      }

      return categories;
    }
  }
};
</script>

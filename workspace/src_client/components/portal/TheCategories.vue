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
  data() {
    return {
      category_list: [{ slug: "ALL", name: "ALL" }]
    };
  },
  created() {
    /* カテゴリー取得 */
    axios.get("/portal/api/category").then(res => {
      for (const data of res.data) {
        this.category_list.push({
          slug: data.categories,
          name: data.categories
        });
      }
    });
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
      return this.category_list;
    }
  }
};
</script>

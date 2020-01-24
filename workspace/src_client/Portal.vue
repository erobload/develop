<template>
  <div id="portal" role="body">
    <the-global-header v-model="keyword" />
    <main class="portal">
      <the-categories v-model="category" />
      <section class="l-inner p-contents c-section u-mt-40">
        <div class="c-section__inner">
          <the-title :title="title" />
          <the-contents :keyword="keyword" :cat_name="category.name" />
        </div>
      </section>
    </main>
    <the-global-footer />
  </div>
</template>

<script>
import TheGlobalHeader from "./components/portal/TheGlobalHeader";
import TheGlobalFooter from "./components/portal/TheGlobalFooter";
import TheCategories from "./components/portal/TheCategories";
import TheContents from "./components/portal/TheContents";
import TheTitle from "./components/portal/TheTitle";

export default {
  components: {
    TheGlobalHeader,
    TheGlobalFooter,
    TheCategories,
    TheContents,
    TheTitle
  },
  data() {
    return {
      title: "All",
      active_keyword: "",
      active_category: { slug: "", name: "" }
    };
  },
  computed: {
    category: {
      get: function() {
        return this.active_category;
      },
      set: function(value) {
        this.active_category = value;
        this.title = this.active_category.name;
      }
    },
    keyword: {
      get: function() {
        return this.active_keyword;
      },
      set: function(value) {
        this.active_keyword = value;
      }
    }
  }
};
</script>

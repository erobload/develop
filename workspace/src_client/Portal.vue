<template>
  <div id="portal" role="body">
    <the-global-header />
    <main class="portal">
      <the-categories />
      <section class="l-inner p-contents c-section u-mt-40">
        <div class="c-section__inner">
          <the-input-search :value="keyword" @input="keyword=$event" />
          {{ keyword }}
          <the-title :title="title" />
          <the-contents :keyword="keyword" />
        </div>
      </section>
    </main>
    <the-global-footer />
  </div>
</template>

<script>
import TheGlobalHeader from "./components/portal/TheGlobalHeader";
import TheGlobalFooter from "./components/portal/TheGlobalFooter";
import TheContents from "./components/portal/TheContents";
import TheTitle from "./components/portal/TheTitle";
import TheInputSearch from "./components/portal/TheInputSearch";

export default {
  components: {
    TheGlobalHeader,
    TheGlobalFooter,
    TheContents,
    TheTitle,
    TheInputSearch
  },
  data() {
    return {
      keyword: "",
      title: "各タイトル一覧"
    };
  },
  methods: {}
};
</script>

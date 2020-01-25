<template>
  <div class="l-header__searchBox">
    <input type="text" placeholder="タイトル名検索" v-model="keyword" />
    <div class="l-header__searchClose js-header__searchClose">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    input: Event
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

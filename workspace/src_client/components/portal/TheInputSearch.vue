<template>
  <input type="text" placeholder="タイトル名検索" v-model="keyword" />
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

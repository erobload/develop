<template>
  <span
    class="p-portal__category__link c-section__article__category"
    :class="{ '-active':is_active }"
    @click="active = category"
  >{{ category.name }}</span>
</template>

<script>
export default {
  props: {
    value: Object,
    input: Event,
    category: Object
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
    is_active() {
      return this.active.slug == this.category.slug;
    }
  }
};
</script>
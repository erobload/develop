<template>
  <div class="p-portal__contents__title__wrapper c-section__title__wrapper">
    <h2 class="p-portal__contents__title c-section__title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

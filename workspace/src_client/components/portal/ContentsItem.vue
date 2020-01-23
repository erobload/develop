<template>
  <a class="p-portal__contents__item__link">
    <figure class="p-portal__contents__item__thumb c-section__item__thumb">
      <img src="https://erobload.com/assets/img/logo.png" alt="タイトル名" />
    </figure>
    <div class="p-portal__contents__article c-section__article">
      <div class="p-portal__contents__article__header c-section__article__header">
        <h3 class="p-portal__contents__article__title c-section__article__title">{{ content.title }}</h3>
      </div>
      <time class="p-portal__contents__article__time c-section__article__time">{{ content.time }}</time>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>
<template>
  <a class="p-portal__contents__item__link" :href="content.link">
    <figure class="p-portal__contents__item__thumb c-section__item__thumb">
      <img :src="content.image_path" :alt="content" />
    </figure>
    <div class="p-portal__contents__article c-section__article">
      <p>
        <span
          class="p-portal__category__link c-section__article__category"
        >{{ content.categories[0] }}</span>
        <span
          class="p-portal__category__link c-section__article__category"
        >{{ content.categories[1] }}</span>
        <span
          class="p-portal__category__link c-section__article__category"
        >{{ content.categories[2] }}</span>
      </p>
      <div class="p-portal__contents__article__header c-section__article__header">
        <h3 class="p-portal__contents__article__title c-section__article__title">{{ content.title }}</h3>
        <time class="p-portal__contents__article__time c-section__article__time">{{ content.time }}</time>
      </div>
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
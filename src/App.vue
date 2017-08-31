<template>
  <div id="app">
    <media :query="{maxWidth: 720}">smaller than 770px</media>
    <vue-header></vue-header>
    <time-line></time-line>
  </div>
</template>

<script>
  import Media from 'vue-media'
  import VueHeader from './components/Header'
  import TimeLine from './components/TimeLine'

  export default {
    components: {
      Media,
      VueHeader,
      TimeLine
    }
  }
</script>

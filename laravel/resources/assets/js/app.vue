<template>
  <div id="app">
    <my-header></my-header>
    {{ message }}
    <router-view></router-view>
  </div>
</template>
<script>
  import MyHeader from './components/shared/header';

  export default {
    components: {
      MyHeader
    },
    data() {
      return {
        message: 'Hello World'
      }
    }
  }
</script>

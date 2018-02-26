<template>
  <div id="app">
    <my-header></my-header>
    {{ message }}

    <ul>
      <li>
        <router-link to="/">index</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
    </ul>

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

<template>
  <div>
    index

    <ul>
      <li v-for="item in posts">
        <div>{{item.title}}</div>
        <div>{{item.body}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";

  export default {
    created() {
      this.$store.dispatch('fetchList');
    },
    computed: {
      ...mapGetters([
        'posts'
      ])
    }
  }
</script>

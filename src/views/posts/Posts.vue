<template>

  <div class="col-xs-12">

    <posts-list></posts-list>

  </div>

</template>

<script>
  import PostsList from '../../components/posts-lists/PostsLists';

  export default {
    data: function() {
      return {};
    },
    components: { PostsList }
  };
</script>

<style lang="scss">

</style>
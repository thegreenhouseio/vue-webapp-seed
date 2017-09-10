<template>

  <div class="col-xs-12">
    <p>TODO fix this layout (icon left aligned to details</p>

    <div class="row">

      <div class="post-details">

        <div class="col-xs-4">
          <i class="cal-icon fa fa-calendar-o"></i>
        </div>

        <div class="col-xs-6">
          <div v-if="post">
            <p>Post Title: {{ post.title }}</p>
            <p>Post Summary:<p>
            <p v-html="post.summary"></p>
            <p>Post Created Time: {{ post.createdTime * 1000 }}</p>
          </div>
        </div>

        <div class="col-xs-2">
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import PostsService from '../../services/posts-service';

  export default {
    data: function() {
      const postId = parseInt(this.$route.params.id, 10);
      
      return {
        post: new PostsService().getPosts(postId)
      };
    }
  };
</script>

<style lang="scss">

</style>
<template>

  <div>

    <h2>Latest Posts</h2>

    <div v-for="(post, index) in posts">

      <div v-if="index < maxPosts" class="post">
        <h4 class="post-header">{{post.title}}
          <span class="post-time">[ {{ post.createdTimeFormatted }} ]</span>
        </h4>

        <details v-html="post.summary" class="post-summary"></details>

        <router-link to="/posts/1">Click for full details</router-link>

        <hr/>
      </div>

    </div>

  </div>

</template>

<script>
  import _ from 'moment';
  import PostsService from '../../services/posts-service';

  const posts = new PostsService().getPosts();

  function formatTimeForPosts(posts) {
    let formattedPosts = [];

    posts.forEach(post => {
      post.createdTimeFormatted = _.unix(post.createdTime).format('MMMM Do YYYY, h:mm:ss a');

      formattedPosts.push(post);
    });

    return posts;
  }

  export default {
    data: function() {
      return {
        maxPosts: 2,
        posts: formatTimeForPosts(posts)
      };
    }
  };
</script>

<style lang="scss">
  .post {
    .post-header {
      text-decoration: underline;
    }

    .post-time {
      font-size: .7em;
      text-decoration: none;
    }
  }
</style>
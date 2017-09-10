<template>
  <div class="col-xs-12">

    <div class="row">
      <div class="col-xs-2">
      </div>

      <div class="col-xs-8">

        <h2 class="welcome-text-heading">Welcome to The Greenhouse Webapp Seed project!</h2>

        <p class="welcome-text-body">This is a sample project to demonstrate a basic Angular 2 and Webpack build.</p>

        <p>Checkout our latest posts below, or all our posts over <router-link to="/posts">Here</router-link>!</p>

      </div>

      <div class="col-xs-2">
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2">
      </div>

      <div class="col-xs-8">

        <div class="posts-container">
          <posts-list></posts-list>
        </div>

      </div>

      <div class="col-xs-2">
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2">
      </div>

      <div class="col-xs-8">

        <h2>Form Example</h2>
        <p>Submit just outputs form (and values) to the console</p>

        <form v-on:submit.prevent="onSubmit">

          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" required/>

          <br/>
          <p v-if="form.name">Welcome to the site, {{form.name}}!</p>

          <button v-on:click="submitForm" class="btn" type="submit">Submit</button>
          <button class="btn" type="reset">Reset</button>

        </form>

      </div>

      <div class="col-xs-2">
      </div>
    </div>

  </div>
</template>

<script>
  import PostsList from '../../components/posts-lists/PostsLists.vue';

  export default {
    data: function() {
      return {
        form: {
          name: ''
        }
      };
    },
    components: { PostsList },
    methods: {
      submitForm: function() {
        console.log('submit form', this.form); // eslint-disable-line
      }
    }
  };
</script>

<style lang="scss">

</style>

<template>

  <footer class="col-xs-12">

    <p class="copyright-text">&copy; {{ year }} - <a href="http://www.thegreenhouse.io">The Greenhouse</a></p>

  </footer>

</template>

<script>
  export default {
    data: function() {
      return {
        year: 2017
      };
    }
  };
</script>

<style lang="scss">

  /* TODO get variables to work */

  footer {
    .copyright-text {
      margin: 10px auto;
      text-align: center;
      color: #020202;
    }
  }

</style>
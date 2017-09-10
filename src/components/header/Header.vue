<template>

  <header class="col-xs-12">

    <h2 class="hidden-md-up header-text ">The Greenhouse</h2>
    <div class="hidden-sm-down header-banner"></div>
    <p class="io-text">.io</p>

  </header>

</template>

<script>
  export default {
    data: function() {
      return {};
    }
  };
</script>

<style lang="scss">
  header {
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
  }

  .header-text {
    margin: 0 auto;
  }

  .header-banner {
    background: url('images/banner.gif');
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
  }

  .io-text {
    width: 50px;
    margin: 0 auto;
  }
</style>
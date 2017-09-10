<template>

  <div id="bootstrap">
    <section>
      <tgh-header></tgh-header>
    </section>

    <p>Hello World!</p>

    <section>
      <!--<tgh-navigation></tgh-navigation>-->
      <router-view></router-view>
    </section>

    <section>
      <tgh-footer></tgh-footer>
    </section>
  </div>

</template>

<script>
  import Footer from '../footer/Footer';
  import Header from '../header/Header';

  export default {
    data: function() {
      return {};
    },
    components: {
      'tgh-header': Header,
      'tgh-footer': Footer
    }
  };
</script>

<style lang="scss">

  @import '~bootstrap/scss/bootstrap';
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina');

  //variables
  $white: #efefef;
  $black: #020202;

  $primary: #6d0202;
  $bg-primary: #c2b08b;
  $bg-secondary: #ae996b;
  $bg-tertiary: #d3c6ae;

  $font-family-primary: 'Baloo Bhaina', cursive;
  $font-color-primary: $white;
  $font-color-secondary: #316291;

  #bootstrap {
    font-family: $font-family-primary;
  }

</style>
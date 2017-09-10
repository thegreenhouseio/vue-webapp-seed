<template>

  <div>
    <section>
      <tgh-header></tgh-header>
    </section>

    <p>Hello World!</p>

    <!--<section>-->
      <!--<tgh-navigation></tgh-navigation>-->
      <!--<ui-view/>-->
    <!--</section>-->

    <section>
      <tgh-footer></tgh-footer>
    </section>
  </div>

</template>

<script>
  import Footer from './Footer';
  import Header from './Header';

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

<style>

  p.greeting {
    color: red;
  }

</style>
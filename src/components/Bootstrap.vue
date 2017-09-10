<template>

  <section>
    <div>
      <p class="greeting">Hello {{ name }}!</p>
    </div>

  </section>

</template>

<script>
  export default {
    data: function() {
      return {
        name: 'Owen'
      };
    }
  };
</script>

<style>

  p.greeting {
    color: red;
  }

</style>
<template>
  <div>{{ config }}</div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      config: {},
    };
  },
  mounted() {
    this.$provider.common.qa().then((getter) => {
      this.config = getter.paths('d', {});
    });
  },
};
</script>

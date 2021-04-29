<template>
    <p>{{ msg }}</p>
</template>

<script>
export default {
  // assign a name to component for easier debugging
  name: "Greeting", 
  data() {
    return {
      msg: "Hello World!",
    }
  }
};
</script>

<style scoped lang="scss">
$color: red;
p {
    color: $color;
}
</style>
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

<style scoped>
p {
    color: red;
}
</style>
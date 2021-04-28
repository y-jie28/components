<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  // assign a name to component for easier debugging
  name: "App", 
  data() {
    return {
      msg: "Hello World!",
    }
  }
};
</script>
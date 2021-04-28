<template>
  <Greeting></Greeting>
</template>

<script>
import Greeting from './components/Greeting.vue';

export default {
  // assign a name to component for easier debugging
  name: "App", 
  components: {
    // register a component locally
    Greeting: Greeting
  }
};
</script>
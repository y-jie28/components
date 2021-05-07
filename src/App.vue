<template>
  <h3>Hello App!</h3>
  <button type="button" @click="age++">Update Age</button>
  <!-- components can be written differently from how it's registered, it can be
  written in lower case and Vue is still able to recognize it. This is nice since HTML elements are lower cased -->
  <greeting :age="age"></greeting>
  <!-- The value that gets passed down will not automatically be interpreted as an expression -->
  <!-- <user :age="age" @age-change="updateAge"></user> -->
  <user :age="age" @age-change="updateAge" :ageChangeFunction="updateAgeCB"></user>

</template>

<script>
import Greeting from './components/Greeting';
import User from './components/User';

export default {
  // assign a name to component for easier debugging
  name: "App", 
  components: {
    // register a component locally
    Greeting,
    User
  }, 
  // adding the data in App so it can be passed down to both Greeting and User
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      this.age += num 
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
};
</script>
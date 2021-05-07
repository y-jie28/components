<template>
    <p>The  user is {{ age }} years old</p>
    <!-- the following will throw an error because prop mutation is not allowed -->
    <!-- <button type="button" @click="age++">Update Age</button> -->
    <button type="button" @click="onClickAge">Update Age Event</button>
    <button type="button" @click="ageChangeFunction(3)">Update Age Callback</button>
    <p>{{ ageDoubled }}</p>

</template>

<script>
export default {
    name: "User",
    props: // ["age"], // it should match the attribute name
    {   age: {
        type: Number, // for multiple data type, use array [Number, String]
        // required: true,
        default: 20
        }, 
        ageChangeFunction: Function
    },
    emits: ['age-change'], 
    computed: {
        ageDoubled() {
            return this.age * 2;
        } // not directly changing the age prop
    }, 
    methods: {
        onClickAge() {
            this.$emit('age-change', 3) // pass an argument and age will increase by 3
        }
    }
}

</script>
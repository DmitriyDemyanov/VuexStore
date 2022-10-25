<template>
  <div>
    <div class="hello">HelloWorld</div>
    <div>{{usersList}}</div>
    <button @click="addUser">Add Users</button>
  </div>
</template>

<script>
import{ mapGetters, mapActions } from 'vuex';


export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters('users', ['usersList']),
  },
  methods: {
    ...mapActions('users',['addNewUser']),
    addUser() {
      const newUser = {
        name: 'Marina',
        age: 38,
      };
      this.addNewUser(newUser);

    },
  }
};


</script>


<style scoped></style>

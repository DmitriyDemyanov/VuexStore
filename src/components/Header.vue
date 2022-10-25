<template>
  <div>
    <div>Header</div>
    <div>{{usersNames}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyHeader',
  computed: {
    ...mapGetters('users', ['names']),
    usersNames() {
      console.log('this.names', this.names)
      return this.names.join(", ");
    }
  }
};
</script>

<style scoped></style>

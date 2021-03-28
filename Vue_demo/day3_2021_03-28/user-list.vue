<template>
  <ul class="list-unstyled">
    <li v-for="user in users">
      <slot :user="user">
        {{user.id}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
name: "user-list"
}
</script>

<style scoped>

</style>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Post ID"
      }
    }
  }
</script>

<template>
  <h1 class="h1">Welcome to Jianqiang Du's personal website.</h1>
  <p class="text">I am building it gradually and continuously...</p>
  <p class="text">But I am really taking my time...</p>
  <p class="text">
    I hope there is something that interests you here...
    <button @click="handleClick">😀</button>
  </p>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const handleClick = () => router.push("/helloworld")
</script>

<style scoped lang="scss">
.h1 {
  margin-bottom: 60px;
}

.text {
  font-size: 18px;
}
</style>

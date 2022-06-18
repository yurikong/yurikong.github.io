<template>
  <h1>Hello World!</h1>
  <button @click="handleClick">Go Back</button>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const handleClick = () => router.push("/")
</script>

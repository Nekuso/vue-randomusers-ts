<script setup lang="ts">
import { onMounted } from 'vue'
import { useFetch } from '@/composables/use-fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchedUser } = useFetch(`${route.params.id}`)
</script>

<template>This is a profile page {{ fetchedUser }}</template>

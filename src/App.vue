<template>
  <div>
    <Header />
    <Breadcrumbs />
    <RouterView />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
  components: {
    Header,
    Breadcrumbs,
  },
}
</script>

<style scoped></style>

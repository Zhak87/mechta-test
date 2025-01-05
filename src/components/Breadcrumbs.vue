<template>
  <nav>
    <div class="container">
      <ul class="breadcrumbs">
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
          <router-link :to="breadcrumb.path" v-if="breadcrumb.path">
            {{ breadcrumb.label }}
          </router-link>
          <span v-else>{{ breadcrumb.label }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumbs',
  setup() {
    const route = useRoute()

    const breadcrumbs = computed(() => {
      const matchedRoutes = route.matched
      const breadcrumbs = matchedRoutes.map((route, index) => {
        const breadcrumb = {
          label: route.meta.label || route.name,
          path: index === matchedRoutes.length - 1 ? null : route.path,
        }
        return breadcrumb
      })

      if (breadcrumbs.length === 0 || breadcrumbs[0].label !== 'Главная') {
        breadcrumbs.unshift({
          label: 'Главная',
          path: '/',
        })
      }

      return breadcrumbs
    })

    return {
      breadcrumbs,
    }
  },
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.breadcrumbs {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #555;
}

.breadcrumb-item {
  margin-right: 10px;
}

.breadcrumb-item a {
  text-decoration: none;
  color: #007bff;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item::after {
  content: '>';
  margin-left: 10px;
}

.breadcrumb-item:last-child::after {
  content: '';
}

.breadcrumb-item span {
  color: #999;
}

.breadcrumbs a {
  font-weight: 500;
}

.breadcrumbs a:hover {
  color: #0056b3;
}

.breadcrumbs .breadcrumb-item:last-child {
  font-weight: 700;
  color: #333;
}
</style>

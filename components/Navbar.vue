<template>
    <div>
        <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">Home</NuxtLink>
            <NuxtLink to="/iphone">Iphones</NuxtLink>
            <NuxtLink to="/profile">Profile</NuxtLink>
            <p>Cart ({{ cart.length }})</p>
            <p>{{ pageVisitCount }}</p>
        </nav>
    </div>
</template>

<script setup>
const cart = useCart()
const pageVisitCount = usePageVisitCount()

console.log(pageVisitCount);


</script>

<style lang="scss" scoped>

</style>
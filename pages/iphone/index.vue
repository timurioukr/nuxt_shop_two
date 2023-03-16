<template>
    <div class="grid grid-cols-4 gap-4 mt-10">
        <NuxtLink v-for="iphone in iphones" :key="iphone" :to="`/iphone/${iphone}`">
            <h1>{{ iphone }}</h1>
            <div class="flex justify-center">
                <img width="200" src="images/iphone-15.avif" alt="">
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
useHead({
    title:'Nuxt 3 - Iphone'
})


const {data} = useFetch('/api/iphones')
const iphones = data

</script>
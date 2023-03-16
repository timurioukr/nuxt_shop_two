<template>
    <div>
        Index page in pages

        <button @click="moveToAbout">Go</button>
    </div>

</template>

<script setup>

const moveToAbout = () => {
    navigateTo('about')
}

</script>
<template>
    <div>
        Welcome to Profile
    </div>
    
</template>

<script setup>

definePageMeta({
    
    layout: 'sidebar',
    middleware: ['auth']
    })
</script>

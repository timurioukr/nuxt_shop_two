<template>
<main>
    <div>
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
        </article>
            <slot/>
        </div>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
}
</style>
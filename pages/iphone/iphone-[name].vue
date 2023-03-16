<template>
  <div>
    <div>
        <img :src="`/images/iphone-${route.params.name}.avif`" alt="">
    </div>

    <p>Iphone {{ name }}</p>
    <button
    v-if="inCart()"
        @click="addToCart"
      type="button"
      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    >
      Remove
    </button>
    <button
    v-else
        @click="addToCart"
      type="button"
      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    >
      Bye now
    </button>
  </div>
</template>

<script setup>
const route = useRoute();

const name = computed(() => {
  return route.params.name;
});

const fullName = computed(() => {
    return `iphone-${route.params.name}`
})

const cart = useCart()

function inCart() {
    return !!cart.value.find(val => val.name === fullName.value)
}

function addToCart() {
    if (!inCart()) cart.value.push({ name: fullName })
    else cart.value = cart.value.filter(val => val.name !== fullName.value)
}

</script>

<style lang="scss" scoped>
</style>
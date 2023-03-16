export default defineNuxtRouteMiddleware(() => {
    const auth = useAut()
    return auth.value.isAuthentacation
})
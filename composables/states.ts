export const useCart = () => useState<object[]>(() => [])

export const useAut = () => useState<object>(() => { return { isAuthentacation: true }})

export const usePageVisitCount = () => useState<number>(() => 0)
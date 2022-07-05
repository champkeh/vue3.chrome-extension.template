export default {
    mounted: (el: HTMLInputElement) => {
        el.addEventListener('focus', (evt) => {
            (evt.currentTarget as HTMLInputElement).select()
        })
    }
}

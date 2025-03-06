Vue.createApp({
    data() {
        return {
            paragraphStyle: "",
            paragraphVisible: true,
            inlineStyle: "",
        };
    },
    computed: {
        paragraphVisibleClass() {
            return this.paragraphVisible ? "visible" : "hidden";
        }
    },
    methods: {
        toggleParagraph() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
}).mount("#assignment");
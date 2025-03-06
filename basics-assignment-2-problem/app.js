Vue.createApp({
    data() {
        return {
            text1: "",
            outputText1: "",
            text2: "",
            outputText2: "",
        }
    },
    methods: {
        showAlert() {
            alert("Hello");
        },
        updateText1(event) {
            this.text1 = event.target.value;
        },
        updateText2(event) {
            this.text2 = event.target.value;
        },
        updateOutputText1(event) {
            this.outputText1 = event.target.value;
        },
        updateOutputText2(event) {
            this.outputText2 = event.target.value;
        }
    }
}).mount("#assignment");
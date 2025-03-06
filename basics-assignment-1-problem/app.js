const app = Vue.createApp({
    data() {
        return {
            name: "Kenji",
            age: 35,
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCsqRYLAFDdL4Ix_AHai7kNVyoPV9Ssv1xg&s",
        }
    },
    methods: {
        incrementAge(value) {
            return this.age + value;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment");
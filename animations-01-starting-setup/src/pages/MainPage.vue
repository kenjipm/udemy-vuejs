<template>
  <div>
    <div class="container">
      <UsersList />
    </div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <transition name="para">
        <p v-if="paragraphIsVisible">This is a test paragraph!</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition :css="false" @before-enter="hohoBeforeEnter" @enter="hohoEnter" @after-enter="hohoAfterEnter"
        @before-leave="hohoBeforeLeave" @leave="hohoLeave" @after-leave="hohoAfterLeave"
        @enter-cancelled="hohoEnterCancelled" @leave-cancelled="hohoLeaveCancelled">
        <p v-if="hohoIsVisible">HOHOHO!</p>
      </transition>
      <button @click="toggleHoho">Toggle Hoho!</button>
    </div>
    <div class="container">
      <transition name="something" mode="out-in">
        <button v-if="something === 1" @click="setSomething(2)">Something is 1</button>
        <button v-else-if="something === 2" @click="setSomething(3)">Something is 2</button>
        <button v-else @click="setSomething(1)">Something is 3</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue';

export default {
  components: {
    UsersList
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      hohoIsVisible: false,
      something: 1,
      hohoEnterInterval: null,
      hohoLeaveInterval: null,
    };
  },
  methods: {
    setSomething(value) {
      this.something = value;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    toggleHoho() {
      this.hohoIsVisible = !this.hohoIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hohoBeforeEnter(el) {
      console.log("beforeEnter");
      el.style.opacity = 0;
    },
    hohoEnter(el, done) {
      console.log("enter");
      let round = 0;
      this.hohoEnterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        if (el.style.opacity >= 1) {
          clearInterval(this.hohoEnterInterval);
          done();
        }
        round++;
      }, 20);
    },
    hohoAfterEnter(el) {
      console.log("afterEnter");
      el.style.opacity = 1;
    },
    hohoBeforeLeave(el) {
      console.log("beforeLeave");
      el.style.opacity = 1;
    },
    hohoLeave(el, done) {
      console.log("leave");
      let round = 100;
      this.hohoLeaveInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        if (el.style.opacity <= 0) {
          clearInterval(this.hohoLeaveInterval);
          done();
        }
        round--;
      }, 20);
    },
    hohoAfterLeave(el) {
      console.log("afterLeave");
      el.style.opacity = 0;
    },
    hohoEnterCancelled() {
      clearInterval(this.hohoEnterInterval);
    },
    hohoLeaveCancelled() {
      clearInterval(this.hohoLeaveInterval);
    }
  },
};
</script>

<style scoped>
.animate {
  animation: slide-over 0.7s ease-out forwards;
}

.something-enter-active {
  animation: fading 0.7s ease-out;
}

.something-leave-active {
  animation: fading 0.7s ease-in reverse;
}

@keyframes slide-over {
  70% {
    transform: translateX(-120px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes fading {
  from {
    transform: translateY(-30px) scale(0.8);
    opacity: 0;
  }

  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.para-enter-from,
.para-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.para-enter-active {
  transition: all 0.5s ease-out;
}

.para-leave-active {
  transition: all 0.5s ease-in;
}

.para-enter-to,
.para-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
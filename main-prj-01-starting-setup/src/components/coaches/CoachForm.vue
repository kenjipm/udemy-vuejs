<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName" :class="{invalid: !firstName.isValid}">First Name</label>
      <input type="text" id="firstName" v-model.trim="firstName.val" :class="{invalid: !firstName.isValid}"/>
      <p v-if="!firstName.isValid" class="invalid">First name must not be empty.</p>
    </div>
    <div class="form-control">
      <label for="lastName" :class="{invalid: !lastName.isValid}">Last Name</label>
      <input type="text" id="lastName" v-model.trim="lastName.val" :class="{invalid: !lastName.isValid}"/>
      <p v-if="!lastName.isValid" class="invalid">Last name must not be empty.</p>
    </div>
    <div class="form-control">
      <label for="description" :class="{invalid: !description.isValid}">Description</label>
      <textarea rows="5" id="description" v-model.trim="description.val" :class="{invalid: !description.isValid}"/>
      <p v-if="!description.isValid" class="invalid">Description must not be empty.</p>
    </div>
    <div class="form-control">
      <label for="rate" :class="{invalid: !rate.isValid}">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" :class="{invalid: !rate.isValid}" />
      <p v-if="!rate.isValid" class="invalid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control">
      <h3 :class="{invalid: !areas.isValid}">Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" />
        <label for="frontend" :class="{invalid: !areas.isValid}">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val" />
        <label for="backend" :class="{invalid: !areas.isValid}">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" />
        <label for="career" :class="{invalid: !areas.isValid}">Career Development</label>
      </div>
      <p v-if="!areas.isValid" class="invalid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!isFormValid" class="invalid">Please fix the above errors and submit again</p>
    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      rate: {
        val: 0,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      isFormValid: true,
    };
  },
  methods: {
    validateForm() {
      this.firstName.isValid = true;
      this.lastName.isValid = true;
      this.description.isValid = true;
      this.rate.isValid = true;
      this.areas.isValid = true;
      this.isFormValid = true;

      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }

      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }

      if (this.description.val === "") {
        this.description.isValid = false;
        this.isFormValid = false;
      }

      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isFormValid = false;
      }

      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit("data-submitted", formData);
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid {
  color: red;
}

input.invalid,
textarea.invalid {
  border: 1px solid red;
}
</style>
<template>
    <BaseCard>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="enteredTitle" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="enteredDescription"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="enteredLink" />
            </div>
            <BaseButton type="submit">Add Resource</BaseButton>
        </form>
    </BaseCard>
    <BaseDialog v-if="showErrorDialog" title="Invalid Input" @close="closeErrorDialog">
        <template #default>
            The input is invalid
        </template>
    </BaseDialog>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';
import BaseButton from '../ui/BaseButton.vue';
import BaseDialog from '../ui/BaseDialog.vue';

export default {
    components: {
        BaseCard, BaseButton, BaseDialog
    },
    inject: ['addResource'],
    computed: {
        isInputValid() {
            return this.enteredTitle.trim() !== '' && this.enteredDescription.trim() !== '' && this.enteredLink.trim() !== '';
        }
    },
    data() {
        return {
            enteredTitle: "",
            enteredDescription: "",
            enteredLink: "",
            showErrorDialog: false
        };
    },
    methods: {
        submitForm() {
            if (!this.isInputValid) {
                this.showErrorDialog = true;
                return;
            }
            this.addResource(this.enteredTitle, this.enteredDescription, this.enteredLink);
            this.enteredTitle = "";
            this.enteredDescription = "";
            this.enteredLink = "";
        },
        closeErrorDialog() {
            this.showErrorDialog = false;
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
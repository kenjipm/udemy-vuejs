<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('StoredResources')" :variant="storedResourcesVariant">Stored Resources
        </BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :variant="addResourceVariant">Add Resource</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="selectedTab" />
    </keep-alive>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseCard from '../ui/BaseCard.vue';
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
    components: {
        BaseButton, BaseCard, StoredResources, AddResource,
    },
    data() {
        return {
            selectedTab: "StoredResources",
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    computed: {
        storedResourcesVariant() {
            return this.selectedTab === "StoredResources" ? null : "flat"
        },
        addResourceVariant() {
            return this.selectedTab === "AddResource" ? null : "flat"
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title, description, link) {
            this.storedResources.push({
                id: `${Date.now()}_${title.toLowerCase().split(' ').join('-')}`,
                title: title,
                description: description,
                link: link
            });
            this.selectedTab = "StoredResources";
        },
        deleteResource(id) {
            // this.storedResources = this.storedResources.filter(resource => resource.id !== id); // this won't work because the memory is replaced
            const index = this.storedResources.findIndex(resource => resource.id === id);
            this.storedResources.splice(index, 1);
        }
    }
}
</script>

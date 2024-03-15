<template>
    <div class="grid md:grid-cols-[30%_70%] grid-cols-1 gap-4">
        <div>
            <img :src="image" alt="hero image" class="rounded-lg">
        </div>
        <div class="p-0">
            <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
            <div class="text-2xl text-gray-500 mb-10">{{ subtitle }}</div>
            <div class="text-justify">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    description: String
});

</script>
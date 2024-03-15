<template>
    <div class="grid md:grid-cols-[70%_30%] grid-cols-1 gap-4">
            <div>
                <div class="order-1 sm:order-2">
                    <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
                    <div class="text-xl text-gray-500 mb-10">{{ subtitle }}</div>
                </div>
            <div class="text-justify">
                {{ description }}
            </div>
        </div>
        <div class="order-2 sm:order-1">
            <img :src="image" alt="hero image" class="rounded-lg">
        </div>
    </div>
    <div class="mt-6 grid grid-cols-2 lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div v-for="(image, index) in images" :key="index" class="rounded flex items-center justify-center">
            <img :src="image.src" class="w-auto h-auto">
        </div>
    </div>
    <div class="mt-6">
        <a :href="'https://' + link" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 text-center font-bold bg-gray-300 rounded-xl hover:bg-gray-400 mr-10">{{ button }}</a>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    images: Array,
    subtitle: String,
    button: Array,
});

</script>
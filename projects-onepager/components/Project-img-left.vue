<template>
    <div class="grid md:grid-cols-[30%_70%] grid-cols-1 gap-4">
        <div>
            <img :src="image" alt="hero image" class="rounded-lg">
        </div>
        <div class="p-4">
            <h1 class="text-4xl font-bold mb-10">{{ title }}</h1>
            <div>
                {{ description }}
            </div>
            <div class="grid grid-cols-6 gap-4 items-center">
                <div v-for="(image, index) in images" :key="index" class="rounded justify-self-end ">
                    <img :src="image.src" class="w-full h-auto">
                </div>
            </div>
            <div class="mt-4 text-right">
                <a :href="'https://' + link" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 text-center font-bold bg-gray-200 rounded-xl hover:bg-gray-300 mr-10">Projekte</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    title: String,
    description: String,
    link: String,
    images: Array
});

</script>
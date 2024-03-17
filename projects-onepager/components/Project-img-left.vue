<template>
    <div class="shadow-md bg-[#F6F5F5] border-2 rounded-xl p-12 rounded">
        <div class="grid md:grid-cols-[30%_70%] grid-cols-1 gap-4">
            <div>
                <img :src="image" alt="hero image" class="rounded-lg bg-white p-10">
            </div>
            <div>
                <h1 class="text-4xl font-coding font-bold mb-2">{{ title }}</h1>
                <div class="text-xl text-gray-500 mb-10 font-coding">{{ subtitle }}</div>
                <div class="text-justify">
                    {{ description }}
                </div>

            </div>
        </div>
        <div class="mt-3 grid grid-cols-3 xl:grid-cols-14 lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-6 grid-cols-1 gap-4 items-center">
            <div v-for="(image, index) in images" :key="index" class="rounded flex items-center justify-center" :class="image.isSquare ? 'p-4' : ''">
                <img :src="image.src" class="w-auto h-auto">
            </div>
        </div>
        <div class="flex justify-start mt-3">
            <div v-for="(button, index) in buttons" :key="index" class="text-right">
                <a :href="button.link" target="_blank" rel="noopener noreferrer" class="bg-white rounded inline-block px-6 py-3 text-center font-bold bg-gray-300 rounded-xl hover:bg-gray-400 mr-4">{{ button.name }}</a>
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
    buttons: Array,
    images: Array,
    subtitle: String
});

</script>
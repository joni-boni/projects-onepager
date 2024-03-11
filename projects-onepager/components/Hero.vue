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
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    title: String,
    description: String
});

</script>
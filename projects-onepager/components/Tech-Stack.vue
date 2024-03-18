
<template>
    <div>
        <div class="bg-white max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
        transform transition-transform duration-500 hover:scale-110 h-full">
            <a class="flex justify-center border-b-2 py-2">
                <img class="rounded-t-lg size-36" :src="image" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="bg-[#F6F5F5] rounded mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-coding">{{title}}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
            </div>
            <div class="px-3 grid grid-cols-3 mb-3">
            <div v-for="(image, index) in images" :key="index" class="rounded flex items-center justify-center p-1" :class="image.isSquare ? 'p-3' : ''">
                <img :src="image.src" class="w-auto h-auto">
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    image: String,
    title: String,
    description: String,
    images: Array,
})

</script>

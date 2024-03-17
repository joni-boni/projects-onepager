
<template>
    <div>
        <div class="bg-white max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
        transform transition-transform duration-500 hover:scale-110 h-full">
            <a>
                <img class="rounded-t-lg p-10" :src="image" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="bg-[#F6F5F5] rounded mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-coding">{{title}}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    image: String,
    title: String,
    description: String
})

</script>

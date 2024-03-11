<template>
    <div class="flex flex-col mx-auto min-h-screen">
        <Header />
            <main class="mb-auto p-24">
                <slot />
            </main>
        <Footer />
    </div>
</template>

<script setup>

import Header from '~/components/navs/Header.vue';
import Footer from '~/components/navs/Footer.vue';

</script>
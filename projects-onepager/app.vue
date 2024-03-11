<template>
<NuxtLayout>
<NuxtPage />
</NuxtLayout>

</template>

<script setup>

import { initializeApp } from "firebase/app";
import {ref} from "vue";



const isOpen = ref(true);

const firebaseConfig = {

apiKey: "AIzaSyAZDL4eN3wG3T9O3mf4lWzbxxQeLfFziHY",

authDomain: "website-v3-43be4.firebaseapp.com",

projectId: "website-v3-43be4",

storageBucket: "website-v3-43be4.appspot.com",

messagingSenderId: "16954451050",

appId: "1:16954451050:web:223266326b5056fbf71613",

measurementId: "G-RGNYCQ3KQ4"

};
const app = initializeApp(firebaseConfig);

</script>

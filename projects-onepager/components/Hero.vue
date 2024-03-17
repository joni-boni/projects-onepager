<template>
    <div class="grid md:grid-cols-[30%_70%] grid-cols-1 gap-4">
        <div>
            <img :src="image" alt="hero image" class="rounded-lg">
        </div>
        <div class="p-0">
            <h1 class="text-4xl mb-4 font-coding typing">{{ animatedText }}</h1>
            <div >
              <div class="text-2xl text-[#0C359E] mb-10 font-coding typing2">{{ animatedText2 }}</div>
            </div>
            <div class="text-justify">
                {{ description }}
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    description: String
});


const text = props.title;
const animatedText = ref("");

const text2 = props.subtitle;
const animatedText2 = ref("");


onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    animatedText.value += text.charAt(index);
    index++;
    if (index === text.length) clearInterval(interval);
  }, 50);

  let index2 = 0;
  const interval2 = setInterval(() => {
    animatedText2.value += text2.charAt(index2);
    index2++;
    if (index2 === text.length) clearInterval(interval);
  }, 150); // Adjust the speed as needed
});

</script>

<style scoped>
.typing {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}
.typing2 {
  border-right: .15em solid black; /* Simulates the cursor */
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

/* Animation for the cursor */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}

.typing2 {
  animation: blink-caret 1.25s step-end infinite;
}
.typing {
  animation: blink-caret 1.25s step-end infinite;
}
</style>

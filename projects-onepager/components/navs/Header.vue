<template>
  <div class="bg-gradient-to-br from-slate-100 to-slate-200 p-4 flex flex-col p-4">
    <div class="flex space-x-4 ml-6">
      <div class="ml-4">
        <a href="#about" class="block text-center font-bold hover-effect mr-10">Me</a>
      </div>
      <div class="ml-4">
        <a href="#tech-stack" class="block text-center font-bold hover-effect mr-10">My Tech-Stack</a>
      </div>
      <div class="ml-4">
        <a href="#projects" class="block text-center font-bold hover-effect mr-10">And I (my projects..)</a>
      </div>
      <div class="ml-4">
        <a href="https://www.youtube.com/watch?v=msX4oAXpvUE&ab_channel=Splavodo69" target="_blank" rel="noopener noreferrer" class="block text-center font-bold hover-effect mr-10">Need a Break?</a>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
.hover-effect {
  position: relative;
}

.hover-effect::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #000000;
  bottom: 0;
  left: 50%;
  transition: all 0.2s ease;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}

.hover-effect:hover::after {
  width: 100%;
  left: 0;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
}
</style>
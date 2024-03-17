<template>
  <div class="shadow-lg bg-[#F6F5F5] border-dotted border-b-2 rounded border-[#0C359E] flex flex-col lg:p-2 xl:p-2 md:p-2 sm:p-0 text-[#0C359E]">
    <div class="flex space-x-4 p-2 ml-6">
      <div class="ml-2">
        <a href="#about" class="pb-1 text-center font-bold hover-effect lg:mr-12 xl:mr-12 md:mr-12 mr-3">Me</a>
      </div>
      <div class="ml-2">
        <a href="#tech-stack" class="pb-1 text-center font-bold hover-effect lg:mr-12 xl:mr-12 md:mr-12 mr-3">Tech-Stack</a>
      </div>
      <div class="ml-2">
        <a href="#projects" class="pb-1 text-center font-bold hover-effect lg:mr-12 xl:mr-12 md:mr-12 mr-3">Projects</a>
      </div>
      <div class="ml-2">
        <a href="https://www.youtube.com/watch?v=msX4oAXpvUE&ab_channel=Splavodo69" target="_blank" rel="noopener noreferrer" class="bg-white p-1 rounded text-center font-bold hover-effect lg:mr-12 xl:mr-12 md:mr-12 mr-3"> need a laugh?</a>
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
  background: #EE99C2;
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
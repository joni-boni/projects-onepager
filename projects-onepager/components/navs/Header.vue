<template>
  <div class="bg-gradient-to-br from-slate-100 to-slate-200 p-4 flex flex-col p-4">
    <div class="flex space-x-4 ml-6">
      <div class="ml-4">
        <a href="x" class="block text-center font-bold hover-effect mr-10">Über mich</a>
      </div>
      <div class="ml-4">
        <a href="x" class="block text-center font-bold hover-effect mr-10">Tech-Stack</a>
      </div>
      <div class="ml-4">
        <a href="x" class="block text-center font-bold hover-effect mr-10">Projekte</a>
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
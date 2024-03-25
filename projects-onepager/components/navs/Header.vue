<template>
  <div class="shadow-lg bg-[#F6F5F5] border-dotted border-b-2 rounded border-[#0C359E] flex flex-col lg:p-2 xl:p-2 md:p-2 sm:p-0 text-[#0C359E]">
    <div class="flex justify-between p-2 ml-6">
      <div class="flex space-x-4">
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
          <a href="https://www.youtube.com/watch?v=msX4oAXpvUE&ab_channel=Splavodo69" target="_blank" rel="noopener noreferrer" class="pb-1 rounded text-center font-bold hover-effect lg:mr-12 xl:mr-12 md:mr-12 mr-3"> smile?</a>
        </div>
      </div>
      <div class="flex">
        <a href="mailto:jgreis@databundles.de">
           <img class="rounded-t-lg size-8" src="/header/email.svg" alt="mail icon" />
        </a>
        <a href="https://www.linkedin.com/in/jonas-greis-6b4730186/">
           <img class="rounded-t-lg size-8" src="/header/linkedin.svg" alt="mail icon" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
.hover-effect {
  position: relative;
  transition: all 10s ease; /* Ensure the transition applies to transform changes */
  display: inline-block; /* or 'block', depending on your layout */
  overflow: hidden; /* Keeps child elements contained within the parent */
}

.hover-effect:hover {
  background-color: white;
  transform: scaleX(1); /* Scales the element to its full width */
}

.hover-effect::before { /* Using ::before for the scaling effect */
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white; /* The background color you want to show on hover */
  transform: scaleX(0); /* Start scaled to 0 (invisible) */
  transition: transform 0.3s ease; /* Smooth transition for the transform */
  left: 0;
  top: 0;
  z-index: -1;
}

.hover-effect:hover::before {
  transform: scaleX(1); /* Scale to full width on hover */
}

</style>
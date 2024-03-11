<template>
    <div class = "mb-20">
        <Hero 
        image="developer.png" 
        title="Your Name"
        description="Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. "
        />
    </div>
    <div>
        <h2 class="text-4xl font-bold mb-10 text-left">Tech Stack</h2>
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
        <Tech-Stack image="/frontend.png" title="Frontend" description="language 1, language 2, language 3" />
        <Tech-Stack image="/backend.png" title="Backend" description="language 1, language 2, language 3" />
        <Tech-Stack image="/etc.png" title="Other Stuff" description="docker etc....." />
    </div>
    <div>
        <h2 class="text-4xl font-bold mb-24 mt-36 text-left">Projects</h2>
    </div>

    <div class="mt-24 mb-24">
        <project-img-left 
            image="/project.png"
            title="Sample Project" 
            description="Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed."
            link="www.google.com"
            tech-stack=""
            :images=images
        />
    </div>

    <div class="mt-24 mb-24">
        <project-img-right 
            image="/project.png"
            title="Sample Project" 
            description="Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed."
            link="www.google.com"
            tech-stack=""
            :images=images
        />
    </div>

    <div class="mt-24 mb-24">
        <project-img-left 
            image="/project.png"
            title="Sample Project" 
            description="Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed."
            link="www.google.com"
            tech-stack=""
            :images=images
        />
    </div>

    <div class="mt-24 mb-24">
        <project-img-right 
            image="/project.png"
            title="Sample Project" 
            description="Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed."
            link="www.google.com"
            tech-stack=""
            :images=images
        />
    </div>
</template>

<script setup>
const images = [
    {src: "https://rock-the-prototype.com/wp-content/uploads/2022/01/Nuxt_JavaScript_Framework.jpg"},
    {src: "https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png"},
    {src: "https://rock-the-prototype.com/wp-content/uploads/2022/01/Nuxt_JavaScript_Framework.jpg"},
    {src: "https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png"},
]
</script>
<template>
    <div id="about" class="mb-20">
      <Hero
        image="developer.jpeg"
        title="Jonas Greis"
        subtitle="Full Stack Developer"
        description="I am a full stack developer with a focus on frontend development. I am passionate about creating beautiful and user-friendly web applications. I am also interested in data science and have experience in creating data science applications and dashboards. I am always eager to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects. Feel free to contact me if you are interested in working with me."
      />
    </div>
    <div id="tech-stack">
      <h2 class="text-4xl font-bold mb-10 text-left">Tech Stack</h2>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-8">
      <Tech-Stack
        image="/frontend.webp"
        title="Frontend"
        description="Nuxt, Vue, JavaScript, Tailwind, HTML"
      />
      <Tech-Stack
        image="/backend.webp"
        title="Backend"
        description="Laravel, PHP"
      />
      <Tech-Stack
        image="/datascience2.webp"
        title="Data Science"
        description="R, R-Shiny, R-Studio, Python"
      />
      <Tech-Stack
        image="/etc2.webp"
        title="Other Stuff"
        description="Docker, Hetzner, MySQL, Cypress, RESTful API, Chroma DB, Forge"
      />
    </div>
    <div id="projects">
      <h2 class="text-4xl font-bold mb-24 mt-36 text-left">Project Selection</h2>
    </div>
  
    <div class="mt-24 mb-36">
      <project-img-left
        image="/project.png"
        title="Customer Portal"
        subtitle="A customer portal for a cash register system specialized on sport facilities."
        description="Full-Stack Web Application built on top of an existing cash register.
              The customer portal allows customers to register upon their first visit via a QR code.
              The gym owners have their own login an can manage the customers and get detailed statistics and evaluation of sold tickets and products. 
              The backend is built with Laravel and the frontend with Nuxt.js. 
              The application is hosted on a Hetzner server and uses a MySQL database, 
              tested with Cypress and the API is documented with Swagger. 
              The application is deployed with Laravel Forge via a Docker container.
              This project was built by my Co-Founder and me over the course of eight Months and is currently in use at more than 200 gyms.
              Bellow you can see a demo in a more compact version based on the original project. Username: demo@user.de, Password: linkedin."
        :buttons="customerportalButtons"
        :images="customerportalImages"
      />
    </div>
  
    <div class="mt-24 mb-36">
      <project-img-left
        image="/project.png"
        title="Reporting Dashboard"
        subtitle="Reporting Dashboard for a car sharing company focusing on geospacial data."
        description="A Frontend application that shows the data of the logged in car sharing company in a user-friendly and interactive graphs and maps.
              The application is built with Nuxt.js and uses the Leaflet library for the maps.
              The data is pulled via RESTful API from the preexisting backend.
              This project was built by my Co-Founder and me over the course of six months.
              The application is currently in use at more than 30 car sharing companies."
        link="www.google.com"
        :buttons="carsharingButtons"
        :images="carsharingImages"
      />
    </div>
  
    <div class="mt-24 mb-36">
      <project-img-left
        image="/project.png"
        title="Münster GPT"
        subtitle="A Chatbot that answers questions about the city of Münster."
        description="The Chatbot was built during the MSHACK23, and as part of the solution enabler program an ongoing project, that my team and I are working on. 
              The Chatbot is connected to OpenAI's GPT-4 API and is built in Python.
              It uses a Chroma DB that again stores the data we scraped from the publicly available city website. 
              The project won 2nd Place at the Hackathon.
              A test version of the Chatbot will most likley be available in June 2023."
        :buttons="gptButtons"
        tech-stack=""
        :images="gptImages"
      />
    </div>
  
    <div class="mt-24 mb-36">
      <project-img-left
        image="/project.png"
        title="Bikecounter"
        subtitle="Small Proof-of-Concept for publicly available bike data"
        description="A small R-Shiny application that shows the data of a publicly available bike data (csv) in user-friendly and interactive graphs and maps.
              This was Mini-Project I built for fun over the Weekend.
              The application is built in R-Shiny hosted on a Google Cloud Run and uses a Docker container.
              As of my knowledge, the application ist still presented in University lectures as an example for the easy usage of Opendata."
        :buttons= "bikeButtons"
        :images="fahrradzaehlerImages"
      />
    </div>
  
    <div class="mt-24 mb-36">
      <project-img-left
        image="/project.png"
        title="Data Science Analysis and Forecasting"
        description="During my University Studies as well as working at the DFKI I did multiple Data Science Projects.
              They all included the cleaning and analysis of large datasets to look for correlations, trends and outliers.
              A few projects involved forecasting Models.
              The projects Data Science projects were built in R and Python and also used R-Shiny for the visualization of the results.
              Below you can see a few university projects, since the DFKI projects are not publicly available."
        :buttons="dataScienceButtons"
        :images="dataScienceImages"
        />
    </div>
  </template>
  
  <script setup>
  const customerportalImages = [
    { src: "/logos/nuxt.png" },
    { 
      src: "/logos/javascript.png",
      isSquare: 1 
    },
    { src: "/logos/vue.png" },
    { src: "/logos/php.png" },
    { src: "/logos/laravel.png" },
    { src: "/logos/mysql.svg" },
    { src: "/logos/docker.png" },
    { src: "/logos/swagger.png" },
    { src: "/logos/forge.png" },
    { src: "/logos/tailwind.png" },
    { src: "/logos/hetzner.png" },
    { src: "/logos/html.png" },
  ];
  
  const customerportalButtons = [
    {
      name: "Demo",
      link: "https://demo.databundles.io",
    },
  ];
  
  const carsharingImages = [
    { src: "/logos/nuxt.png" },
    { 
      src: "/logos/javascript.png",
      isSquare: 1 
    },
    { src: "/logos/vue.png" },
    { src: "/logos/docker.png" },
    { src: "/logos/leaflet.png" },
    { src: "/logos/tailwind.png" },
    { src: "/logos/html.png"},
  ];
  
  const carsharingButtons = [
    {
      name: "Reporting Dashboard",
      link: "www.google.com",
    },
  ];
  
  const gptImages = [
    { src: "/logos/python.png" },
    { src: "/logos/chroma.svg" },
    { src: "/logos/docker.png" },
    { src: "/logos/openai.png" },
  ];
  
  const gptButtons = [
    {
      name: "Hackathon Website",
      link: "https://www.muensterhack.de/",
    },
  ];
  
  const fahrradzaehlerImages = [
    { 
      src: "/logos/r.png",
      isSquare: 1 
    },  { 
      src: "/logos/shiny.png",
      isSquare: 1 
    },
    { src: "/logos/rstudio.png" },
    { src: "/logos/docker.png" },
    { src: "/logos/ggcloud.png" },
  ];
  
  const bikeButtons = [
    {
      name: "Bikecounter",
      link: "bike-app-5mlqyiifqa-ey.a.run.app",
    },
  ];
  
  const dataScienceImages = [
    { 
      src: "/logos/r.png",
      isSquare: 1 
    },
    { src: "/logos/python.png" },
    { 
      src: "/logos/shiny.png",
      isSquare: 1 
    },
    { src: "/logos/rstudio.png" },
  ];
  const dataScienceButtons = [
    {
      name: "Twitter Analysis",
      link: "projects/twitter.html",
    },
    {
      name: "Impact of GDP on drug consumption",
      link: "projects/smoking.html",
    },
  ];
  </script>
  
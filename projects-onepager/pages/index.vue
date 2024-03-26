<template>
  <div id="about" class="mb-20">
    <Hero
      image="developer.jpeg"
      title="Jonas Greis"
      subtitle="Full Stack Developer"
      description=
      "I am a full stack developer with a focus on frontend development. 
      I am passionate about creating sleek and user-friendly web applications. 
      I also have a background in data science and have worked on machine learning and AI projects. 
      The broad majority of my projects are built in Laravel and Nuxt.js, but I have used quite a few other technologies as well during my career. 
      I am always eager to learn new technologies and improve my skills. Feel free to contact me."
    />
  </div>
  <div id="tech-stack" class="bg-[#EE99C2] p-4 rounded-t-xl shadow-lg mb-2">
      <div class="bg-white rounded-lg inline-block px-4 text-center py-4">
          <h2 class="text-[#0C359E] text-3xl mb-0 font-coding">
            &lt;Tech Stack&gt;
          </h2>
      </div>
  </div>

  <div class=" delay-150 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mb-32">
    <Tech-Stack
      image="tech-stack/frontend.svg"
      title="Frontend"
      description="Nuxt, Vue, JavaScript, Tailwind, HTML"
      :images=frontendImages
    />
    <Tech-Stack
      image="tech-stack/backend.svg"
      title="Backend"
      description="Laravel, PHP, Django"
      :images=backendImages
    />
    <Tech-Stack
      image="tech-stack/data-science.svg"
      title="Data Science"
      description="R, R-Shiny, R-Studio, Python, Scikit-Learn, Pandas, Plotly, Leaflet"
      :images=dataImages
    />
    <Tech-Stack
      image="tech-stack/database.svg"
      title="Database"
      description="MySQL, MariaDB, PostgreSQL, Chroma DB"
      :images=databaseImages
    />
    <Tech-Stack
      image="tech-stack/cloud.svg"
      title="Cloud"
      description="Hetzner, Forge, Google Cloud Run, Firebase"
      :images=cloudImages
    />
    <Tech-Stack
      image="tech-stack/etc.svg"
      title="Other Stuff"
      description="Docker, RESTful API, OpenAI API, Swagger, Cypress, CI/CD, Git"
      :images=etcImages
    />
  </div>
  <div id="projects" class="bg-[#EE99C2] p-4 rounded-t-xl mb-2 shadow-lg">
      <div class="bg-white rounded-lg inline-block px-4 text-center py-4">
          <h2 class="text-[#0C359E] text-3xl mb-0 font-coding">
            &lt;Project selection&gt;
          </h2>
      </div>
  </div>

  <div class="mt-2 mb-36">
    <project-img-left
      image="/project-images/customer-portal2.svg"
      title="Customer Portal"
      subtitle="A customer portal for a cash register system, specialized in sport facilities."
      description=
      "This is a full-stack web application built on top of an existing cash register. 
      The customer portal enables customers to register upon their first visit via a QR code. 
      Gym owners have their own login and can manage customers, obtaining detailed statistics and evaluations of sold tickets and products. 
      The backend is developed with Laravel, while the frontend utilizes Nuxt.js. 
      The application is hosted on a Hetzner server, leveraging a MySQL database, and is tested with Cypress. 
      Furthermore, the API is documented with Swagger, and the application deployment is managed with Laravel Forge via a Docker container. This project was co-developed by my co-founder and me over the course of eight months and is currently in use at more than 200 gyms. Below, you can see a demo in a more compact version based on the original project. Username: demo@user.de, Password: linkedin."
      :buttons="customerportalButtons"
      :images="customerportalImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/mobility-dashboard.svg"
      title="Mobility Dashboard"
      subtitle="A reporting dashboard for a car-sharing company, focusing on geospatial data."
      description=
      "This frontend application displays data for the logged-in car-sharing company through user-friendly and interactive graphs and maps. 
      Built with Nuxt.js, it incorporates the Leaflet library for map visualization. 
      Data is pulled via a RESTful API from the preexisting backend. 
      This project was co-developed by my co-founder and me over six months and is currently deployed across more than 30 car-sharing companies."
      :images="carsharingImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/muenster-gpt.svg"
      title="Münster GPT"
      subtitle="A chatbot designed to answer questions about the city of Münster."
      description=
      "Münster GPT was developed during the MSHACK23 and is now part of the Solution Enabler Program. 
      This ongoing project, a collaborative effort by my team and me, connects to OpenAI's GPT-4 API and is developed in Python using Django. 
      It utilizes a Chroma DB to store data scraped from the publicly available city website. 
      Our project was awarded 2nd place at the hackathon. 
      A test version of the chatbot is expected to be available by June 2023. 
      We invite you to visit the website to learn more about ours and other projects."
      :buttons="gptButtons"
      tech-stack=""
      :images="gptImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/bike-counter2.svg"
      title="Bikecounter"
      subtitle="A small proof-of-concept showcasing publicly available bike data."
      description=
      "The Bikecounter is an R-Shiny application that presents data through user-friendly and interactive graphs and maps. 
      I developed this mini-project for fun over a weekend. The application, built with R-Shiny, is hosted on Google Cloud Run using a Docker container. 
      To my knowledge, the application is still used in university lectures as an exemplary demonstration of the straightforward utilization of open data."
      :buttons= "bikeButtons"
      :images="fahrradzaehlerImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/data-science.svg"
      title="Data Science Analysis and Forecasting"
      description="During my university studies and my time at the DFKI (German Research Center for Artificial Intelligence), 
      I engaged in multiple data science projects. These projects included the cleaning and analysis of large datasets to identify correlations,
       trends, and outliers. Several projects also involved developing forecasting models. 
       The work was primarily conducted using R and Python, incorporating R-Shiny for result visualization. 
       Below, I have listed a few university projects for review, and one DFKI publication."
      :buttons="dataScienceButtons"
      :images="dataScienceImages"
      />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/website.svg"
      title="Company Website"
      subtitle="A fast and modern company website using SEO, SEA and Google analytics"
      description=
      "This Website was built using Nuxt, hosted on a Hetzner server and is meticulously optimized for both SEO and SEA, 
      ensuring high visibility and performance. 
      My co-founder and I collaboratively developed the website, 
      continuously updating it with new features and content to keep it fresh and engaging."
      :buttons="WebsiteButtons"
      :images="WebsiteImages"
      />
  </div>


</template>

<script setup>
useHead({
  title: 'Jonas Greis',
})

const frontendImages = [
  { src: "/logos/nuxt.png" },
  { 
    src: "/logos/javascript.png",
    isSquare: 1 
  },
  { src: "/logos/vue.png" },
  { src: "/logos/tailwind.png" },
  { src: "/logos/html.png" },
];
const backendImages = [
  { src: "/logos/php.png" },
  { src: "/logos/laravel.png" },
  { src: "/logos/django.png" },
];
const dataImages = [
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
  { src: "/logos/pandas.png" },
  { src: "/logos/plotly.png" },
  { src: "/logos/scikit-learn.png" },

];
const etcImages = [
    { src: "/logos/docker.png" },
    { src: "/logos/swagger.png" },
    { src: "/logos/cypress.svg"},
    { src: "/logos/openai.png"},
    { src: "/logos/restapi.webp",
    isSquare: 1 
    },
    { src: "/logos/git.png"},
];
const cloudImages = [
    { src: "/logos/forge.png" },
    { src: "/logos/hetzner.png" },
    { src: "/logos/ggcloud.png" },
    { src: "/logos/firebase.png"},
];

const databaseImages = [
    { src: "/logos/chroma.svg" },
    { src: "/logos/mysql.svg" },
    { src: "/logos/mariadb.png"},
    { src: "/logos/postgresql.png"},
];

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
  { src: "/logos/cypress.svg"}

];

const customerportalButtons = [
  {
    name: "Demo",
    link: "https://demo.databundles.io",
  }
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
  { src: "/logos/restapi.webp",
    isSquare: 1 
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
    link: "https://bike-app-5mlqyiifqa-ey.a.run.app",
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
  { src: "/logos/pandas.png" },
  { src: "/logos/scikit-learn.png" },
  { src: "/logos/plotly.png" },

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
  {
    name: "DFKI Research Paper",
    link: "https://www.dfki.de/fileadmin/user_upload/DFKI/Medien/News/2022/Aus_unseren_Projekten/Smart-Service-Studie-ForeSight_web.pdf",
    tooltip: "All graphs in this Paper were created by me."
  }
];

const WebsiteImages = [
  { src: "/logos/nuxt.png" },
  { 
    src: "/logos/javascript.png",
    isSquare: 1 
  },
  { src: "/logos/vue.png" },
  { src: "/logos/docker.png" },
  { src: "/logos/tailwind.png" },
  { src: "/logos/html.png"},
  { src: "logos/hetzner.png"},
  { src: "logos/google-analytics.png"},
  { src: "logos/firebase.png"},

];
const WebsiteButtons = [
{
    name: "Databundles Website",
    link: "https://databundles.io/",
  },
];

</script>
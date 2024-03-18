<template>
  <div id="about" class="mb-20">
    <Hero
      image="developer.jpeg"
      title="Jonas Greis"
      subtitle="Full Stack Developer"
      description="I am a full stack developer with a focus on frontend development. I am passionate about creating beautiful and user-friendly web applications. I am also interested in data science and have experience in creating data science applications and dashboards. I am always eager to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects. Feel free to contact me if you are interested in working with me."
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
      image="tech-stack/etc.svg"
      title="Other Stuff"
      description="Docker, Hetzner, RESTful API, Chroma DB, Forge, GCP, Firebase, OpenAI API, Swagger, Cypress, CI/CD, Git"
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
      image="/project-images/mobility-dashboard.svg"
      title="Mobility Dashboard"
      subtitle="Reporting Dashboard for a car sharing company focusing on geospacial data."
      description="A Frontend application that shows the data of the logged in car sharing company in a user-friendly and interactive graphs and maps.
            The application is built with Nuxt.js and uses the Leaflet library for the maps.
            The data is pulled via RESTful API from the preexisting backend.
            This project was built by my Co-Founder and me over the course of six months.
            The application is currently in use at more than 30 car sharing companies."
      :images="carsharingImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/muenster-gpt.svg"
      title="Münster GPT"
      subtitle="A Chatbot that answers questions about the city of Münster."
      description="The Chatbot was built during the MSHACK23, and as part of the solution enabler program an ongoing project, that my team and I are working on. 
            The Chatbot is connected to OpenAI's GPT-4 API and is built in Python using Django.
            It uses a Chroma DB that again stores the data we scraped from the publicly available city website. 
            The project won 2nd Place at the Hackathon. 
            A test version of the Chatbot will most likley be available in June 2023. 
            Feel free to go to the website and checkout our 2nd place"
      :buttons="gptButtons"
      tech-stack=""
      :images="gptImages"
    />
  </div>

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/bike-counter2.svg"
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
      image="/project-images/data-science.svg"
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

  <div class="mt-24 mb-36">
    <project-img-left
      image="/project-images/website.svg"
      title="Company Website"
      subtitle="A fast and modern company website using SEO, SEA and Google analytics"
      description="The Website is built in nuxt and is hostet on a Hetzner server. 
            The website is optimized for SEO and SEA and uses Google Analytics for tracking. 
            My Co-Founder and I built the Website together and constantly updated it with new features and content."
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
    { src: "/logos/forge.png" },
    { src: "/logos/hetzner.png" },
    { src: "/logos/ggcloud.png" },
    { src: "/logos/cypress.svg"},
    { src: "/logos/firebase.png"},
    { src: "/logos/openai.png"},
    { src: "/logos/restapi.webp",
    isSquare: 1 
    },
    { src: "/logos/git.png"},
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
<template>
  <div class="purple-theme thicccboi-font">
    <div class="content-wrapper">
      <Header />
      <Hero />
      <section class="wrapper bg-light">
        <div class="container">
          <About />
          <Facts />
        </div>
        <Projects />
      </section>
      <section class="wrapper bg-light">
        <div class="container pb-8 pb-lg-10">
          <Features />
          <Faq />
          <Testimonials />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Hero from "@/components/ezzy/Hero.vue";
import Header from "@/components/ezzy/Header.vue";
import About from "@/components/ezzy/About.vue";
import Facts from "@/components/ezzy/Facts.vue";
import Projects from "@/components/ezzy/Projects.vue";
import Features from "@/components/ezzy/Features.vue";
import Faq from "@/components/ezzy/Faq.vue";
import Testimonials from "@/components/ezzy/Testimonials.vue";
import Footer from "@/components/ezzy/Footer.vue";
</script>

<style lang="scss" scoped></style>

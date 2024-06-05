<template>
  <div class="onepage">
    <div class="content-wrapper">
      <HeaderV2 />
      <Home />
      <Services />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup>

import Home from "@/components/onepage/Home.vue";
import Services from "@/components/onepage/Services.vue";
import Contact from "@/components/onepage/Contact.vue";
import Footer from "@/components/ezzy/Footer.vue";
import HeaderV2 from "@/components/ezzy/contact/HeaderV2.vue";
</script>

<style lang="scss" scoped></style>

<template>
  <header class="wrapper bg-gray ">
    <nav
        :class="`navbar navbar-expand-lg center-logo transparent navbar-light  ${
        addClass2 ? 'fixed navbar-clone' : ''
      } ${
        addClass ? 'navbar-clone navbar-stick navbar-light' : ' navbar-unstick'
      } `"
    >
      <div class="container">
        <div
          class="navbar-collapse-wrapper py-2 d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center"
        >
          <div class="navbar-brand w-100">
            <router-link to="/">
              <img
                  src="/logo.png"
                  srcset="/logo.png 2x"
                  width="150"
                  height="58"
                alt="photo"
              />
            </router-link>
          </div>

          <!-- /.navbar-collapse -->

          <!-- /.navbar-other -->
        </div>
        <!-- /.navbar-collapse-wrapper -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";


const menuOpen = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").style.display = "block";
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
};

const menuClose = () => {
  document.getElementById("ofCanvasBody").classList.toggle("show");
  document.getElementById("offcanvasBackdrop").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("offcanvasBackdrop").style.display = "none";
  }, 300);
};

const addClass = ref(false);
const addClass2 = ref(false);

const handleScroll = () => {
  addClass2.value = window.scrollY >= 200;
  addClass.value = window.scrollY >= 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>

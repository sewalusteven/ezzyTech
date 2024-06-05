<template>
  <footer class="bg-gradient-reverse-primary">
    <div class="container pt-2 pb-2">
      <!--/.card -->
      <!--/.row -->
      <hr class="mt-5 mt-md-5 mb-5" />
      <div class="d-md-flex align-items-center justify-content-between">
        <p class="mb-2 mb-lg-0">
          © {{ new Date().getFullYear() }} EzzyTech. All rights reserved.
        </p>

        <!-- /.social -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>

<script setup>
import CommonScrolltop from "@/components/ezzy/components/Scrolltop.vue";
</script>

<style lang="scss" scoped></style>

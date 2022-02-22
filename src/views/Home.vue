<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header">
          <div class="teks">Bestie Style <br> is <strong>HERE</strong>!</div>
          <img src="https://www.binaroom.id/img/HOME-INTRO-3.086a174e.png">
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import NewArrival from '../components/NewArrival.vue'
export default {
  components: {
    NewArrival,
  }
}
</script>

<style scoped>
.header {
  position: relative;
}
.header .teks {
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 10vh;
  text-align: left;
}
</style>
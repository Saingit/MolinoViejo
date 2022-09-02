<template>
  <b-row align-h="center" >
    
    <b-col cols="12" lg="8" >
      <img
              src="recursos/img/hojas3.png"
              class="img-fluid w-25 position-absolute"
              alt=""
            />
      <b-navbar fixed="top" toggleable="lg" class="bgnav text-center shadow">
        <b-row class="">
          <b-col cols="12">
            <router-link to="/">
                <img
              src="recursos/img/logo.jpeg"
              class="img-fluid w-25 rounded border shadow"
              alt="Logo"
            />
            </router-link>    
          </b-col>
          <div class="col-12 col-lg-10">
          </div>
        </b-row>
        
        <div class="pr-lg-5">
          <b-nav>
            <b-nav-item active>
              <router-link to="/" class="text-white">Inicio</router-link>
            </b-nav-item>
            <!-- <b-nav-item>
              <router-link to="/Planes" class="text-white">Planes</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/Quienes" class="text-white"
                >Quienes somos</router-link
              >
            </b-nav-item> -->
          </b-nav>
        </div>
        <p class="text-white text-right"><small>Llámanos (604) 5579961, 315 331 48 20 - 315 381 49 65</small></p>
        <p class="text-white ml-5">
          +RNT - 50567
        </p>
      </b-navbar>
    
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Nav",
};
</script>
<template>
  <b-container fluid class="mt-5 mx-0 p-0">
    <b-row class="m-0 p-0">
      <b-col class="bg-danger m-0 p-0" cols="12" lg="12">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
          img-width="1920" img-height="600" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
          <!-- Text slides with image -->
          <b-carousel-slide img-src="recursos/img/Amplias Zonas de Camping.png"></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="recursos/img/Zonas Humedas.png"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/ZonaEco.png">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <!-- <b-carousel-slide img-src="recursos/img/zonapethome.png"></b-carousel-slide> -->

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col lg="3" class=""><img src="recursos/img/hojas3.png" class="img-fluid mt-n5" alt="Hojas" />
      </b-col>
      <b-col cols="12" lg="6" class="text-center p-5">

        <iframe width="100%" height="399" src="https://www.youtube.com/embed/_RCqT7XDEE4"
          title="CENTRO RECREATIVO MOLINO VIEJO" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

      </b-col>
      <b-col lg="3" class="">
        <img src="recursos/img/hojas4.png" class="img-fluid mt-n5" alt="Hojas" />
      </b-col>
    </b-row>

    <div class="row row-cols-1 row-cols-md-2 p-5">
      <b-col cols="12" lg="12">
        <h2 class="text-center p-3">Planes</h2>
      </b-col>
      <div class="col mb-4">
        <div class="card">
          <img src="recursos/img/p-diasol.jpg" class="card-img-top" alt="Día de sol" />
          <div class="card-body">
            <h5 class="card-title text-center">DÍA DE SOL</h5>
            <p class="card-text">
              <strong>$ 60.000</strong> por persona le incluye desayuno almuerzo y refrigerio,
              ingreso a la piscina. Nota: No se permite el ingreso de mascotas a
              la piscina y zona de comidas. <br>

              <strong>Con habitación: $170.000</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="recursos/img/pcampin.jpg" class="card-img-top" alt="CAMPING" />
          <div class="card-body">
            <h5 class="card-title text-center">CAMPING</h5>
            <p class="card-text">
              <strong>$ 25.000</strong> sin alimentación por persona <br />
              <strong>$ 65.000</strong> con alimentación por persona le incluye desayuno almuerzo
              y cena. <br />
              <strong> Nota:</strong> En los 2 planes deben de traer las carpas
            </p>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card">
          <img src="recursos/img/p-alojamiento.jpg" class="card-img-top" alt="PLAN ALOJAMIENTO" />
          <div class="card-body">
            <h5 class="card-title text-center">ALOJAMIENTO</h5>
            <p class="card-text">
              <strong>$ 145.000 </strong> por persona con alimentación, niños menores de 5 años son
              gratis sin alimentación y niños de 6 años hasta los 8 años <strong>$ 50.000</strong> ,
              sin alimentación solo alojamiento
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-2 p-5 justify-content-center">
      <div class="col col-lg-4 mb-4">
        <div class="card">
          <img src="recursos/img/p-romantico.jpg" class="card-img-top" alt="PLAN ROMÁNTICO" />
          <div class="card-body">
            <h5 class="card-title text-center">PLAN ROMÁNTICO</h5>
            <p class="card-text">
              <strong>$ 360.000</strong> por pareja
            </p>
          </div>
        </div>
      </div>
      <div class="col col-lg-4 mb-4">
        <div class="card">
          <img src="recursos/img/img-cumple-home.png" class="card-img-top" alt="CUMPLEAÑOS" />
          <div class="card-body">
            <h5 class="card-title text-center">CUMPLEAÑOS</h5>
            <p class="card-text">
              <strong>$ 360.000</strong> por pareja
            </p>
          </div>
        </div>
      </div>

      <div class="col col-lg-4 mb-4">
        <div class="card">
          <div class="card-body p-2">
            
            <h5 class="text-center">Nota:</h5>
            <p>
              - El ingreso a la piscina es de <strong>$:15000</strong> por persona, solo los niños
              menores de 5 años son gratis <br />
              - El ingreso a los charcos y zonas verdes es de <strong>$:7000</strong> por persona,
              solo los niños menores de 5 años son gratis
            </p>
          </div>
        </div>
      </div>
    </div>

    <b-row class="justify-content-center pb-5">
      <b-col cols="12" class="text-center "><img src="../../public/recursos/img/ZonaPet.png" alt="" class="img-fluid"></b-col>
    </b-row>

    <b-row class="justify-content-center bghojas">

      <b-col cols="12" lg="6" class="text-center p-5"><iframe width="100%" height="399"
          src="https://www.youtube.com/embed/wNosGKk6oyw" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe></b-col>


      <b-col cols="12" lg="6" class="text-center p-5">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
          img-width="1920" img-height="600" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
          <!-- Text slides with image -->
          <b-carousel-slide img-src="recursos/img/nov20193-b4f93650d9.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov20194-b4f93650d9.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov20195-b4f93650d9.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov20196-b4f93650d9.jpeg"></b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="recursos/img/nov20197-b4f93650d9.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov20198-b4f93650d9.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov20199-f9255e5d42.jpeg"></b-carousel-slide>
          <b-carousel-slide img-src="recursos/img/nov201910-42adbfd27f.jpeg"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        </b-carousel>
      </b-col>
    </b-row>
    
    <b-row class="m-0 p-0 bg-footer">
      <img src="recursos/img/bg-footer-img.png" class="w-100 mt-n4" alt="">
      <b-row>
      <b-col>
        <img src="../../public/recursos/img/Molino.png" class="img-fluid" alt="">
      </b-col>
    </b-row>
      <b-col cols="12" lg="6" class="m-0 p-0">
        <footer class="footer text-left text-white p-5 m-0">
          <h5 class="text-left text-white">
            Molino Viejo <br />
            Centro Recreativo / Hostería
          </h5>
          <p class="text-white">
            15 minutos después de Barbosa por la carretera vieja vía a
            Cisneros.
          </p>
          <b-row>
            <b-col cols="12" lg="6">
              <p class="text-white">
                <strong>Linea telefónicas:</strong>
                <br />
                (604) 557 99 61 <br />
                315 331 48 20 <br />
                315 381 49 65<br />
              </p>
            </b-col>
            <b-col cols="12" lg="6">
              <p class="text-white">
                <strong>E-mails:</strong> molinoviejo2@gmail.com <br />
                javierhumbertoot@hotmail.com <br />
                stella0224@hotmail.com <br />
              </p>
            </b-col>
            <b-col cols="12">
              <h5 class="text-white">
                <strong>+RNT - 50567</strong> <br />
                Barbosa - Antioquia
              </h5>
            </b-col>
          </b-row>
        </footer>
      </b-col>
      <b-col col="12" lg="3" align-self="center" class="text-center">
        <a href="https://goo.gl/maps/YK3H3rFFPNXpQYTy8" target="_blank">
          <img src="recursos/img/img-mapa-foo.jpg" class="img-fluid rounded" alt="Logo" />
        </a>
        <p class="text-white">HAZ CLICK AQUÍ Y UBÍCANOS</p>
      </b-col>
      <b-col col="12" lg="3" align-self="center" class="text-center">
        <div class="row justify-content-center align-items-center border1 rounded p-3">
          <div class="col-12 col-lg-2">
            <a href="https://www.instagram.com/molinoviejo.centrorecreativo/" target="_blank" class="m-2 p-2">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
          <div class="col-12 col-lg-2">
            <a href="https://www.facebook.com/molinoviejocentrorecreativo" target="_blank" class="m-2 p-2"> <i
                class="fa fa-facebook"></i></a>
          </div>
        </div>

        <p class="text-white">VISITA TAMBIÉN NUESTRAS REDES SOCIALES</p>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>
export default {
  mounted() {
    document.title = "Molino Viejo - Centro Recreativo"
  }
};
</script>
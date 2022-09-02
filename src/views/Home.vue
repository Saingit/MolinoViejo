<template>
  <b-container fluid class="mt-5 mx-0 p-0">
    <b-row class="m-0 p-0">
      <b-col class="bg-danger m-0 p-0" cols="12" lg="12">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
          img-width="1920" img-height="600" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">
          <!-- Text slides with image -->
          <b-carousel-slide img-src="recursos/img/slide-campin.jpg"></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="recursos/img/slide-humedas.jpg">
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="recursos/img/zonapethome.png"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col lg="3" class=""><img src="recursos/img/hojas3.png" class="img-fluid mt-n5" alt="Hojas" />
      </b-col>
      <b-col cols="12" lg="6" class="text-center p-5">

        <iframe width="100%" height="399" src="https://www.youtube.com/embed/_RCqT7XDEE4" title="CENTRO RECREATIVO MOLINO VIEJO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
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
              $ 60.000 por persona le incluye desayuno almuerzo y refrigerio,
              ingreso a la piscina. Nota: No se permite el ingreso de mascotas a
              la piscina y zona de comidas.
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
              $ 25.000 sin alimentación por persona <br />
              $ 65.000 con alimentación por persona le incluye desayuno almuerzo
              y cena. <br />
              Nota: En los 2 planes deben de traer las carpas
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
              $ 145.000 por persona con alimentación, niños menores de 5 años son
              gratis sin alimentación y niños de 6 años hasta los 8 años $ 50.000,
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
              $ 360.000 por pareja
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
              $ 360.000 por pareja
            </p>
          </div>
        </div>
      </div>
      <div class="col col-lg-4 mb-4">
        <div class="card">
          <img src="recursos/img/p-diasol.jpg" class="card-img-top" alt="CUMPLEAÑOS" />
          <div class="card-body">
            <h5 class="card-title text-center">DÍA DE SOL CON HABITACIÓN</h5>
            <p class="card-text">
              $ 170.000
            </p>
          </div>
        </div>
      </div>
      <div class="col col-lg-3 mb-4">
        <div class="card">
          <img src="recursos/img/header-contacto1.png" class="card-img-top" alt="Contáctanos" />
          <div class="card-body">
            <img src="recursos/img/logo.jpeg" class="card-img-top" alt="Logo" />
          </div>
        </div>
      </div>
     
      <div class="col-12 col-lg-11 mb-4">
        <div class="card">
          <div class="card-body">
            <h5>Nota:</h5>
            <p>
              -El ingreso a la piscina es de $:15000 por persona, solo los niños
              menores de 5 años son gratis <br />
              -El ingreso a los charcos y zonas verdes es de $:7000 por persona,
              solo los niños menores de 5 años son gratis
            </p>
          </div>
        </div>
      </div>
    </div>

    <b-row class="justify-content-center bghojas" >
    

      
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
      <b-col col="12" lg="6" align-self="center" class="text-center">
        <a href="https://goo.gl/maps/YK3H3rFFPNXpQYTy8" target="_blank">
          <img src="recursos/img/img-mapa-foo.jpg" class="img-fluid rounded" alt="Logo" />
        </a>
        <p class="text-white">HAZ CLICK AQUÍ Y UBÍCANOS</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

};
</script>
<template>
  <div class="">
    <!-- Modal red de Conceptos -->
    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-redConceptos"
      size="xl"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>
      <div>
        <img
          src="recursos/img/ECS00_004_modal.png"
          class="img-fluid mx-auto d-none d-lg-block d-md-none"
          alt=""
        />
        <img
          src="recursos/img/ECS00_004_modal_CEL.png"
          class="img-fluid mx-auto d-block d-lg-none"
          alt=""
        />
      </div>
    </b-modal>

    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-lecturaComplementaria"
      size="xl"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>
      <div>
        <h5 class="col_t1">
          Estadísticas de interés: Estudio de percepción. En Colombia,
          “predomina la emoción sobre la razón”
        </h5>
        <p>
          De acuerdo con el Informe de la Agencia Nacional de Seguridad Vial ,
          en Colombia, “predomina la emoción sobre la razón”. Este informe
          identificó las siguientes percepciones y comportamientos:
        </p>

        <p>
          • El 62% de los usuarios cree que quienes tienen más accidentes de
          tránsito son los motociclistas; el 31% cree que son quienes conducen
          bajo los efectos del alcohol; el 4% percibe que quienes más se
          accidentan son los conductores de transporte público, el 2% los
          peatones y 1% los conductores particulares, pero la consideración
          general es que “la gente como ellos” NO TIENE accidentes de tránsito.
          (Corporación Fondo de Prevención Vial, 2010). Más de la quinta parte
          de los actores viales (22%) ha estado involucrado en un accidente de
          tránsito. Aproximadamente tres de cada cuatro personas (75%)
          involucradas en un accidente de tránsito piensa que el causante del
          hecho es otra persona diferente a ellos. Se puede observar que tres de
          cada cuatro personas (75%) cree que el accidente se habría podido
          evitar porque fue causado por un error humano. (Corporación Fondo de
          Prevención Vial, 2010).
        </p>

        <p>
          • El 71% de los usuarios considera que su propio comportamiento es muy
          prudente, 22% que es algo prudente y 7% que no es prudente. El 48% de
          quienes conducen cualquier vehículo, considera que de vez en cuando
          hay que hacer maniobras arriesgadas. El 66% cree que para ser buen
          conductor o peatón se deben acatar las normas, un poco más de la mitad
          de los usuarios de las vías (58%) está de acuerdo con la mayoría de
          las normas, mientras que 34% con algunas y el 8% con pocas de ellas.
          La cuarta parte de los usuarios viales (24%) considera que las normas
          son demasiado severas. (Corporación Fondo de Prevención Vial, 2010).
        </p>

        <p>
          • El 45% de los colombianos considera que conducir a alta velocidad es
          emocionante, el 28% está en desacuerdo frente a la afirmación que
          conducir a alta velocidad aumenta el riesgo de estar involucrado en un
          accidente de tránsito, el 38% de los encuestados está de acuerdo con
          que sea poco probable que pueda ser detenido o multado por la policía
          si conduce a alta velocidad y el 47% considera que la mayoría de los
          que conducen en una zona residencial lo hacen por encima del límite de
          velocidad establecido. (Ministerio de Transporte, 2014).
        </p>

        <p>
          • El 28% de los colombianos está en desacuerdo en que la probabilidad
          de tener un accidente de tránsito aumenta si ha tomado alcohol, el 46%
          afirman que muchos de sus amigos conducen cuando toman, el 25% cree
          que un poco de alcohol no afecta los reflejos del conductor, el 30%
          afirma haber conducido un vehículo automotor después de haber tomado
          bebidas alcohólicas en los últimos 30 días. (Ministerio de Transporte,
          2014).
        </p>

        <p>
          • El 22% de los encuestados está de acuerdo con que, si se conduce
          cuidadosamente, no es necesario llevar cinturón de seguridad/ casco.
          El 30% afirma que en algunas ocasiones no se pone el cinturón de
          seguridad/ casco porque le incomoda y este mismo porcentaje cree que
          no es necesario que los ocupantes que van en la parte de atrás del
          vehículo usen el cinturón de seguridad/ casco. El 31 % solo usa el
          cinturón/ casco de seguridad porque la ley se lo exige y el 27%
          considera que no es necesario usar una silla de retención infantil/
          silla de bebé con un niño pequeño si este va en la parte de atrás del
          vehículo. (Ministerio de Transporte, 2014).
        </p>

        <p>
          • El 30% de los motociclistas en Colombia afirman transitar entre
          vehículos (zigzaguear), el 44% de los motociclistas afirman que nunca
          o rara vez ceden el paso a los peatones, en esta misma proporción
          nunca o rara vez, al cambiar de carril, utilizan las direccionales y
          el 42% informan que cuando van de afán, no respetan algunas señales de
          tránsito, pero lo hace con precaución. (Ministerio de Transporte,
          2014).
        </p>

        <p>
          • Todos los colombianos en algún momento de su vida son peatones, 6 de
          cada 10 (61%) son caminantes habituales y en promedio, los peatones
          destinan más de una hora para caminar al día, distribuida entre 3 o 4
          trayectos. (Corporación Fondo de Prevención Vial 2010, citado por
          Ministerio de Transporte, 2015, p 45-46).
        </p>
      </div>
    </b-modal>
    <!-- Modal red de Conceptos -->

    <!-- Modal Actividades  -->
    <b-modal
      class="modal-backdrop"
      :no-close-on-backdrop="true"
      hide-footer
      header-text-variant="true"
      id="modal-resultadosActividades"
      size="lg"
      @hidden="onHidden"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <img
            :src="imgURL"
            class="img-fluid d-flex mx-auto"
            id="imgResultado"
            alt=""
          />
        </div>
        <div class="col-lg-8 col-md-12 mt-lg-0 mt-3">
          <h5>{{ tituloResultado }}</h5>
          <p>{{ descripcionResultado }}</p>
        </div>
      </div>
    </b-modal>
    <!-- Modal Actividades  -->
    <!-- Modal Actividades1  -->
    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-resultadosActividades1"
      size="md"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12">
          <img
            :src="imgURL"
            class="img-fluid d-flex mx-auto"
            id="imgResultado"
            alt=""
          />
        </div>
        <div class="col-lg-8 col-md-12 mt-lg-0 mt-3">
          <h5>{{ tituloResultado }}</h5>
          <p>{{ descripcionResultado }}</p>
        </div>
      </div>
    </b-modal>
    <!-- Modal Actividades  -->
    <!-- Modal Intenta  -->
    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-intenta"
      size="lg"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

      <div class="row align-items-center">
        <div class="col-lg-4 col-12 mt-lg-0 mt-3">
          <img
            :src="imgURL"
            class="img-fluid d-flex mx-auto"
            id="imgResultado"
            alt=""
          />
        </div>
        <div class="col-lg-8 col-12 mt-lg-0 mt-3">
          <h5>Intenta de nuevo</h5>
          <p></p>
        </div>
      </div>
    </b-modal>
    <!-- Modal Intenta  -->
    <!-- Modal Correctas  -->
    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-correctas"
      size="xl"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

      <div class="row align-items-center">
        <div class="col-lg-12 col-12 mt-lg-0 mt-3">
          <h5>Respuestas Correctas</h5>
        </div>
        <b-col xl="12" md="12" cols="12" class="my-5">
          <b-row align-h="center p-3">
            <b-col class="sombra1 rounded p-5 text-center " xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img01.png"
                alt=""
                class="img-fluid"
              />
              <p>Conductor usando el celular</p>
              <h5>Riesgos por comportamientos humanos</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center " xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img02.png"
                alt=""
                class="img-fluid"
              />
              <p>Conductor conversando con copiloto mientras maneja</p>
              <h5>Riesgos por comportamientos humanos</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center " xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img03.png"
                alt=""
                class="img-fluid"
              />
              <p>Una caja en la vía</p>
              <h5>Riesgos por la infraestructura</h5>
            </b-col>
          </b-row>
          <b-row align-h="center p-3">
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img04.png"
                alt=""
                class="img-fluid"
              />
              <p>Un conductor con mala postura y cansado</p>
              <h5>Riesgos por comportamientos humanos.</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img05.png"
                alt=""
                class="img-fluid"
              />
              <p>Peatón pasando calle con audífonos y manipulando celular</p>
              <h5>Riesgos por comportamientos humanos.</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img06.png"
                alt=""
                class="img-fluid"
              />
              <p>Un conductor con sueño</p>
              <h5>Riesgos por comportamientos humanos.</h5>
            </b-col>
          </b-row>

          <b-row align-h="center p-3">
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img07.png"
                alt=""
                class="img-fluid"
              />
              <p>Exceso de velocidad</p>
              <h5>Riesgos por comportamientos humanos.</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img08.png"
                alt=""
                class="img-fluid"
              />
              <p>Vehículo regando aceite</p>
              <h5>Riesgos por estados del vehículo</h5>
            </b-col>
            <b-col class="sombra1 rounded p-5 text-center" xl="4" cols="12">
              <img
                src="recursos/img/Movilidad_M1_019_Actividad_img09.png"
                alt=""
                class="img-fluid"
              />
              <p>Actor vial gritando</p>
              <h5>Riesgos por comportamientos humanos.</h5>
            </b-col>
          </b-row>
        </b-col>
      </div>
    </b-modal>
    <!-- Modal Intenta  -->
 <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-compromiso"
      size="xl"
    >
     <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

       <b-container fluid class="bv-example-row bv-example-row-flex-cols FCompromiso">
          <b-row  class="justify-content-center py-5">
            
            <b-col xl="10" md="12" cols="12" class="text-center text-center">

              <img src="recursos/img/Logo-alcaldia.png" alt="" class="img-fluid">
               <p>La Alcaldia de Medellín y la Secretaría de Movilidad <br><br> agradecen a:</p>
              
              <!-- <img src="recursos/img/" alt="" class="img-fluid position-relative" id="compromiso1"> -->
              <h5 class="text-center" id="h5Nombre">{{Nombre}}</h5>
              <p>Identificad@ con documento:</p>
              <h6 class="text-center" id="h5Docu">{{Documento}}</h6>

              <p>Por comprometerse a fomentar comportamientos ciudadanos que aportan una Movilidad segura, sostenible, inclusiva, accesible para todos y con enfoque de género.</p>

              <p>Dado en Medellín, el {{Fecha}}</p>
              
            </b-col>
          </b-row>
        </b-container>
    </b-modal>
    <!-- Modal Manejo  -->
    <b-modal
      class="modal-backdrop"
      hide-footer
      header-text-variant="true"
      id="modal-resultadosManejo"
      size="xl"
    >
      <template v-slot:modal-header-close>
        <i class="icon-cerrar"></i>
      </template>

      <b-row class="p-3">
        <b-col cols="12">
          <h4 class="col_t1">Recomendaciones y técnicas de conducción</h4>
        </b-col>
      </b-row>
      <b-row class="p-3" align-h="center">
        <b-col lg="5" cols="12" class="m-1">
          <b-row align-v="center" class="cuadro11 p-3">
            <b-col lg="3" cols="12"
              ><b-img src="recursos/img/volante_icon.svg"></b-img
            ></b-col>
            <b-col lg="9" cols="12"><h6 class="col_t1">Al volante</h6></b-col>
            <b-col class="pt-3" cols="12">
              <p class="col_t1">
                • Es importante sentarse bien al volante, con la espalda bien
                pegada al espaldar, estire completamente un brazo, sin separar
                el hombro del respaldo. Coloque el brazo estirado justo por
                encima del aro del volante. La mano debe quedar por detrás del
                volante y la muñeca justo encima del aro del volante. Las
                piernas deben quedar algo flexionadas para llegar bien a todos
                los pedales. Regule bien los retrovisores y ya puede abrocharse
                el cinturón de seguridad. Y recuerda: la posición correcta de
                las manos en el volante es la de las "tres menos cuarto" de las
                agujas de un reloj.
              </p>
            </b-col>
          </b-row></b-col
        >
        <b-col lg="5" cols="12" class="m-1">
          <b-row align-v="center" class="cuadro22 p-3">
            <b-col lg="3" cols="12"
              ><b-img src="recursos/img/Manubrio_icon.svg"></b-img
            ></b-col>
            <b-col lg="9" cols="12"><h6 class="col_t1">Al manubrio</h6></b-col>
            <b-col>
              <p class="col_t1">
                • Sentarse bien manteniendo los codos relajados, permitiendo que
                se doblen normalmente. Las manos deben ubicarse en forma natural
                sobre el manillar, con los dedos dispuestos a accionar el freno
                si es necesario. Las rodillas deben estar los más cerca posible
                a la moto, pues al abrirlas se puede perder el equilibrio. Los
                pies deben estar fijamente apoyados por el centro de la planta
                del pie, con el talón del alzado perfectamente encajado en la
                estribera. El tronco debe estar relajado, ya que la posición
                erguida propicia la fatiga, lo cual es aconsejable para un buen
                desplazamiento.
              </p>
            </b-col>
          </b-row></b-col
        >
      </b-row>
      <b-row class="p-3" align-h="center">
        <b-col lg="5" cols="12" class="m-1">
          <b-row align-v="center" class="cuadro33 p-3">
            <b-col lg="3" cols="12"
              ><b-img src="recursos/img/Vista_icon.svg"></b-img
            ></b-col>
            <b-col lg="9" cols="12"><h6 class="col_t1">La vista</h6></b-col>
            <b-col cols="12">
              <p class="col_t1">
                • Hay que educar la vista para mirar a lo lejos y anticiparse a
                todo lo que pueda suceder por delante. Esto es importante en una
                autopista, donde la velocidad es elevada. Por ejemplo, para
                detectar frenazos o las típicas retenciones. • Debemos prestar
                atención a la incorporación repentina de vehículos a la
                carretera como camiones, motocicletas o bicicletas. No fiarse
                jamás de aquello que no se ve con los propios ojos. Desconfiar
                de las curvas con poca o nula visibilidad.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" cols="12" class="m-1">
          <b-row align-v="center" class="cuadro44 p-3">
            <b-col lg="3" cols="12"
              ><b-img src="recursos/img/Freno_icon.svg"></b-img
            ></b-col>
            <b-col lg="9" cols="12"
              ><h6 class="text-white">El frenado</h6></b-col
            >
            <b-col cols="12">
              <p class="text-white">
                • Frenar es algo imprescindible a la hora de circular: los
                frenos es un factor determinante en la seguridad del vehículo.
                Te puedes encontrar con circunstancias donde frenar puede
                suponer perder el control del vehículo y, llevarte a algo más
                que un susto. <br /><br />
                • Es importante que conozcas tu vehículo, realizar el
                mantenimiento de frenos y siempre mantener la distancia de
                frenado. <br /><br />
                • Los incidentes más graves son consecuencia de una distracción.
                Por tanto, hay que evitarlas al máximo.
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="p-3">
        <b-col cols="12">
          <h5 class="col_t1">
            ¿Sabés en qué situaciones no se debe adelantar?
          </h5>
          <p>
            • Hay que educar la vista para mirar a lo lejos y anticiparse a todo
            lo que pueda suceder por delante. Esto es importante en una
            autopista, donde la velocidad es elevada. Por ejemplo, para detectar
            frenazos o las típicas retenciones.
            <br /><br />
            • Debemos prestar atención a la incorporación repentina de vehículos
            a la carretera como camiones, motocicletas o bicicletas. No fiarse
            jamás de aquello que no se ve con los propios ojos. Desconfiar de
            las curvas con poca o nula visibilidad.
          </p>
        </b-col>
      </b-row>
    </b-modal>
    <!-- Modal Manejo  -->
  </div>
</template>



<script>
export default {
  name: "Modales",
  props: {
    tituloResultado: {
      type: String,
      required: true,
    },
    descripcionResultado: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
     Nombre: {
      type: String,
      required: true,
    },
    Documento: {
      type: String,
      required: true,
    },
    Fecha: {
      type: String,
      required: true,
    },
  },
  methods: {
    reiniciarPagina: function () {
      location.reload();
    },
    onHidden() {
      location.reload();
    },
  },
};
</script>

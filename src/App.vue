<template>
    <div id="app">
       <Nav/>
        <div class="contenido">
           
            <div id="contenidoPagina">
                <router-view/>
            </div>
        </div>
        <!-- <Footer/> -->
    </div>
</template>


<script>


// import Footer from '@/components/Footer'
import Nav from '@/components/nav'

export default {
 name: 'App',
 components:{
   Nav,
//    Footer
 }  ,
  methods: {
  
  }
}

</script>


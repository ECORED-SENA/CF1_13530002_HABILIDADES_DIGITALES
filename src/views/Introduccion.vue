<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            p(data-aos="fade-down") En la era digital actual, las Tecnologías de Información y Comunicación (TIC), han revolucionado prácticamente todos los aspectos de nuestras vidas. Desde la manera en que nos comunicamos hasta cómo trabajamos, las TIC han eliminado barreras de espacio y tiempo, permitiendo una conectividad global sin precedentes.    

          .row.justify-content-center.align-items-center         
            .col-lg-8.my-3
              .row.justify-content-center.align-items-center.bg1.px-3.brad.mb-3(data-aos="fade-right")
                .col-auto.my-3 
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')        
                .col.my-3
                  p(data-aos="fade-down").mb-0 Es así como las TIC se convirtieron en una parte integral de nuestra sociedad moderna. Desde mejorar la eficiencia en el trabajo hasta enriquecer la experiencia educativa, su impacto es profundo y omnipresente. A medida que avanzamos, es fundamental seguir aprendiendo y adaptándonos a estos cambios tecnológicos para aprovechar al máximo sus beneficios en todos los aspectos de nuestra vida.     
              .bg2.p-3.brad(data-aos="fade-left") 
                p(data-aos="fade-down").mb-0 En el presente componente formativo, abordaremos los aspectos más importantes de las TIC y los diferentes dispositivos para conectarnos a Internet. #[b Muchos éxitos en este proceso de aprendizaje.] 
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

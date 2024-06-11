<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Dispositivos

    .row.justify-content-center.align-items-center.bg3.px-3.brad.mb-3(data-aos="fade-right")
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')        
      .col.my-3
        p(data-aos="fade-down").mb-0 Seguramente en este momento estará conectado desde un dispositivo móvil, un computador o una tableta. Sin embargo, #[b.t1 ¿realmente conoce qué componentes básicos tienen estos dispositivos?] El siguiente video presenta aspectos relevantes que ayudarán a dar respuesta a esta interrogante.    

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Tipos de dispositivos para conectarse a Internet 

    p(data-aos="fade-down").mb-4 Navegar por Internet abre un abanico de posibilidades para buscar y difundir información, conectarse con personas de todas partes y realizar diferentes tareas que satisfagan las necesidades de la población en general.  
    .row.bg5.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .bg4.px-4.mb-5
              .row.justify-content-center.align-items-center         
                .col-lg-5.my-3.text-white
                  p(data-aos="fade-down") Para que las personas puedan acceder a Internet, se requiere de una conexión pero también se requiere de dispositivos que les permitan conectarse y ser usados para navegar en la red.

                  p(data-aos="fade-down") Como se mencionó anteriormente, uno de los dispositivos más utilizados es el computador, aunque en la actualidad, también se utilizan los teléfonos móviles, debido a la facilidad de transportarlos e integrarlos a varios servicios, dentro de un mismo dispositivo.       
                .col-lg-6.p-0  
                  img.img-a.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')   

            .row.justify-content-center.mb-5      
              .col-lg-4.my-3
                .bg6.brad.p-3.h-100
                  p(data-aos="fade-down") Con los teléfonos móviles se puede acceder a Internet usando Wifi proveniente, ya sea de un modem casero, de una red de una institución pública, de un sector público o también utilizando un paquete de datos de un operador móvil.
                  p(data-aos="fade-down") Para acceder a Internet basta con habilitar la conexión Wifi en el menú correspondiente del teléfono móvil.
                  p(data-aos="fade-down").mb-0 La ubicación del menú dependerá del modelo y sistema operativo del dispositivo.                      
              .col-lg-4.my-3
                .bg7.brad.p-3.h-100
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')        
                     
              .col-lg-4.my-3
                .bg8.brad.p-3.h-100
                  p(data-aos="fade-down") También se cuenta con las tabletas, que son dispositivos de un tamaño más grande que los teléfonos móviles.
                  p(data-aos="fade-down") Su sistema operativo puede variar según el fabricante. Los más conocidos son Android, iOS y Windows.
                  p(data-aos="fade-down").mb-0 Normalmente, las tabletas no traen consigo teclado o ratón, pero tienen puertos en los que se pueden conectar estos elementos. La conexión a Internet normalmente es por Wifi, pero hay modelos que permiten insertar una tarjeta SIM con datos de navegación.  

            .row.justify-content-center.align-items-center.bg7.px-3.brad.mb-3(data-aos="fade-right")
              .col-auto.my-3 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')        
              .col.my-3
                p(data-aos="fade-down").mb-0.text-white Otros dispositivos permiten la conexión a Internet como por ejemplo, placas embebidas de bajo consumo para procesos educativos y empresariales como Arduino, Raspberry, Udoo, entre otros. Hoy en día, también existen electrodomésticos que se conectan a Internet, como neveras inteligentes, televisores, los cuales permiten acceder a páginas web o reproductores de video, usando una conexión Wifi.                                       

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

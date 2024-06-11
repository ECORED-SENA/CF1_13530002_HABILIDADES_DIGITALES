<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Empezando el aprendizaje, dispositivos y TIC
      
    .row.bg9.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12       
            .row.justify-content-center.align-items-center.bg3.px-3.brad.mb-3(data-aos="fade-right")
              .col-auto.my-3 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')        
              .col.my-3
                p(data-aos="fade-down").mb-0 Las Tecnologías de Información y Comunicación se encuentran presentes en algunos aspectos cotidianos. 

            Separador 
            #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 1.1 Impacto de las TIC

          .row.justify-content-center.align-items-center  
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')                   
            .col-lg-8.my-3
              .bg10.p-3.brad.mb-4(data-aos="fade-left") 
                p(data-aos="fade-down").mb-0  Imagine que desea comunicarse con alguien al otro lado del mundo. ¿Qué necesita? Un dispositivo, una aplicación de comunicación y un paquete de datos o Wifi. Retroceda unos 30 años y piense en lo que tenían que hacer las personas para hablar con un primo en España, por ejemplo. Seguramente debían preparar muy bien lo que iban a decir porque la llamada tenía un costo elevado; otra posibilidad era enviar una carta que podría demorarse más de una semana en llegar. En la actualidad, es suficiente con enviar un emoticón por una aplicación de mensajería y llega en instantes.

              ol.lista-ol--cuadro.fa-ul
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  span ¿Cuántos tienen un dispositivo móvil en las manos en este momento?
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  span ¿Qué impacto puede tener esto en la vida de las personas? 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  span ¿Podrá agilizar tiempos? 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  span ¿Podrá hacer crecer negocios?    

    p(data-aos="fade-down") Es así como las Tecnologías de la Información y Comunicación (TIC), han eliminado las barreras de espacio y tiempo, permitiendo llevar, a nivel global, el mundo de la comunicación.                               

    h5.t1.mb-5(data-aos="fade-down") Se encuentran en todas partes y en la mayoría de las acciones que realizamos en el día a día, como son:    

    .row.bg11.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/13.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.mb-3(columnas="col-lg-6")
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/15.svg' alt='')
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 01                   
                p.mb-0 Hablar por celular      
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/16.svg' alt='')
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 02                  
                p.mb-0 Revisar el correo electrónico.       
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/17.svg' alt='')
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 03                   
                p.mb-0 Chatear con algún amigo.      
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/18.svg' alt='')
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 04                   
                p.mb-0 Escribir la lista de tareas pendientes.    
              .tarjeta.bgcard.ts.h-100.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/19.svg' alt='')
                .row.justify-content-center.align-items-center.mb-3           
                  .col-auto.bgn.p-2
                    h5.mb-0.mx-1(data-aos="fade-down") 05                   
                p.mb-0 Revisar la red social en la que se está inscrito

    .row.mt-5        
      .col-auto
        .bg12.p-2(data-aos="zoom-in-left")
          h5.mb-0(data-aos="fade-down") Pero, ¿qué son las TIC?
    .row.justify-content-center.mb-4      
      .col-lg-10.my-3(data-aos="fade-left")
        .bloque-texto-d.color-secundario.p-4(data-aos="fade-left")
          .bloque-texto-d__texto
            i.fas.fa-quote-left
            p.mb-0 Las Tecnologías de la Información y la Comunicación, también conocidas como TIC, son un conjunto de tecnologías, desarrolladas para gestionar información y enviarla de un lugar a otro, y cubren un amplio abanico de soluciones. Incluyen las tecnologías para almacenar información y recuperarla en otro momento, enviar y recibir información de un sitio a otro, procesar información para calcular resultados y elaborar informes. 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ServiciosTIC, 2006). 

      .col-lg-2.my-3(data-aos="fade-down")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')               

    h5.t1.mb-5(data-aos="fade-down") A continuación, conozcamos algunos ejemplos de TIC:

    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')
          h5(data-aos="fade-up") Primero
          p(data-aos="fade-down").mb-0 Videojuegos
      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='')
          h5(data-aos="fade-up") Segundo
          p(data-aos="fade-down").mb-0 Mensajería instantánea 
      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/23.svg', alt='')
          h5(data-aos="fade-up") Tercero
          p(data-aos="fade-down").mb-0 Comercio electrónico
      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')
          h5(data-aos="fade-up") Cuarto  
          p(data-aos="fade-down").mb-0 Gobierno en línea  

      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')
          h5(data-aos="fade-up") Quinto
          p(data-aos="fade-down").mb-0 Banca móvil
      .col-lg-4.my-3
        .bg13.brad.p-5.h-100.text-white.text-center
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')
          h5(data-aos="fade-up") Sexto
          p(data-aos="fade-down").mb-0 Búsqueda de información

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')
               
      .col-lg-8.my-3
        .row.justify-content-center         
          .col-lg-6(data-aos="fade-left") 
            .bg14.p-3.h-100.brad
              p.mb-0 Es así, como el nuevo entorno social demanda que el ciudadano del siglo XXI, desarrolle nuevas competencias que le permitan el desenvolvimiento en los contextos académicos y profesionales.                  
          .col-lg-6(data-aos="fade-right") 
            .bg14.p-3.h-100.brad
              p.mb-0 Por supuesto, es necesario saber leer, escribir, tener conocimientos de ciencia, geografía, historia, matemáticas, pero todo eso se complementará con el desarrollo de las destrezas y habilidades que le permitirán actuar en este espacio virtual.        
        .row.my-3      
          .col-auto
            .bg7.p-2(data-aos="zoom-in-left")
              p.t2.mb-0(data-aos="fade-down") Es así como el uso de las TIC contribuye al desarrollo de diferentes habilidades:
        .row.justify-content-center.align-items-end         
          .col-lg-4
            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span 1
                span Pensamiento crítico.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                span Creatividad.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                span Resolución de problemas.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                span Organización.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                span Análisis.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                span Gestión.  
          .col-lg-8
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')


    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Desarrollo de las TIC  
    p(data-aos="fade-down") Navegar en Internet abre un abanico de oportunidades para buscar y difundir información, conectarse con personas y realizar diversas tareas que hoy se han convertido en necesidades de la población. Las TIC han tenido un gran desarrollo durante los últimos años, como se observa a continuación:
    .row.bg16.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.bgw.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t3 Slide 1 
                    p Antiguamente, el correo electrónico era considerado una herramienta útil como comunicación entre las personas pero, en la actualidad, las diferentes aplicaciones y redes sociales, entran a formar parte de unos canales de comunicación efectivos y eficaces, los cuales son utilizados por una gran parte de la población y, al mismo tiempo, son implementados en instituciones educativas y en empresas.                 
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/30.png', alt="")  

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t3 Slide 2
                    p La telefonía celular ha sido una de las tecnologías que más ha avanzado durante los últimos años. En la actualidad, con los teléfonos inteligentes o smartphones, se puede acceder a toda la información de la web y realizar múltiples tareas, a través de las distintas aplicaciones móviles.             
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/31.png', alt="")    
    .row.justify-content-center         
      .col-lg-7
        .bg7.px-3.brad.h-100.j(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-auto.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='')        
            .col.my-3
              p(data-aos="fade-down").mb-0.text-white En la vida cotidiana, las TIC pueden ser aplicadas en muchas áreas y funcionan como entretenimiento, canales de comunicación, herramientas para despertar, hacer ejercicio, organizar la agenda, trabajar en la oficina y muchas otras tareas.    
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')    

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Las TIC en el entorno académico   
    .row.bg17.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.mb-5      
              .col-lg-4.my-3
                .bg8.brad.p-3.h-100
                  p(data-aos="fade-down").mb-0 En el campo de la educación, con las TIC se puede disponer de información, en cualquier área del conocimiento, sin la necesidad de desplazarse a lugares como una biblioteca, y obtener con igual o más precisión, el mismo resultado.                     
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')        
                     
              .col-lg-4.my-3
                .bg6.brad.p-3.h-100
                  h5.t1(data-aos="fade-down") Analice la siguiente situación:
                  p(data-aos="fade-down") Retroceda el tiempo unos 30 años e imagine que desea buscar información sobre el Dragón de Komodo. Lo más seguro es que tendría que utilizar una enciclopedia de varios tomos, ubicar la letra D y desplazarse hasta encontrar sobre el Dragón Komodo.            
              
            h5.t1(data-aos="fade-down") ¿Cuánto tiempo piensa que se demoraría realizando esta tarea?
            p(data-aos="fade-down").mb-5 ¿Hoy en día puede encontrar, en segundos, imágenes e información de este dragón, utilizando su buscador favorito, e inclusive, hablándole a su teléfono móvil.

            .row.justify-content-center         
              .col-lg-9.my-3
                .bg7.px-3.brad.mb-4(data-aos="fade-right")
                  .row.justify-content-center.align-items-center
                    .col-auto.my-3 
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')        
                    .col.my-3
                      h5(data-aos="fade-down").t2 Es así como las herramientas TIC llegaron para quedarse e impactar nuestras vidas.
                      p(data-aos="fade-down").mb-0.t2 Por lo tanto, se puede concluir que las TIC ejercen como:  

                ol.lista-ol--cuadro.fa-ul
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    span Herramientas para los alumnos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    span Recursos de apoyo para los docentes, mejorando los métodos de enseñanza.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    span Fomentando el aprendizaje colaborativo y la apropiación del conocimiento. 
                .bg2.p-3.brad(data-aos="fade-left") 
                  p(data-aos="fade-down").mb-0 También, se pueden expresar y compartir experiencias y conocimientos, obteniendo una retroalimentación de personas que viven en otra parte del mundo y en tiempo real. 
              .col-lg-3.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')   

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.4 Las TIC en el entorno laboral    

    .row.bg18.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12  
            .row.justify-content-center         
              .col-lg-5.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')  
              .col-lg-7.my-3
                p(data-aos="fade-down") En cualquier empresa grande, mediana o pequeña, las TIC contribuyen al crecimiento y aumento de la productividad, porque mejoran los procesos y los canales de comunicación, a través de una página web, un perfil en redes sociales, un correo electrónico, e inclusive, una aplicación para dispositivos móviles.

                h5.t1.mb-3(data-aos="fade-down") Igualmente permiten generar: 
                .row.mb-3         
                  .col-lg-7.bg19.p-2.brad.text-white                               
                    .row.align-items-center       
                      .col-auto
                        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')  
                      .col
                        p(data-aos="fade-down").mb-0 Un impacto social en millares de personas.
                .row.mb-3         
                  .col-lg-7.bg19.p-2.brad.text-white                         
                    .row.align-items-center         
                      .col-auto
                        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')  
                      .col
                        p(data-aos="fade-down").mb-0 Acceder a nuevos emprendimientos. 

            h5.t1.my-4(data-aos="fade-down") Para conocer ejemplos de emprendimiento, lo invitamos a consultar en el material complementario, los siguientes videos:

            .row.justify-content-center         
              .col-lg-7
                .bg7.px-3.brad.h-100.j(data-aos="fade-right")
                  .row.justify-content-center.align-items-center
                    .col-auto.my-3 
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')        
                    .col.my-3
                      p(data-aos="fade-down").mb-0.text-white Yul, el cocinero llanero que con tecnología ha dado a conocer sus recetas, donde se presenta la historia de Yulián Tellez, un chef nacido en el municipio de Guamal, quien ha logrado compartir muchos de sus exquisitos platos vía Internet y, gracias a esa herramienta, su negocio ha empezado a obtener resultados positivos.   
              .col-lg-5
                .bg1.p-4.brad.h-100.j(data-aos="fade-right") 
                  p(data-aos="fade-down").mb-0 #[b Domit Express: una aplicación que proporciona el comercio local y vincula al “mototaxismo”], el cual presenta a Mathew y Manuel, sabanalargueros, quienes crearon Domit Express, la app en la que los negocios locales presentan productos para los consumidores y que, a la vez, son transportados por “mototaxistas”, organizados a través de una cooperativa de transporte.

            .bg20.p-4.brad.h-100.j.my-5(data-aos="fade-right") 
              p(data-aos="fade-down").mb-0.text-white Es importante que aprendamos a convivir con las TIC, porque son parte de nuestra cultura, y además brindan muchas oportunidades a nivel social, económico, cultural y personal.                  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas y destaca aspectos clave estudiados. Tema central: dispositivos y TIC. Temas integradores: qué son, a qué contribuye su uso, las TIC en el entorno del día a día, en el entorno académico, en el entorno laboral, y los tipos de dispositivos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

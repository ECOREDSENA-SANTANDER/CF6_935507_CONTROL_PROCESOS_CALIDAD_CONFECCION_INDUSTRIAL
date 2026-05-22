<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Como cierre del estudio de este componente, se presenta una síntesis gráfica que integra los conceptos fundamentales del control de calidad en el sector de la confección. Este esquema permite identificar de manera articulada los procesos que requieren supervisión técnica, así como los métodos de inspección y técnicas de muestreo esenciales para garantizar que el producto final cumpla con los estándares definidos antes de su entrega al cliente.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="A continuación, se presenta una síntesis gráfica que articula los pilares del control de calidad en el sector de la confección. Este esquema integra los procesos fundamentales de producción, desde el patronaje hasta los terminados, vinculándolos con los métodos de inspección y las técnicas de muestreo esenciales para garantizar la conformidad de cada lote. El mapa permite identificar de manera integral cómo la gestión de insumos y la supervisión técnica convergen para asegurar la calidad final del producto.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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

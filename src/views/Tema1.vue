<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Control de calidad en los procesos de confección e insumos
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Control de calidad en patronaje
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Control de calidad en trazo y corte
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Control de calidad en confección
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Control de calidad en terminados
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Control de calidad en insumos, materiales y textiles
      
        

  </template>

<script>
export default {
  name: 'Tema1',
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

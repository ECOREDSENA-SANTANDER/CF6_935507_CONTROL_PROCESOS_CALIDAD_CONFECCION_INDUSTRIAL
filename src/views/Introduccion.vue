<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-3 Una vez que se ha avanzado en el proceso productivo es necesario ejecutar el proceso de control de calidad en los procesos, insumos, materia prima y materiales; para ello es necesario que el equipo ejecutor de la producción identifique y defina los requisitos de calidad del producto y de cada uno de los procesos que se ejecutan según la orden de producción.
        p.mb-4 Así mismo, los supervisores de proceso deben conocer los diferentes tipos de inspecciones para establecer cuáles de ellas son las óptimas a realizar en cada lote y con qué metodología realizarlas, de forma que se establezca un adecuado plan de muestreo a desarrollar, el cual permite detectar defectos o inconformidades en un lote de producción y así corregirlos antes de que el producto sea entregado al cliente.

        .bloque-texto-e.color-primario.p-4.mb-0
          p.mb-4.text-white Recuerde que para un
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.mb-0.text-white.fw-bold Control total de la calidad se debe contar con el conjunto de esfuerzos efectivos de los diferentes equipos de la organización
            i.fas.fa-quote-right
          .row.align-items-start
            .col
              .bloque-texto-e__autor 
                p.mb-0.text-white (Jaramillo, 1990).


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

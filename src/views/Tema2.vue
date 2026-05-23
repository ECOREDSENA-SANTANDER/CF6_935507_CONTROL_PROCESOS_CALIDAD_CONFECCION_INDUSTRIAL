<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Inspección y muestreos
      
      img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t2/1.png', alt='')
      p.mb-0 De acuerdo con Jaramillo (1990) “la inspección es la acción de comparar un material, proceso o producto contra las especificaciones dadas previamente con el propósito de determinar el grado en que estos cumplen las especificaciones técnicas establecidas. De acuerdo con el porcentaje de artículos inspeccionados, la inspección puede ser (i) al 100%, que comprende el examen de cada artículo que haya en el lote, y (ii) por muestreo, que comprende la inspección de una pequeña parte de los artículos que hay en el lote o que se producen en el proceso. Cada empresa con base en sus políticas de calidad define los tamaños muestrales”.
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Métodos de inspección
      
      p.mb-3 Las inspecciones se necesitan en las empresas para garantizar la calidad del producto y de los procesos. Validar la calidad de los insumos y materias primas permite controlar la calidad desde el inicio y ser proactivos ante las demoras que se puedan presentar en la producción, haciendo mejoras el manejo de los costos de calidad.
      p.mb-5 Teniendo en cuenta la clasificación de la inspección, se derivan de ellos los métodos a utilizar; a continuación, se presentan los diferentes tipos de inspección.
      
      
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de inspecciones, tipos y subclasificación
      
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-brown")
            .row.justify-content-center.mb-0(titulo="Cantidad de productos a inspeccionar")
              .col-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b 100%:] se examinan todos los artículos de un lote.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Muestreo:] examinando la muestra establecida, se incide la conclusión en todo el lote o producción.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Comprobación:] teniendo una muestra pequeña con el fin de comprobar las acciones de la inspección de un proceso, por ejemplo.
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Cero:] no se requiere porque el proceso está controlado.
            .row.justify-content-center.mb-0(titulo="Proceso de producción")
              .col-12
                p.mb-3 Recibo de materia prima, insumos y materiales: retener antes de iniciar los no conformes.
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Proceso:] determinar si está conforme para seguir según el flujo del proceso.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Producto:] una vez terminado se usa para rechazar o aceptarlo.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Previa a la entrega:] revisión por los cambios que puedan ocasionarse en el almacenamiento antes de llegar a manos del cliente.
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Durante la entrega al cliente.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 En el almacenamiento debido a los tiempos.
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Externa:] realizada por empresas contratadas, o por entes gubernamentales.
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Auditoría:] comprobar la inspección para asegurar el proceso realizado.
            .row.justify-content-center.mb-0(titulo="Especificaciones de inspección")
              .col-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Aprobar muestra o prototipo del producto. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 Comprobar comportamiento del artículo. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Fiabilidad:] si va a durar el comportamiento con la inspección. 
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Analítica:] conforme el análisis de una característica es suficiente para decidir aceptar o rechazar y así establecer acciones de mejora. 
            .row.justify-content-center.mb-0(titulo="Aprobación de producto")
              .col-12
                 ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Variables:] se cuantifica, y según criterio el inspector valida. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Atributos:] sin cuantificación, es totalmente subjetiva a criterio del inspector. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.svg', alt='')

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.svg', alt='')
        .col-sm-12.col-lg-8
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-brown")
            .row.justify-content-center.mb-0(titulo="Lugar")
              .col-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Puesto control fijo:] lugar establecido dentro del proceso de producción. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Control volante:] no es fijo. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Control parcial:] se establece en determinados momentos y espacios según necesidad de revisar una pieza o proceso. 
            .row.justify-content-center.mb-0(titulo="Frecuencia")
              .col-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Periódica:] establecido de acuerdo con periodos fijos. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Permanente:] en un puesto fijo, retención del producto al final del proceso. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Permanente estadístico:] de acuerdo con un muestreo. 
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Arbitraria:] cuando el inspector realiza a su criterio. 
                  li.d-flex
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Eventual:] de vez en cuando. 
                  li.d-flex.mb-0
                    i.fas.fa-thread.icon-list-3
                    p.mb-0 #[b Al azar:] sin programación previa. 
            .row.justify-content-center.mb-0(titulo="Proveedores")
              .col-12
                p.mb-0 Realizadas a los proveedores para certificar que realizan controles de calidad.

      p.mb-5 Para realizar las inspecciones es relevante tener en cuenta la fase de planeación del control de calidad, como primera medida se realiza el alistamiento de los recursos, definir cronogramas, responsables, sistemas de medición, requisitos de calidad y plan de muestreo, y en la ejecución de inspecciones conviene tener un orden para revisar cada pieza o producto y poder validarlo una vez se realice el análisis mediante las herramientas estadísticas, sin producir congestiones o demoras en las entregas de los pedidos al cliente.
        

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de producto en proceso

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nud4f4gxwV4?si=Efr1mTuaoxw8rgdO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video. Inspección producto en proceso


      p.mb-3 Teniendo en cuenta la llamada inspección en pie de máquina, el inspector revisa la pieza una vez termina la operación en el puesto de trabajo, tanto por el lado del derecho como por el revés, y analiza el método con el que se desarrolla la operación, para establecer estrategias de mejora. Utiliza el formato de auditoría de confección en proceso, que hace parte de los formatos de control de calidad.
      p.mb-5 Los aspectos para auditar son los siguientes:

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.bg-color-9.p-4
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Simetrías.
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Márgenes de costura.
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Manipulación.
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Tensiones de costuras.
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras rectas.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Remates.
        .col-sm-12.col-lg-4.d-none.d-lg-block.bg-color-6.p-4
          img(src='@/assets/curso/temas/t2/4.svg', alt='')
        .col-sm-12.col-lg-4.bg-color-9.p-4
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Cases de costuras. 
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Empates mínimos de costuras. 
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Limpieza. 
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras uniformes. 
              li.d-flex
                i.fas.fa-thread.icon-list-3
                p.mb-0 Sin roturas. 

      p.mb-5 Operación desarrollada según las especificaciones del método y uso de pies, guías, aditamentos y fólderes.
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de producto terminado

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/1o1XpJqUCms?si=ImnPwL5S0idwL1mH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video. Inspección producto terminado

      p.mb-3 En los puntos de control fijos asignados del módulo de producción, se realiza la auditoría utilizando el formato de auditoría de producto terminado.
      p.mb-5 Aspectos para auditar:

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-7
          .bg-color-9.p-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Prenda limpia: sin manchas de aceite o algún otro líquido. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Prenda sin hebras: corte de hilos al ras. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Resistencia a la rotura de las costuras. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Simetrías. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Márgenes de costura. 
              li.d-flex.mb-0.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Manipulación. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Tensiones de costuras. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras rectas. 
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png', alt='')
        .col-sm-12.col-lg-7
          .bg-color-9.p-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Remates de costuras.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Cases de costuras.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Empates mínimos de costuras.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras uniformes.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Sin roturas.
              li.d-flex.mb-0.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Sin recogidos.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Correspondencia de las medidas de prenda terminada con las especificadas en ficha técnica, según desarrollo de patronaje.
        
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de lote piloto

      p.mb-5 Con el fin de prever problemas en producción derivados de la calidad se confecciona una cantidad de unidades del producto con el fin de comprobar el cumplimiento de los requisitos. Los aspectos para revisar son los siguientes:
      

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-7
          .bg-color-9.p-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Desarrollo de las operaciones de acuerdo con la ficha técnica.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Simetrías.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Márgenes de costura.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Manipulación.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Tensiones de costuras.
              li.d-flex.mb-0.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras rectas.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Remates de costuras.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-sm-12.col-lg-7
          .bg-color-9.p-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Cases de costuras. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Empates mínimos de costuras. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Costuras uniformes. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Sin roturas. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Sin recogidos. 
              li.d-flex.mb-0.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Correspondencia de las medidas de prenda terminada con las especificadas en ficha técnica, según desarrollo de patronaje. 
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Plantillas creadas cumplen para la utilización por ejemplo marcación de posición de bolsillos 

      

      p.mb-5 Las inconformidades que se presenten en el desarrollo del lote piloto deben corregirse y realizar nuevas pruebas hasta que la inspección de las prendas cumpla los requisitos y sea aceptados para producir.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de insumos y textiles
      
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ifog7FMAezI?si=gsVuRfCs7qH2ohTD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video. Inspección insumos

      p.mb-3 En el ingreso de los materiales y antes de iniciar el proceso, la inspección hace parte del alistamiento de la producción para su integración al paquete de confección.
      p.mb-5 Una vez se realiza la inspección y si no cumple con los requisitos se deben rechazar los insumos, de allí la importancia de los acuerdos comerciales y de garantía con los proveedores para dar pronta respuesta al problema y se puedan entregar nuevos insumos de reemplazo, que también deben someterse a la inspección.

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KHP3N-IxTV8?si=uUnnV_3Uc7tPUJAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video. Inspección textiles


      p.mb-5 En la siguiente tabla puede observar cómo se pueden realizar las inspecciones en algunos, insumos y telas.
      .titulo-sexto.color-secundario
        p.mb-0  #[b Tabla 5.] Características para inspeccionar en insumos y textiles
      .tabla-b.color-primario.mb-5
        table
          thead
            tr
              th.w-25 #[b Insumo / tela]
              th.w-25 #[b Característica]
              th #[b Descripción de la inspección]
          tbody
            tr
              td Hilos
              td Resistencia
              td Tomando una porción de hilo del cono se somete a estiramiento hasta que se rompa, percibiendo la fuerza y la capacidad de estiramiento del hilo, con lo cual cumple con el requisito.
            tr
              td Hilos
              td Título
              td Revisar que corresponda al descrito en la ficha técnica.
            tr
              td Hilos
              td Color
              td Comparar que el número del color coordine con el color de tela o contraste según sea el caso descrito en la ficha técnica.
            tr
              td Hilos
              td Torsión
              td Tomar una porción de hilo y girarlo en sí mismo para comprobar su recuperación, una vez se deje de torcer.
            tr
              td Botones
              td Color, tamaño y diseño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, orillos parejos, sin doblados.
            tr
              td Cremallera
              td Color, tamaño y diseño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, subir y bajar el deslizador para comprobar su estado y el de los dientes.
            tr
              td Elásticos
              td Elasticidad
              td Capacidad de recuperar longitud.
            tr
              td Elásticos
              td Color y tamaño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, orillos parejos, sin doblados.
            tr
              td Sesgos, cintas, encajes
              td Color, tamaño y diseño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, orillos parejos, sin doblados.
            tr
              td Gafetes, tensores
              td Color, tamaño y diseño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, orillos parejos, sin doblados.
            tr
              td Telas
              td Resistencia
              td Al rasgado, a rotura, se puede tomar una pieza y ejercer fuerza al estirar, dependiendo del nivel de fuerza ejercida, conforme la tela resista, se concluye que cumple.
            tr
              td Telas
              td Color
              td Debe ser parejo. En caso de estampados, líneas y cuadros que se observen uniformes, sin distorsiones. Revisar la fijación del color, para que no se migre sobre todo al contacto con agua o en proceso de lavado.
            tr
              td Telas
              td Generación de #[i pilling]
              td Tomar la pieza y frotar tanto en seco como la pieza húmeda.
            tr
              td Telas
              td Dimensiones
              td Tomando una pieza y ejerciendo estiramiento para conocer si cambia sus dimensiones, lo cual afectaría las medidas, en el caso de prendas elásticas si recupera fácilmente sus dimensiones. Además de someterla al calor para conocer si genera encogimiento.
            tr
              td Telas
              td Diseño
              td Corresponda a la especificación de la ficha técnica, apariencia uniforme, orillos parejos, sin doblados.
            tr
              td Entretelas
              td Capacidad de adherencia
              td Teniendo en cuenta su función se valida que no se levante durante el proceso, y queda bien adherido a la pieza fusionada.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de procesos de terminados
      
      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t2/9.svg')          
          h2.text-center Planchado
          p.mb-0 Revisar que no queden arrugas, los quiebres necesarios deben quedar derechos y en el lugar especificado
        
        .col-md.tarjeta.color-adicional-2.p-5
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t2/10.svg')          
          h2.text-center Doblado
          p.mb-0  Este proceso no debe afectar la apariencia de otras partes de la prenda como el cuello y pueda dañar el proceso anterior conforme el método acordado.
          
        
        .col-md-6.col-lg-4.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-4
            .col-6
                img(src='@/assets/curso/temas/t2/11.svg')          
          h2.text-center Embalaje
          p.mb-0 La organización en la caja debe realizarse sin ejercer presión que afecte el doblado y planchado de la prenda, se debe verificar que tenga las etiquetas y rótulos para identificar la prenda y el pedido.




      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de procesos de lavandería
      
      p.mb-5 Existen diversos tipos de lavado los cuales también se pueden combinar, pero en general, es importante que se inspeccione una vez se termine el proceso. Al inicio de la inspección, se debe tener claro que se va a inspeccionar respecto a:


      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          .bg-color-6.p-3
            img(src='@/assets/curso/temas/t2/13.svg', alt='')
        .col-sm-12.col-lg-4
          .bg-color-9.p-3
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 #[b Color:] correspondencia respecto al proceso solicitado.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 En el caso de abrasiones y rotos, se confronta si los tamaños, la ubicación y el método corresponde al solicitado.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Decoloraciones en las ubicaciones y tamaños especificados.
              li.d-flex.mb-0
                i.fas.fa-thread.icon-list-3
                p.mb-0 Se revisa si se afectaron las costuras, es decir si se rompieron.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          .bg-color-6.p-3
            img(src='@/assets/curso/temas/t2/12.svg', alt='')

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de proceso de estampado
      
      p.mb-5 En cualquiera de los métodos aplicados se debe validar los siguientes aspectos:  

      .row.d-flex.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/14.svg' alt='')
            .tarjeta.bg-color-4.hcard-2.mt-3
              .p-4
                h4.text-center Colores
                p.mb-0 Precisos, que no se noten corridos si no es parte del diseño.
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/15.svg' alt='')
            .tarjeta.bg-color-4.hcard-2.mt-3
              .p-4
                h4.text-center Diseño
                p.mb-0 Que sea de acuerdo con el planteado.
      .row.d-flex.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/16.svg' alt='')
            .tarjeta.bg-color-4.hcard-2.mt-3
              .p-4
                h4.text-center Tamaño
                p.mb-0 Las medidas deben estar conforme el requerimiento.
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/17.svg' alt='')
            .tarjeta.bg-color-4.hcard-2.mt-3
              .p-4
                h4.text-center Posición y ubicación
                p.mb-0 Confirmar confrontando el diseño o muestra.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de proceso bordado
      p.mb-5 Los aspectos para revisar en el bordado son:
       .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t2/18.png', alt='')
        .col-sm-12.col-lg-7.mx-0.px-0.bg-color-5
          .p-4
            img.mb-3.wcus-2.d-none.d-lg-block(src='@/assets/curso/temas/t2/19.svg', alt='')
            ul.lista-ul--color
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Colores: que coordinen conforme el diseño.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Diseño: que sea de acuerdo con el planteado.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Tamaño: las medidas deben ser conformes al requerimiento.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Posición y ubicación: confirmar confrontando el diseño.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Tensión de hilos.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Hilos cortados a ras.
                li.d-flex.mb-0
                  i.fas.fa-thread.icon-list
                  p.mb-0 Sin roturas.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Técnicas de muestreo
      
      p.mb-5 Una vez se determinen los criterios para realizar las inspecciones de producción, se utiliza la estadística para manejar, sobre todo grandes unidades de productos de un lote y variables de este.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          p.mb-4 La elección de la muestra es muy importante, porque del cumplimiento de sus características en el lote dependen las decisiones a tomar sobre el mismo; por tanto, se debe dar cumplimiento al rasgo de representatividad del lote. Del tamaño de las muestras y la forma de escoger sus propiedades depende el nivel de error obtenido en las inspecciones y sus mediciones.
          p.mb-4 El plan de muestreo a elegir debe tener en cuenta el número promedio de productos a auditar con el fin de controlar no solo el producto sino los costos por inspección.
          .bg-color-6.p-4
            p.mb-0 El muestreo a elegir ya sea en un proceso, o en un producto terminado o insumo puede ser diferente, es necesario verificar la capacidad de análisis del auditor para determinar la conveniencia de la técnica a utilizar además de establecer mezclas entre los tipos de muestreo.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/20.png', alt='')  
      
      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Muestreo probabilístico

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/21.png', alt='')
        .col-sm-12.col-lg-9
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-9
              img(src='@/assets/curso/temas/t2/22.svg', alt='')
            .col-sm-12.col-lg-7
              .bg-color-2.p-4
                p.mb-0.text-white Este método utiliza formas de selección aleatoria, basado en la característica que todos los productos pueden hacer parte de una muestra, asegurando la representatividad de esta.
                p.mb-2.text-white Este tipo de muestreo se clasifica en:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-thread-green.icon-list-3
                    p.mb-0.text-white  Muestreo aleatorio simple.
                  li.d-flex
                    i.fas.fa-thread-green.icon-list-3
                    p.mb-0.text-white  Muestreo sistemático.
                  li.d-flex
                    i.fas.fa-thread-green.icon-list-3
                    p.mb-0.text-white  Muestreo aleatorio estratificado.
                  li.d-flex.mb-0
                    i.fas.fa-thread-green.icon-list-3
                    p.mb-0.text-white Muestreo por conglomerados (clústeres).
          p.mb-2 En cada uno de los muestreos se debe tener en cuenta las siguientes variables:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-thread
              p.mb-0  #[b N = ]tamaño de la población o lote.
            li.d-flex
              i.fas.fa-thread
              p.mb-0  #[b n = ]tamaño de la muestra.
            li.d-flex
              i.fas.fa-thread
              p.mb-0  #[b k = ]intervalo de salto para elegir el siguiente elemento que conforme la muestra.
            li.d-flex.mb-0
              i.fas.fa-thread
              p.mb-0 #[b I = ]arranque aleatorio, elemento o producto de punto de partida, es el inicio para determinar la muestra.
      p.mb-5 El cálculo del tamaño de la muestra se realiza de acuerdo con cálculos estadísticos que se realizan mediante programas informáticos, en donde se tienen en cuenta el error estándar, el intervalo de confianza, la media, entre otras medidas. Es relevante tener en cuenta que entre mayor sea el tamaño de la muestra, menor es el error estándar.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Muestreo simple

      p.mb-3 Este procedimiento de muestreo consiste en tomar una muestra definida de unidades, cuya elección se realiza al azar, una vez inspeccionadas se toma la decisión de aceptar o rechazar conforme a los criterios de la empresa. Este tipo de muestreo es útil en lotes pequeños.
      p.mb-5 A continuación puede tener una comparación entre las ventajas y desventajas del muestreo simple.
      
      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-md-6.col-lg-5.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/23.svg')          
          h2.text-center Ventajas
          p.mb-0 - Fácil y sencillo de analizar.
          p.mb-0 - Cálculos inmediatos de media y varianza.
          p.mb-0 - Análisis de datos en software especializado.
        
        .col-md-6.col-lg-5.tarjeta.color-adicional-1.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/24.svg')          
          h2.text-center.text-white Desventajas
          p.mb-0.text-white - Necesita tener el marco muestral.
          p.mb-0.text-white - El número pequeño de la muestra puede no representar el lote.
      .cajon.color-acento-contenido.p-5.mb-5
          h4 Ejemplo
          p.mb-0 Se necesita validar un lote de 200 rollos de telas (N), cada uno de 60 metros, el tamaño de la muestra es de 300 metros (n) y el número de metros de tela aceptados es de 20 metros.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Muestreo doble

      p.mb-5 Para validar un lote es necesario conocer el resultado de las inspecciones de dos muestras de este, cuando se presenten resultados dudosos en la primera muestra, por lo tanto, se pueden combinar los resultados de ambas muestras para determinar si se acepta o rechaza el lote.

      img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t2/26.png', alt='')
      .cajon.color-acento-contenido.p-5.mb-5
          h4 Ejemplo
          p.mb-0 Se tiene un lote de 100 unidades (N), de acuerdo con los criterios de inspección de la empresa, se toman muestras de 20 unidades (n) y si se encuentran 2 unidades defectuosas (RQL) el lote se rechaza. Al realizar inspección se encuentra 1 unidad defectuosa, por lo tanto, se procede a inspeccionar una segunda muestra donde se encuentran 2 unidades defectuosas, por tanto, el lote se rechaza.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Muestreo múltiple


      p.mb-3 Es similar al muestreo doble solo que se puede repetir (n) veces. Puede ser por conglomerados o estratificado.

      p.mb-3 En el muestreo por conglomerados se dividen los lotes en subgrupos, luego la cantidad de conglomerados es definida aleatoriamente y se combinan en una sola muestra, esto debido al gran tamaño del lote de forma que se facilita el análisis de los datos, además las variaciones en cada grupo son menores, que las variaciones entre los grupos.

      p.mb-5 A continuación puede tener una comparación entre las ventajas y desventajas del muestreo por conglomerados.


      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-md-6.col-lg-5.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/23.svg')          
          h2.text-center Ventajas
          p.mb-0 - Eficiencia en el manejo de los datos porque son grandes y dispersos.
          p.mb-0 - No es necesario tener listado de toda la población.
        
        .col-md-6.col-lg-5.tarjeta.color-adicional-1.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/24.svg')          
          h2.text-center.text-white Desventajas
          p.mb-0.text-white  - El error estándar es mayor.
          p.mb-0.text-white  - Cálculo de error estándar es más complejo.


      p.mb-0 En el muestreo estratificado se eligen las muestras de acuerdo con variables comunes los cuales catalogan los estratos dentro de los lotes.
      p.mb-5 A continuación puede tener una comparación entre las ventajas y desventajas del muestreo estratificado.

      .tarjeta--container.row.mb-5.justify-content-center(data-aos='fade-right')
        .col-md-6.col-lg-5.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/23.svg')          
          h2.text-center Ventajas
          p.mb-0 - Estimaciones más precisas.
          p.mb-0 - Muestra más parecida al lote.
        
        .col-md-6.col-lg-5.tarjeta.color-adicional-1.p-5
          .row.justify-content-center.mb-4
            .col-4
                img(src='@/assets/curso/temas/t2/24.svg')          
          h2.text-center.text-white Desventajas
          p.mb-0.text-white  - Se debe conocer la población o lote y la distribución de las variables.


      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Muestreo de aceptación

      p.mb-5 Consiste en validar la muestra de un lote donde se toma la decisión de aceptación o rechazo; si la muestra es rechazada se procede a realizar la inspección del 100% del lote. Se pueden analizar según:

      ul.lista-ul--color
          li.d-flex
            i.fas.fa-thread
            p.mb-0  #[b Variables:] se realizan mediciones para determinar la aceptación o rechazo.

      .row.justify-content-start.mb-5
        .col-sm-12.col-lg-8
          p.mb-0 #[b Ejemplo:] la empresa fabrica 3.600 unidades de la referencia B-454 por semana. Los auditores seleccionan muestras de 259 unidades de B-454, y mide el contorno de busto de la camiseta para determinar si acepta o rechaza todo el lote. La camiseta es defectuosa si el contorno mide más de 0.55 cm, el cual es (LES) o menos de 0.2 cms, que es el límite de especificación inferior (LEI) de la medida proporcionada en cada talla. Además, se establecen AQL y RQL, para determinar si el lote en las mediciones de las 259 unidades no sobrepasó los valores. Según el plan de muestreo se define que si 3 unidades no cumplen los límites se rechaza el lote. Al inspeccionar las 259 unidades todas cumplen las mediciones en sus contornos, por lo tanto, se acepta el lote.

      ul.lista-ul--color
          li.d-flex
            i.fas.fa-thread
            p.mb-0  #[b Atributos:] de acuerdo con las características no medibles, se determinan cuantos defectos son aceptados para determinar la aceptación o rechazo del lote.

      .row.justify-content-start.mb-5
        .col-sm-12.col-lg-8
          p.mb-0 #[b Ejemplo:] se reciben 10000 conos de hilo blanco; el plan de muestreo especifica que el AQL es de 1,5% y el RQL es 5%, el resultado del cálculo es que se deben inspeccionar 209 conos y se rechazará el lote se encuentran 6 defectuosos. Al realizar la inspección se encuentran 7 unidades defectuosas, por lo tanto, el lote se rechaza.
      
      p.mb-3 Se pueden generar formatos para realizar muestreos como el siguiente en el proceso de corte:
      img.mb-5(src='@/assets/curso/temas/t2/25.png', alt='')

      .bg-full-width.bg-color-7.br-4.mb-0
        .p-full-width-2
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/bg/6.svg', alt='')
            .col-lg-9.mb-cus
               h2.mb-3.text-white Formato muestreos de calidad en extendido y corte
               p.mb-0.text-white Puede descargar este formato en PDF para su uso.
            .col-lg-2
               a.boton.color-acento-botones(:href="obtenerLink('/downloads/formato_muestreo_de_calidad_en_extendido_y_corte.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download 

      

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

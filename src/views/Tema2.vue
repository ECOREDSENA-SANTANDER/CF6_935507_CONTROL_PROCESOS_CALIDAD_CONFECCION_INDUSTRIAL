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

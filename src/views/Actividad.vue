<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos relacionados con el control de calidad en los procesos de confección, patronaje, trazo y corte, confección, terminados, insumos, materiales y textiles, así como los tipos de inspección, técnicas de muestreo, muestreo de aceptación por variables y atributos, y criterios para validar la calidad del producto según especificaciones técnicas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del componente Control de calidad: requisitos, inspecciones de calidad y muestreo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer únicamente los tipos de maquinaria básica utilizados en confección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender el control de calidad en procesos, insumos, materia prima y materiales para definir requisitos e inspecciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estudiar solo las operaciones de planchado, empaque y embalaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar las inspecciones por observaciones informales del operario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 2,
          texto:
            'Al estructurar un sistema de control de calidad, ¿de qué elemento se parte para tener una visión global del proceso?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Del color comercial de la prenda terminada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Del listado de proveedores de insumos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Del precio final asignado por el área de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Del diagrama operativo de la prenda a confeccionar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 3,
          texto:
            'En el control de calidad, ¿qué diferencia existe entre variables y atributos de una prenda?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las variables son características cuantitativas y los atributos son características no cuantificables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las variables son defectos críticos y los atributos son siempre defectos menores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las variables solo se aplican al empaque y los atributos solo al planchado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las variables corresponden al proveedor y los atributos al precio del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes aspectos corresponde a un requisito de calidad en patronaje?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de cajas necesarias para el despacho del pedido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación del producto en vitrina comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las medidas del patrón con y sin costuras, cantidad de piezas, señalización, aplomos, piquetes y plantillas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La selección de descuentos y promociones para el cliente final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 5,
          texto: 'En el control de calidad del trazo, ¿qué se debe revisar?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La temperatura de la plancha industrial y la presión de empaque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La alineación de piezas, organización, cantidad de piezas y ancho de trazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo el número de operarios disponibles en la planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente el diseño de la etiqueta comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 6,
          texto: '¿Qué se debe controlar durante el tendido de la tela?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alineación de capas, uniformidad del tendido, cantidad de capas, tiempos de reposo, lado de tela y defectos visibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente la cantidad de botones y cremalleras disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo la presentación de la prenda en el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño de la campaña publicitaria del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un aspecto clave en la inspección de la operación de corte?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la revisión de piquetes para acelerar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar los paquetes terminados sin rotulación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el número de capas sin revisar el trazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Respetar el trazo, revisar simetrías, piquetes, puntos y corte de piezas de forro y entretela.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 8,
          texto:
            '¿Qué información debe contener el tiqueteado de las piezas cortadas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del cliente y el precio de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El código de la máquina y el turno del operario únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Número consecutivo de la pieza, talla y referencia, ubicado por el revés de la tela en un lugar visible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El listado de normas internacionales de laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 9,
          texto:
            'En el proceso de fusionado, ¿qué condiciones deben verificarse?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de unidades vendidas en el mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Temperatura, tiempo, presión, alineación y posición de la pieza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El color de la bolsa y el tipo de gancho para empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La publicación de resultados en carteleras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 10,
          texto:
            '¿Qué caracteriza la inspección en pie de máquina o de producto en proceso?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se realiza únicamente después del empaque final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se aplica solo a los insumos rechazados por proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplaza el uso de la ficha técnica del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El inspector revisa la pieza al terminar la operación, por derecho y revés, y analiza el método utilizado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes aspectos se audita en producto terminado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prenda limpia, sin hebras, costuras uniformes, sin roturas y medidas acordes con la ficha técnica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente el número de proveedores registrados por la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo la ubicación del rollo de tela en bodega.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de software instalado en el computador de diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 12,
          texto: '¿Para qué se confecciona un lote piloto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para omitir la inspección de producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reemplazar todas las pruebas de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para comprobar el cumplimiento de requisitos y prever problemas de calidad antes de producir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para eliminar la necesidad de patrones y ficha técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 13,
          texto: 'En los procesos de terminados, ¿qué se revisa en planchado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la cantidad de piezas cortadas por talla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la alineación de capas en el tendido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cálculo del tamaño de muestra del lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Uniformidad, quiebres según especificación, ausencia de arrugas, temperatura, limpieza, presión y humedad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 14,
          texto: '¿Qué aspectos se validan en una inspección de estampado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplomos, piquetes y márgenes de costura del patrón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Colores precisos, diseño, tamaño, posición y ubicación conforme al requerimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Número de conos de hilo inspeccionados por muestreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Altura de dientes y tensión del hilo de la máquina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 15,
          texto:
            '¿Qué se debe revisar en el control de calidad de los textiles?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Uniformidad del color, ausencia de deshilados, huecos, motas, limpieza, ancho de tela y comportamiento ante agua y temperatura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el número de cajas usadas en el embalaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el nombre del vendedor del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La decoración del punto de venta y la promoción comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 16,
          texto: 'Según el componente, ¿qué es la inspección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso de diseñar nuevas referencias sin controlar requisitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actividad de empacar prendas sin revisar su calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La acción de comparar un material, proceso o producto contra especificaciones dadas previamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un método exclusivo para medir únicamente el color de los hilos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 17,
          texto:
            'Según la cantidad de productos a inspeccionar, ¿cuáles son métodos de inspección mencionados?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planchado, doblado, embalaje y lavandería.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trazo, corte, fusionado y empaquetado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño, compras, ventas y publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Inspección al 100 %, por muestreo, comprobación y cero inspección.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 18,
          texto: '¿Qué caracteriza el muestreo probabilístico?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo se aplica cuando no existen lotes ni productos definidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utiliza selección aleatoria y permite que todos los productos puedan hacer parte de la muestra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se basa únicamente en la opinión del operario sin uso de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rechaza automáticamente todos los lotes inspeccionados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 19,
          texto:
            'En las técnicas de muestreo, ¿qué representan las variables N, n, k e I?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tipos de defectos críticos, mayores, menores y aceptables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fases de planchado, empaque, embalaje y lavandería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Tamaño de población o lote, tamaño de muestra, intervalo de salto y arranque aleatorio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Normas de ensayo para cremalleras, botones, hilos y textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
        {
          id: 20,
          texto: '¿En qué consiste el muestreo de aceptación?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En validar una muestra de un lote para decidir su aceptación o rechazo; si se rechaza, se inspecciona el 100 % del lote.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'En revisar solo el color del empaque sin analizar defectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En aceptar siempre el lote sin aplicar criterios de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En usar únicamente una muestra visual sin relación con variables o atributos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: '',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los aprendices sobre los conceptos relacionados con el control de calidad en los procesos de confección, patronaje, trazo y corte, confección, terminados, insumos, materiales y textiles, así como los tipos de inspección, técnicas de muestreo, muestreo de aceptación por variables y atributos, y criterios para validar la calidad del producto según especificaciones técnicas.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: false,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>

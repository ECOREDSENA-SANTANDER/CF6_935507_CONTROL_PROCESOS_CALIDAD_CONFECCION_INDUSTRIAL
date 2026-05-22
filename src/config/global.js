export default {
  global: {
    Name: 'Control de calidad: requisitos, inspecciones de calidad y muestreo',
    Description:
      'Comprender el control de calidad en los procesos, insumos, materia prima y materiales e identificar y definir los requisitos de calidad del producto y en cada uno de los procesos. Conocer los diferentes tipos de inspecciones para establecer las inspecciones a realizar en el proceso. Reconocer los tipos de muestreo y la terminología estadística para definir el plan de muestreo a desarrollar.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Control de calidad en los procesos de confección e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de calidad en patronaje',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Control de calidad en trazo y corte',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de calidad en confección',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Control de calidad en terminados',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Control de calidad en insumos, materiales y textiles',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inspección y muestreos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos de inspección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de muestreo',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ancho útil',
      significado:
        'ancho máximo para usar en el corte, en donde no se incluyen los orillos de tela de ambos lados.',
    },
    {
      termino: 'AQL',
      significado:
        'siglas de las palabras en inglés acceptance quality level (nivel de calidad aceptable). es el nivel de calidad aceptado por el cliente, el cual debe estar especificado en la ficha técnica, contrato u órdenes de compra.',
    },
    {
      termino: 'Atributos',
      significado:
        'son las características cualitativas. puede sumar varias características a la vez. ejemplo: el producto más económico.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'medida de variabilidad que indica qué tan esparcidos se encuentran los datos con respecto a la media. es el mismo error estándar.',
    },
    {
      termino: 'Estadística descriptiva',
      significado:
        'técnica matemática encargada de recoger, almacenar, organizar, realizar cálculos y presentar en tablas o gráficos un grupo de datos con el fin de describir sus comportamientos.',
    },
    {
      termino: 'Inspección',
      significado:
        'acción de comparar un material, proceso o producto conforme a las características descritas previamente, con el fin de determinar el grado de cumplimiento de los requisitos establecidos para validar la conformidad de lo inspeccionado.',
    },
    {
      termino: 'LEI',
      significado:
        'límite de especificación inferior. es la medida de tolerancia mínima que puede aceptar una determinada variable.',
    },
    {
      termino: 'LES',
      significado:
        'límite de especificación superior. es la medida de tolerancia máxima que puede aceptar una determinada variable.',
    },
    {
      termino: 'Lote',
      significado:
        'conjunto de prendas con características comunes a las cuales se realizan inspecciones y auditorías de calidad.',
    },
    {
      termino: 'Ltpd',
      significado:
        'traducción de las siglas en inglés lot tolerance proportion defective. proporción defectuosa tolerable en el lote; es el peor nivel de calidad del lote que el cliente puede aceptar.',
    },
    {
      termino: 'Marco muestral',
      significado: 'listado completo de los productos de un lote.',
    },
    {
      termino: 'Marras',
      significado: 'desviarse de lo recto. (RAE).',
    },
    {
      termino: 'Media',
      significado: 'es el resultado del promedio de los datos.',
    },
    {
      termino: 'Mediana',
      significado:
        'es el valor de la variable que ocupa la posición central de los datos, en el supuesto de que exista un número impar de datos.',
    },
    {
      termino: 'Moda',
      significado:
        'valor de la variable que más se repite en una determinada cantidad de datos.',
    },
    {
      termino: 'Muestra representativa',
      significado:
        'unidades que reflejan las características clave del lote con relación al objetivo de estudio.',
    },
    {
      termino: 'Muestreo',
      significado:
        'técnica de seleccionar las prendas o piezas que hacen parte de la muestra para realizar las inspecciones.',
    },
    {
      termino: 'Parámetro',
      significado:
        'valor que describe a un lote o una prenda; también se puede hablar de características.',
    },
    {
      termino: 'Probabilidad',
      significado: 'es la posibilidad de ocurrencia de un evento.',
    },
    {
      termino: 'Rango',
      significado:
        'conjunto de datos donde se describe el menor y el mayor valor utilizado en la medición de la variabilidad.',
    },
    {
      termino: 'RQL',
      significado:
        'siglas de las palabras en inglés rejectable quality level (nivel de calidad rechazable). es el nivel de calidad que rechaza el cliente.',
    },
    {
      termino: 'Variabilidad',
      significado:
        'presencia de diferentes resultados de los datos que se presentan respecto a una característica.',
    },
    {
      termino: 'Variabilidad controlada',
      significado:
        'proceso donde se detectan causas inevitables o no asignables, de azar.',
    },
    {
      termino: 'Variabilidad incontrolada',
      significado:
        'proceso incontrolado debido a que las causas de los errores son evitables o asignables.',
    },
    {
      termino: 'Variables',
      significado:
        'son las características cuantitativas observables; por tanto, se pueden medir sus valores. ejemplo: ancho de dobladillo.',
    },
    {
      termino: 'Variación alta',
      significado:
        'presenta una alta dispersión de los datos; por lo tanto, el proceso es incontrolado.',
    },
    {
      termino: 'Varianza',
      significado:
        'medida de variabilidad de un conjunto de datos respecto a su media aritmética. es la desviación estándar elevada al cuadrado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Evans, J., & Lindsay, W. (2015). Administración y Control de la calidad (9th ed.). Cengage.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=786',
    },
    {
      referencia:
        'Gutiérrez, H. (2013). Control estadístico de la calidad y Seis Sigma (3rd ed.). McGraw-Hill Interamericana.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=280',
    },
    {
      referencia:
        'Jaramillo, J. (1990). Control de calidad en la confección. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://hdl.handle.net/11404/4253',
    },
    {
      referencia:
        'Pola, Á. (2009). Aplicación de la estadística al control de calidad. Marcombo.',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45842',
    },
    {
      referencia: 'SENA. (1990). Procedimientos para el control de la calidad.',
      link: 'https://hdl.handle.net/11404/4260',
    },
    {
      referencia:
        'Verdoy, P. Mahiques, J. Sagasta, S. & Sirviente, R. (2006). Manual de control estadístico de calidad: teoría y aplicaciones.',
      link: 'http://www.digitaliapublishing.com.bdigital.sena.edu.co/a/14732/manual-de-control-estadistico-de-calidad---teoria-y-aplicaciones',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

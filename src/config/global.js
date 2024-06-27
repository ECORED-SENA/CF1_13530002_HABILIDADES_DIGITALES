export default {
  global: {
    componenteFormativo: 'Empezando el aprendizaje, dispositivos y TIC ',
    descripcionCurso:
      'En el presente componente formativo, se abordarán los conceptos básicos relacionados con los dispositivos usados para navegar en Internet, así como la influencia que tiene el uso de las tecnologías de información y comunicación - TIC en diferentes contextos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: 'Empezando el aprendizaje, dispositivos y TIC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Impacto de las TIC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo de las TIC',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Las TIC en el entorno académico',
            hash: 't_1_3',
          },

          {
            numero: '1.4',
            titulo: 'Las TIC en el entorno laboral',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dispositivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de dispositivos para conectarse a Internet',
            hash: 't_2_1',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Las TIC en el entorno laboral',
      referencia:
        'Ministerio TIC Colombia. (2021). <i>Yul, el cocinero llanero que con tecnología ha dado a conocer sus recetas</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hw6TzcBSsRg',
    },
    {
      tema: 'Las TIC en el entorno laboral',
      referencia:
        'Ministerio TIC Colombia. (2021). <i>Domit Express: una aplicación que promociona el comercio local y vincula al “mototaxismo”</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mxic99aIV_s',
    },
    {
      tema: 'Las TIC en el entorno laboral',
      referencia:
        'Colombia Digital. (2015). <i>¿Qué son las TIC?</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o37jl_n6zOk',
    },
  ],
  glosario: [
    {
      termino: 'Android',
      significado:
        'sistema operativo que usan los teléfonos móviles y está basado en Linux.',
    },
    {
      termino: 'Raspberry',
      significado:
        'dispositivo embebido con una placa base emulando un computador de bajo costo para aplicaciones específicas.',
    },
    {
      termino: 'TIC',
      significado: 'acrónimo de Tecnologías de La Información y Comunicación.',
    },
    {
      termino: 'Wifi',
      significado:
        'es una marca comercial que también es usada para designar a las tecnologías de red sin cable (Moreira, 2011).',
    },
  ],
  referencias: [
    {
      referencia:
        'Atzori, L., Iera, A. & Morabito, G. (2017). Understanding the internet of things: Definition, Potentials, And Societal Role of a Fast Evolving Paradigm. <i>Ad Hoc Networks, 56</i>, pp. 122-140.',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316?via%3Dihub',
    },
    {
      referencia:
        'Castro, S., Medina, B. & Camargo, L., (2016) Supervisión y Control Industrial a través de Teléfonos Inteligentes Usando un Computador de Placa Única Raspberry Pi. <i>Inf. Tecnol. 27</i>(2), pp. 121-130.',
      link:
        'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-07642016000200015&lng=en&nrm=iso&tlng=en',
    },
    {
      referencia:
        'Eines, M. E., Aranda, N. I. & Amilivia, L. A.. (2018) Las Píldoras de Contenidos. <i>Revista Iberoamericana de Tecnología en Educación y Educación en Tecnología, 21</i>, pp.15-23.',
      link:
        'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1850-99592018000100003&lng=es&nrm=iso',
    },
    {
      referencia:
        'Moreira, G. (2011). Democracia WiFi: Dinámicas de la política y la comunicación en la era digital. <i>Quórum Académico, 8</i>(2),pp. 183-208.',
      link:
        'https://biblat.unam.mx/es/revista/quorum-academico/articulo/democracia-wifi-dinamicas-de-la-politica-y-la-comunicacion-en-la-era-digital',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Lider del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhonaimer Díaz Cerquera',
          cargo: 'Experto Temático',
          centro:
            'Centro de Desarrollo Agroempresarial y Turístico - Regional Huila',
        },
        {
          nombre: 'Miguel Ricardo Rivera Lizcano',
          cargo: 'Experto Temático',
          centro: 'Dirección General',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

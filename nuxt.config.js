export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css">
  <script src="https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js"></script>*/
  head: {
    title: process.env.npm_package_name || "Mariel Evha ABIR",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: process.env.npm_package_description,
        name: "Mariel Evha ABIR",
        content: process.env.npm_package_description || "Je suis un ingénieur logiciel spécialisé dans l'étude & la création d'expériences numériques exceptionnelles pour booster votre activité."
      },
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:site', content: '@abir'},
      { property: 'twitter:title', content: process.env.npm_package_author},
      { property: 'twitter:description', content: process.env.npm_package_description},
      { property: 'twitter:image', content: ''},
      { property: 'twitter:creator', content: '@abir'},
      { property: 'google-site-verification', content: 'Yn7QIZYWhqGLwH_w5XZzJMr1im8qnKfJ2toBDsRCrJA'},
    ],
    bodyAttrs: {
      id: 'body',
    },
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css"
      },

      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/simple-line-icons.css" },
      { rel: "stylesheet", href: "/assets/css/slicknav.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/slick.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
      { rel: "stylesheet", href: "/assets/css/custom.css" },
    ],
    script: [
      { src: "/assets/js/jquery-3.2.0.min.js" },
      { src: "/assets/js/popper.min.js" },
      { src: "/assets/js/bootstrap.min.js" },
      { src: "/assets/js/jquery.slicknav.min.js" },
      { src: "/assets/js/isotope.pkgd.min.js" },
      { src: "/assets/js/owl.carousel.min.js" },
      { src: "/assets/js/slick.min.js" },
      { src: "/assets/js/typed.js" },
      { src: "/assets/js/jquery.scrollUp.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js" },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English'
          },
          {
            code: 'fr',
            name: 'Français'
          }
        ],
        //defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            en: {
              me: {
                name: "Mariel Evha ABIR",
                email: "mariel.abir@hotmail.com",
                phone: "+212 700 47 41 17",
                zip_code: "20033",
                follow: "Follow Me",
                github: "https://github.com/marielevha",
                linkedin: "https://www.linkedin.com/in/mariel-evha-abir",
              },
              menu: {
                home: 'Home',
                about: 'About',
                blog: 'Blog',
                contact: 'Contact',
                resume: 'Resume',
                services: 'Services',
                works: 'Works',
              },
              hero: {
                introduce: "Hey! I am",
                self: "I produce",
                specialities: {
                  //sp1: "Freelancer.",
                  sp2: "Web solutions.",
                  sp3: "Mobile solutions.",
                },
                desc: "I am a software engineer specializing in the study and creation of exceptional digital experiences to boost your business.",
                download: "Hire Me",
              },
              about: {
                title: "About Me",
                desc: "I'm a fullstack developer. I have a passion for creating solution providing better user experience, clean, ergonomic, interactive, minimalistic, responsive and user-friendly user interface, developed by modular, scalable and functional code.",
                labels: {
                  name: "Name",
                  birthday: "Date of birth",
                  address: "Address",
                  zip_code: "Zip code",
                  email: "Email",
                  phone: "Phone",
                },
                values: {
                  birthday: "November 21, 1998",
                  address: "Racine Casablanca, Morocco",
                },
                download: "Download CV",
              },
              contact: {
                title: "Contact Me",
                labels: {
                  email: "Email",
                  phone: "Phone",
                  linkedin: "Linkedin",
                  button: "Send Message now",
                  letter: "letters",
                },
                placeholders: {
                  name: "Enter your name",
                  email: "Your email address",
                  subject: "Enter the discussion title",
                  message: "Write your message",
                },
                validations: {
                  name: {
                    1: "Name is required",
                  },
                  email: {
                    1: "Email is required",
                    2: "Email is not valid",
                  },
                  subject: {
                    1: "Subject is required",
                    2: "Subject must have at least",
                  },
                  message: {
                    1: "Message is required",
                    2: "Message must have at least",
                  },
                },
              },
              services: {
                title: "My Services",
                sub_title: "I can make this awesome things",
                desc: "I understand what your business means to you, your requirements considering trends to boost your productivity.",
                items: {
                  1: {
                    title: "Mobile Development",
                    desc: "I will build your IOS and/or Android mobile application, convert your website into a mobile application",
                  },
                  2: {
                    title: "Web Development",
                    desc: "Design of tailor-made web applications, e-commerce sites, showcase sites to boost your business  ",
                  },
                  3: {
                    title: "OCR & Biometry",
                    desc: "A complete solution for business",
                  },
                  4: {
                    title: "Maintenance",
                    desc: "A complete solution for corrective, scalable and adaptive maintenance for your enterprise applications",
                  },
                }
              },
              resume: {
                title: "Resume",
                education: {
                  title: "Education",
                  items: {
                    1: {
                      period: "2022",
                      degree: "Master MIADE",
                      school: "Suptechnology",
                      desc: "",
                    },
                    2: {
                      period: "2020",
                      degree: "Professional license in web and mobile development",
                      school: "University of the Littoral Opal Coast (ULCO)",
                      desc: "",
                    },
                    3: {
                      period: "2017",
                      degree: "Baccalaureate",
                      school: "School Chretienne Daniel",
                      desc: "",
                    },
                  }
                },
                experience: {
                  title: "Experience",
                  items: [
                    {
                      project_title: "Migration GED vers IBM Cloud Pack For Automation",
                      project_customer: "ONCF",
                      project_desc: "I participated in the migration of ONCF's GED to IBM Cloud Pack For Automation as part of the dematerialization of the tender process.",
                      project_tags: ['filenet', 'baw', 'bpm', 'icn', 'cmis', 'ldap', 'sso'],
                      project_link: 'https://www.ibm.com/cloud/cloud-pak-for-business-automation',
                    },
                    {
                      project_title: "eSignAnyWhere - LHM",
                      project_customer: "Lafarge Holcim Maroc",
                      project_desc: "I also contributed to the integration of Namirial's eSignAnyWhere - eSAW digital signature solution into the LafargeHolcim_Maroc - LHM intranet. The organization and participation in project and business workshops with LHM, functional adaptation of eSAW to the needs formulated by the contracting authority, training of employees, etc.",
                      project_tags: ['eSignAnyWhere', 'namirial', 'sso', 'ldap', '.net', 'mssql', 'iis'],
                      project_link: 'https://www.esignanywhere.net',
                    },
                    {
                      project_title: "World Countries",
                      project_customer: "Anonymous",
                      project_desc: "My mission was to set up a rest api whose goal is to expose data on countries, cities, languages, currencies in addition to the functionality of retrieving cities near a given position while respecting the standards openapi.",
                      project_tags: ['nodejs', 'swagger', 'rapidapi', 'mongodb'],
                      project_link: 'https://rapidapi.com/Maevha/api/world-countries1',
                    },
                    {
                      project_title: "OCR Web",
                      project_customer: "GEMADEC",
                      project_desc: "Our mission was to set up a solution allowing the dematerialization of CIN (2008 and 2020 versions), CS (2008 and 2020 versions), PASSPORT, Moroccan PERMITS using technologies such as Python, Easyocr, based on Tesseract OCR from google and of the Django framework for the web.",
                      project_tags: ['python', 'easyocr', 'tesseract', 'django', 'mrz'],
                      project_link: 'javascript:void(0);',
                    },
                    {
                      project_title: "SASDA Point Of Sale",
                      project_customer: "SASDA",
                      project_desc: "SASDA POS is a point-of-sale web application, developed to meet the needs expressed relating to the optimization of cash register activities by automating the sales process and product inventory.",
                      project_tags: ['php', 'laravel', 'vuejs', 'postgres'],
                      project_link: 'javascript:void(0);',
                    },
                    {
                      project_title: "Alfresco GED",
                      project_customer: "Togocom",
                      project_desc: "I participated in the development of a SHARE module of an ECM/GEIDE solution with Alfresco Community 6, in the integration and configuration of the Record management and Activity module as well as the integration of the graphic charter.",
                      project_tags: ['aflfresco', 'mysql', 'less'],
                      project_link: 'https://www.alfresco.com',
                    },
                  ],
                },
                skills: {
                  title: "Skills",
                  items: {
                    1: {
                      title: "Android",
                    },
                    2: {
                      title: "PHP/Laravel",
                    },
                    3: {
                      title: "Vue JS",
                    },
                    4: {
                      title: "Java EE/Spring Boot",
                    },
                    5: {
                      title: "Flutter",
                    },
                    6: {
                      title: "Python",
                    },
                  }
                },
                awards: {
                  title: "Awards",
                },
              },
              project: {
                title: "My Projects",
                filters: {
                  0: {
                    key: "all",
                    title: "All"
                  },
                  1: {
                    key: "mApp",
                    title: "Mobile Application",
                  },
                  2: {
                    key: "wApp",
                    title: "Web Application"
                  },
                  3: {
                    key: "api",
                    title: "API REST",
                  },
                  4: {
                    key: "biometry",
                    title: "OCR & Biometry",
                  },
                  5: {
                    key: "content",
                    title: "Content Integration",
                  },
                  //4: "E-commerce",
                  //5: "Biometry",
                },
                works: {
                  mApp: [
                    {
                      title: "Title project",
                      customer: "Customer Name",
                      image: "https://via.placeholder.com/360x309",
                      link: "#",
                    }
                  ],
                  wApp: [
                    {
                      title: "SASDA POS",
                      customer: "SASDA",
                      image: "https://via.placeholder.com/360x309",
                      link: "#",
                    }
                  ],
                  api: [
                    {
                      title: "World Countries",
                      customer: "Anonymous",
                      image: "https://via.placeholder.com/360x309",
                      link: "https://rapidapi.com/Maevha/api/world-countries1/"
                    }
                  ],
                  content: [
                    {
                      title: "IBM Business Automation Workflow",
                      customer: "ONCF",
                      image: "https://via.placeholder.com/360x309",
                      link: "#"
                    }
                  ],
                },
              },
              footer: {
                text: "Copyright ©All rights reserved | Powered with",
                by: "by",
              },
            },
            fr: {
              me: {
                name: "Mariel Evha ABIR",
                email: "mariel.abir@hotmail.com",
                phone: "+212 700 47 41 17",
                zip_code: "20033",
                follow: "Suivez moi",
                github: "https://github.com/marielevha",
                linkedin: "https://www.linkedin.com/in/mariel-evha-abir",
              },
              menu: {
                home: 'Accueil',
                about: 'A propos',
                blog: 'Blog',
                contact: 'Contact',
                resume: 'Résumé',
                services: 'Services',
                works: 'Projets',
              },
              hero: {
                introduce: "Hey! Je suis",
                self: "Je produit des",
                specialities: {
                  //sp1: "Freelanceur.",
                  sp2: "solutions Web.",
                  sp3: "solutions Mobile.",
                },
                desc: "Je suis un ingénieur logiciel spécialisé dans l'étude & la création d'expériences numériques exceptionnelles pour booster votre activité.",
                download: "Contactez-moi",
              },
              about: {
                title: "A propos de moi",
                desc: "Je suis développeur Fullstack. J'ai une passion pour la création de solution offrant une meilleure expérience utilisateur, une interface utilisateur propre, ergonomique, interactive, minimaliste, réactive et conviviale, développée par un code modulaire, évolutif et fonctionnel.",
                labels: {
                  name: "Name",
                  birthday: "Date of birth",
                  address: "Address",
                  zip_code: "Zip code",
                  email: "Email",
                  phone: "Téléphone",
                },
                values: {
                  birthday: "21 Novembre 1998",
                  address: "Racine Casablanca, Morocco",
                },
                download: "Téléchager mon CV",
              },
              contact: {
                title: "Me contacter",
                labels: {
                  email: "Adresse mail",
                  phone: "Téléphone",
                  linkedin: "Linkedin",
                  button: "Envoyer",
                  letter: "caractères",
                },
                placeholders: {
                  name: "Saisissez votre nom",
                  email: "Votre adresse email",
                  subject: "Saisissez le sujet",
                  message: "Rédigez votre message",
                },
                validations: {
                  name: {
                    1: "Le nom est obligatoire",
                  },
                  email: {
                    1: "L'e-mail est obligatoire",
                    2: "L'e-mail n'est pas valide",
                  },
                  subject: {
                    1: "Le sujet est obligatoire",
                    2: "Le sujet doit avoir au moins",
                  },
                  message: {
                    1: "Le message est obligatoire",
                    2: "Le message doit avoir au moins",
                  },
                },
              },
              services: {
                title: "Mes Services",
                sub_title: "Ce que je fais pour vous",
                desc: "Je comprends ce que votre entreprise signifie pour vous, vos exigences compte tenu des tendances pour booster votre productivité.",
                items: {
                  1: {
                    title: "Application Mobile",
                    desc: "Je construirai votre application mobile IOS et/ou Android, conversion de votre site web en application mobile",
                  },
                  2: {
                    title: "Développement Web",
                    desc: "Conception d'applications web sur mesure, de sites e-commerces, de sites vitrines pour booster votre entreprise",
                  },
                  3: {
                    title: "OCR & Biométrie",
                    desc: "Une solution complète pour les entreprises",
                  },
                  4: {
                    title: "Maintenance",
                    desc: "Une solution complète pour la maintenance corrective, évolutive et adaptative pour vos applications d'entreprise",
                  },
                }
              },
              resume: {
                title: "Résumé",
                education: {
                  title: "Education",
                  items: {
                    1: {
                      period: "2022",
                      degree: "Master MIADE",
                      school: "Suptechnology",
                      desc: "",
                    },
                    2: {
                      period: "2020",
                      degree: "Licence Professionnelle en développement intenet et mobile",
                      school: "Université du Littoral Côte d'Opale (ULCO)",
                      desc: "",
                    },
                    3: {
                      period: "2017",
                      degree: "Baccalauréat",
                      school: "Ecole Chétienne Daniel",
                      desc: "",
                    },
                  }
                },
                experience: {
                  title: "Expériences",
                  items: [
                    {
                      project_title: "Migration GED vers IBM Cloud Pack For Automation",
                      project_customer: "ONCF",
                      project_desc: "J'ai participé à la migation de la GED de l'ONCF vers IBM Cloud Pack For Automation dans le cadre de la dématérialisation du processus d'appel d'offres.",
                      project_tags: ['filenet', 'baw', 'bpm', 'icn', 'cmis', 'ldap', 'sso'],
                      project_link: 'https://www.ibm.com/cloud/cloud-pak-for-business-automation',
                    },
                    {
                      project_title: "eSignAnyWhere - LHM",
                      project_customer: "Lafarge Holcim Maroc",
                      project_desc: "J'ai également contribué à l'intégration de la solution de signatures numériques eSignAnyWhere - eSAW de Namirial dans l'intranet de LafargeHolcim_Maroc - LHM. L'organisation et la participation à des ateliers projets et métiers avec LHM, adaptation fonctionnelle de eSAW au besoin formulé par la maîtrise d'ouvrage, formation des collaborateurs, etc.",
                      project_tags: ['eSignAnyWhere', 'namirial', 'sso', 'ldap', '.net', 'mssql', 'iis'],
                      project_link: 'https://www.esignanywhere.net',
                    },
                    {
                      project_title: "World Countries",
                      project_customer: "Anonyme",
                      project_desc: "Ma mission était de mettre en place une api rest dont le but est d'exposer des données sur les pays, villes, langues, les devises en plus de la fonctionnalité de récupérer les villes à proximité d'une position donnée tout en respectant les standards openapi.",
                      project_tags: ['nodejs', 'swagger', 'rapidapi', 'mongodb'],
                      project_link: 'https://rapidapi.com/Maevha/api/world-countries1',
                    },
                    {
                      project_title: "OCR Web",
                      project_customer: "GEMADEC",
                      project_desc: "Notre mission était de mettre en place une solution permettant la dématérialisation de CIN (versions 2008 et 2020), CS (versions 2008 et 2020), PASSEPORT, PERMIS Marocains utilisant avec des technologies telle que Python, Easyocr, basé sur Tesseract OCR de google et  du framework Django pour le web.",
                      project_tags: ['python', 'easyocr', 'tesseract', 'django', 'mrz'],
                      project_link: 'javascript:void(0);',
                    },
                    {
                      project_title: "SASDA POS",
                      project_customer: "SASDA",
                      project_desc: "SASDA POS est une application web de point de vente, développé pour répondre aux besoins exprimés relatif à l'optimisation des activités de caisse en automatisant le processus de vente et l'inventaire des produits.",
                      project_tags: ['php', 'laravel', 'vuejs', 'postgres'],
                      project_link: 'javascript:void(0);',
                    },
                    {
                      project_title: "Alfresco GED",
                      project_customer: "Togocom",
                      project_desc: "J'ai participé au développement d’un module SHARE d’une solution ECM/GEIDE avec Alfresco Community 6, à l'intégration et  la configuration du module Record management et Activity ainsi que de l'intégration de la charte graphique.",
                      project_tags: ['aflfresco', 'mysql', 'less'],
                      project_link: 'https://www.alfresco.com',
                    },
                  ],
                },
                skills: {
                  title: "Compétences",
                  items: {
                    1: {
                      title: "Android",
                    },
                    2: {
                      title: "PHP/Laravel",
                    },
                    3: {
                      title: "Vue JS",
                    },
                    4: {
                      title: "Java EE/Spring Boot",
                    },
                    5: {
                      title: "Flutter",
                    },
                    6: {
                      title: "Python",
                    },
                  }
                },
                awards: {
                  title: "Awards",
                },
              },
              project: {
                title: "Mes Projets",
                filters: {
                  0: {
                    key: "all",
                    title: "Tous"
                  },
                  1: {
                    key: "mApp",
                    title: "Application Mobile",
                  },
                  2: {
                    key: "wApp",
                    title: "Application Web"
                  },
                  3: {
                    key: "api",
                    title: "API",
                  },
                  4: {
                    key: "biometry",
                    title: "OCR & Biométrie",
                  },
                  5: {
                    key: "content",
                    title: "Gestion de contenu",
                  },
                  //4: "Commerce Electronique",
                },
                work: [
                  {
                    title: "IBM Business Automation Workflow",
                    customer: "ONCF",
                    image: "https://via.placeholder.com/360x309",
                    link: "#",
                    filter: "content",
                  },
                  {
                    title: "World Countries",
                    customer: "Anonymous",
                    image: "/assets/img/projects/world-countries.PNG",
                    link: "https://rapidapi.com/Maevha/api/world-countries1",
                    filter: "api",
                  },
                  {
                    title: "SASDA POS",
                    customer: "SASDA",
                    image: "/assets/img/projects/sasda-pos.PNG",
                    link: "#",
                    filter: "wApp",
                  },
                  {
                    title: "eSignAnyWhere - LHM",
                    customer: "Lafarge Holcim Maroc",
                    image: "/assets/img/projects/esign.png",
                    link: "https://www.esignanywhere.net",
                    filter: "biometry",
                  },
                ],
                works: {
                  mApp: [
                    {
                      title: "Title project",
                      customer: "Customer Name",
                      image: "https://via.placeholder.com/360x309",
                      link: "#",
                    },
                  ],
                  wApp: [
                    {
                      title: "SASDA POS",
                      customer: "SASDA",
                      image: "https://via.placeholder.com/360x309",
                      link: "#",
                    },
                  ],
                  api: [
                    {
                      title: "World Countries",
                      customer: "Anonymous",
                      image: "https://via.placeholder.com/360x309",
                      link: "https://rapidapi.com/Maevha/api/world-countries1/"
                    },
                  ],
                  content: [
                    {
                      title: "IBM Business Automation Workflow",
                      customer: "ONCF",
                      image: "https://via.placeholder.com/360x309",
                      link: "#"
                    },
                  ],
                  biometry: [
                    {
                      title: "Title project",
                      customer: "Customer Name",
                      image: "https://via.placeholder.com/360x309",
                      link: "#",
                    },
                  ],
                },
              },
              footer: {
                text: "Copyright ©Tous droits réservés | Propulsé avec",
                by: "par",
              },
            },
          }
        }
      }
    ],
    '@nuxtjs/axios',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

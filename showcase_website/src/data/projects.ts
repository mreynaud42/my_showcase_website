
type description = {
    title?: string;
    description: {
        en: string[];
        fr: string[];
    }
    imgs?: string[];
    videos?: string[];
}

export type Project = {
    id: string;
    title: string;
    shortDescription: description;
    fullDescription: description[];
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "cub3D",
        title: "Cub3D",
        shortDescription: {
            description: {
                en: [
                    "Cub3D is a 42 School project where you create a simple first-person game that simulates a 3D environment from a 2D map."
                ],
                fr: [
                    "Cub3D est un projet de l'école 42 dans lequel nous créons un jeu simple à la première personne qui simule un environnement 3D à partir d'une carte 2D."
                ]
            },
            imgs: [ "/img_project/cub3d/Screenshot_42_cub.png" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "Cub3D is a project from École 42 that involves creating a small first-person game inspired by the very first 3D games. The program displays an environment in which the user can move around, as if exploring a maze.",
                        "The aim of the project is to understand how a computer can give an impression of depth and space (3D) from a two-dimensional environment. The user can move around, rotate the camera, and interact visually with the scenery.",
                        "Cub3D allows you to work on spatial representation, graphic display, and motion management. It is a project that links the logic of the program to a concrete visual rendering, similar to a simple but complete video game.",
                    ],
                    fr: [
                        "Cub3D est un projet de l'école 42 qui consiste à créer un petit jeu à la première personne inspiré des tout premiers jeux en 3D. Le programme affiche un environnement dans lequel l'utilisateur peut se déplacer, comme s'il explorait un labyrinthe.",
                        "L'objectif du projet est de comprendre comment un ordinateur peut donner une impression de profondeur et d'espace (3D) à partir d'un environnement 2D. L'utilisateur peut se déplacer, faire pivoter la caméra et interagir visuellement avec le décor.",
                        "Cub3D permet de travailler sur la représentation spatiale, l'affichage graphique et la gestion des mouvements. Il s'agit d'un projet qui relie la logique du programme à un rendu visuel concret, similaire à un jeu vidéo simple mais complet.",
                    ]
                },
                imgs: [ "/img_project/cub3d/Screenshot_42_cub.png" ]
            }
        ],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/qxxel/cub3d",
        featured: true,
    },

    {
        id: "transcendence",
        title: "Transcendence",
        shortDescription: {
            description: 
            {
                en: [
                    "Transcendence is 42’s final project where you build a fully functional web app featuring Pong, user interactions, and account management.",
                ],
                fr: [
                    "Transcendence est le projet final de l'école 42, dans lequel vous créez une application web entièrement fonctionnelle concernant le jeu Pong, des interactions utilisateur et la gestion de comptes.",
                ]
            },
            imgs: [ "/img_project/transcendence/home.png" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "Transcendence is the final project in the core curriculum at École 42. It involves creating a complete application, accessible via a browser, integrating the game Pong, user interactions, and account management.",
                        "This project draws on all the skills acquired previously: organization, teamwork, and the design of a coherent and functional product. It is similar to a real professional project, where the goal is to deliver a fully functional application.",
                    ],
                    fr: [
                        "Transcendance est le projet final du programme d'études de base de l'école 42. Il consiste à créer une application complète, accessible via un navigateur, intégrant le jeu Pong, les interactions avec les utilisateurs et la gestion des comptes.",
                        "Ce projet fait appel à toutes les compétences acquises précédemment : organisation, travail d'équipe et conception d'un produit cohérent et fonctionnel. Il s'apparente à un véritable projet professionnel, dont l'objectif est de livrer une application pleinement fonctionnelle."
                    ]
                },
                videos: [ "/img_project/transcendence/gameplay.webm" ]
            }
        ],
        technologies: [ "TypeScript", "JavaScript", "HTML", "CSS", "Docker", "Makefile" ],
        githubUrl: "https://github.com/qxxel/ft_transcendence",
        featured: true,
    },
    
    {
        id: "push-swap",
        title: "Push-swap",
        shortDescription: {
            description: {
                en: [
                    "Push_swap is a project about optimizing number sorting using a limited set of operations while minimizing the number of moves.",
                ],
                fr: [
                    "Push_swap est un projet visant à optimiser le tri des nombres à l'aide d'un ensemble limité d'opérations tout en minimisant le nombre de mouvements.",
                ]
            },
            imgs: [ "/img_project/push_swap/radix_sort.gif" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "Push-swap is a project focused on optimization and logic. The goal is to sort a list of numbers using a very limited set of possible actions. The challenge is not only to sort, but to do so with as few actions as possible.",
                        "This project teaches how to analyze a problem, think about effective strategies, and compare different solutions.",
                    ],
                    fr: [
                        "Push-swap est un projet axé sur l'optimisation et la logique. L'objectif est de trier une liste de nombres en utilisant un ensemble très limité d'actions possibles. Le défi consiste non seulement à trier, mais aussi à le faire avec le moins d'actions possible.",
                        "Ce projet enseigne comment analyser un problème, réfléchir à des stratégies efficaces et comparer différentes solutions.",
                    ]
                },
                imgs: [ "/img_project/push_swap/radix_sort.gif" ]
            }
        ],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/push_swap",
        featured: true,
    },

    {
        id: "fract-ol",
        title: "Fract-ol",
        shortDescription: {
            description: {
                en: [
                    "Fract-ol is a 42 project where you create an interactive fractal viewer, exploring graphic programming and visual rendering from simple mathematical rules.",
                ],
                fr: [
                    "Fract-ol est un projet 42 dans lequel vous créez un visualiseur de fractal interactif, explorant la programmation graphique et le rendu visuel à partir de règles mathématiques simples.",
                ]
            },
            imgs: [ "/img_project/fract-ol/mandelbrot.png" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "Fract-ol is a project from École 42 that aims to create a program capable of displaying images called fractals. These are unique visual forms that feature repetitive patterns rich in detail, even when zooming in on the image.",
                        "The project involves generating these images and allowing the user to interact with them: moving around, zooming in, and changing colors. This helps users understand how a computer builds an image from simple rules and how a program can respond to user actions.",
                        "Fract-ol is primarily an introductory project to graphic programming. It emphasizes logic, program structure, and the link between abstract rules and concrete visual results, without requiring advanced mathematical knowledge.",
                    ],
                    fr: [
                        "Fract-ol est un projet de l'école 42 qui vise à créer un programme capable d'afficher des images appelées fractales. Il s'agit de formes visuelles uniques qui présentent des motifs répétitifs riches en détails, même lorsque l'on zoome sur l'image.",
                        "Le projet consiste à générer ces images et à permettre à l'utilisateur d'interagir avec elles : se déplacer, zoomer et changer les couleurs. Cela aide les utilisateurs à comprendre comment un ordinateur construit une image à partir de règles simples et comment un programme peut répondre aux actions de l'utilisateur.",
                        "Fract-ol est avant tout un projet d'initiation à la programmation graphique. Il met l'accent sur la logique, la structure des programmes et le lien entre les règles abstraites et les résultats visuels concrets, sans nécessiter de connaissances mathématiques avancées.",
                    ]
                },
                imgs: [ "/img_project/fract-ol/mandelbrot.png", "/img_project/fract-ol/julia_0.285_0.01.png", "/img_project/fract-ol/julia_-0.5_-0.6.png" ]
            }
        ],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/fract-ol",
        featured: true,
    },

    {
        id: "minishell",
        title: "Minishell",
        shortDescription: {
            description: {
                en: [
                    "Minishell is a project where you recreate a simplified terminal that parses and executes user commands like a real shell.",
                ],
                fr: [
                    "Minishell est un projet qui consiste à recréer un terminal simplifié qui analyse et exécute les commandes utilisateur comme un véritable shell.",
                ]
            },
            imgs: [ "/img_project/minishell/screenshot_minishell.png" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "Minishell is a project that involves recreating a simplified version of a terminal, i.e., the tool used to give commands to a computer in text form. The program must understand what the user writes, perform the correct actions, and display the results.",
                        "This project provides a better understanding of how a system interprets commands, manages multiple actions in sequence, and communicates with the computer.",
                    ],
                    fr: [
                        "Minishell est un projet qui consiste à recréer une version simplifiée d'un terminal, c'est-à-dire l'outil utilisé pour donner des commandes à un ordinateur sous forme de texte. Le programme doit comprendre ce que l'utilisateur écrit, effectuer les actions correctes et afficher les résultats.",
                        "Ce projet permet de mieux comprendre comment un système interprète les commandes, gère plusieurs actions en séquence et communique avec l'ordinateur.",
                    ]
                },
                imgs: [ "/img_project/minishell/screenshot_minishell.png" ]
            }
        ],
        technologies: [ "C", "Makefile", "Shell" ],
        githubUrl: "https://github.com/mreynaud42/minishell3",
        featured: false,
    },
    
    {
        id: "philosophers",
        title: "Philosophers",
        shortDescription: {
            description: {
                en: [
                    "The Philosophers is a project about managing concurrent processes and shared resources without deadlocks or conflicts.",
                ],
                fr: [
                    "Philosophers est un projet qui porte sur la gestion des processus concurrents et des ressources partagées sans blocages ni conflits.",
                ]
            },
            imgs: [ "/img_project/philosophers/dining_philosophers_problem.png" ]
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "The Philosophers project is inspired by a classic problem in computer science. It involves several “philosophers” who must share resources without coming into conflict. The goal is to correctly manage simultaneous actions without deadlocks or errors.",
                        "This project helps us understand how a program can manage multiple tasks at the same time, and why coordination is essential.",
                    ],
                    fr: [
                        "Le projet Philosophers s'inspire d'un problème classique en informatique. Il met en scène plusieurs « philosophes » qui doivent partager des ressources sans entrer en conflit. L'objectif est de gérer correctement des actions simultanées sans blocage ni erreur.",
                        "Ce projet nous aide à comprendre comment un programme peut gérer plusieurs tâches en même temps, et pourquoi la coordination est essentielle.",
                    ]
                },
                imgs: [ "/img_project/philosophers/dining_philosophers_problem.png" ]
            }
        ],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/philo",
        featured: false,
    },

    {
        id: "ft_irc",
        title: "ft_IRC",
        shortDescription: {
            description: 
            {
                en: [
                    "The IRC project involves building a real-time chat server that manages multiple users, messaging, and communication rules.",
                ],
                fr: [
                    "Le projet IRC consiste à créer un serveur de chat en temps réel qui gère plusieurs utilisateurs, la messagerie et les règles de communication.",
                ]
            }
        },
        fullDescription: [
            {
                description: {
                    en: [
                        "The IRC project consists of creating a chat server that allows multiple users to communicate in real time, similar to old-fashioned chat rooms. Users can log in, exchange messages, and join discussion groups.",
                        "This project provides insight into how applications communicate with each other remotely and how a service can manage multiple users at the same time. It covers concepts such as connection management, messaging, and communication rules.",
                        "IRC is a project focused on real-time exchanges and coordination between users. It illustrates the design of an interactive service and the implementation of common rules to ensure smooth and organized communication.",
                    ],
                    fr: [
                        "Le projet IRC consiste à créer un serveur de chat qui permet à plusieurs utilisateurs de communiquer en temps réel, à l'instar des anciens salons de discussion. Les utilisateurs peuvent se connecter, échanger des messages et rejoindre des groupes de discussion.",
                        "Ce projet donne un aperçu de la manière dont les applications communiquent entre elles à distance et dont un service peut gérer plusieurs utilisateurs simultanément. Il aborde des concepts tels que la gestion des connexions, la messagerie et les règles de communication.",
                        "IRC est un projet axé sur les échanges et la coordination en temps réel entre les utilisateurs. Il illustre la conception d'un service interactif et la mise en œuvre de règles communes visant à garantir une communication fluide et organisée.",
                    ]
                }
            }
        ],
        technologies: [ "C++", "Makefile" ],
        featured: false,
    },

]
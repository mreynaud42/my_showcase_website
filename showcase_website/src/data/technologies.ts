
export type Technologie = {
    name: string;
    p: {
        en: string;
        fr: string;
    }
    url?: string;
}

export const technologies: Technologie[] = [
    {
        name: "TypeScript",
        p: {
            en: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
            fr: "Le TypeScript est un langage de programmation typé qui s'appuie sur JavaScript."
        },
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "JavaScript",
        p: {
            en: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
            fr: "LeJavaScript est un langage de programmation utilisé par les développeurs pour concevoir des sites web interactifs."
        },
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "HTML",
        p: {
            en: "HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.",
            fr: "Le HTML est utilisé afin de créer et de représenter le contenu d'une page web et sa structure."
        },
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "CSS",
        p: {
            en: "CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.",
            fr: "Le CSS est un langage informatique qui décrit la présentation des documents HTML et XML."
        },
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "Makefile",
        p: {
            en: "A makefile contains a sequence of entries, each of which specifies a build target, some dependencies, and the build scripts of commands to be executed.",
            fr: "Les fichiers Makefile permettent d'utiliser des variables, qui permettent de stocker potentiellement n'importe quelle valeur."
        },
        url: "https://www.gnu.org/software/make/manual/make.html"
    },
    {
        name: "C",
        p: {
            en: "The C is a programming Language, developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc.",
            fr: "Le C est un langage de programmation procédural et généraliste. Il est qualifié de langage de bas niveau dans le sens où chaque instruction du langage est conçue pour être compilée en un nombre d'instructions machine assez prévisible en termes d'occupation mémoire et de charge de calcul."
        },
        url: "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    {
        name: "C++",
        p: {
            en: "C++ is a cross-platform language that can be used to create high-performance applications.",
            fr: "Le C++ est un langage de programmation orienté objet, à la fois fiable et puissant. C++ a été créé par Bjarne Stroustrup et est apparu sur la scène en 1985. Depuis lors, le C++ est devenu un puissant langage de programmation axé sur la vitesse, l'efficacité et la polyvalence."
        },
        url: "https://cppreference.com/"
    },
    {
        name: "Shell",
        p: {
            en: "A shell script is a computer program designed to be run by a Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be command languages.",
            fr: "Le langage Shell se réfère à un type d'interface en ligne de commande, ou Command Line Interface, utilisé pour interagir avec un système Unix ou Unix-like."
        },
        url: "https://en.wikipedia.org/wiki/Shell_script"
    },
    {
        name: "Docker",
        p: {
            en: "Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",
            fr: "Le Docker est un outil de virtualisation permettant de déployer des applications facilement à l'aide de conteneurs."
        },
        url: "https://docs.docker.com/"
    },
    {
        name: "React",
        p: {
            en: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more \"seamless\".",
            fr: "React est une bibliothèque JavaScript frontale à code source ouvert permettant de créer des interfaces utilisateur ou des composants d'interface utilisateur."
        },
        url: "https://legacy.reactjs.org/"
    },
]

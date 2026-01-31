
export type Technologie = {
    name: string;
    p: string;
    url?: string;
}

export const technologies: Technologie[] = [
    {
        name: "TypeScript",
        p: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "JavaScript",
        p: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "HTML",
        p: "HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.",
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "CSS",
        p: "CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.",
        url: "https://developer.mozilla.org/en-US/"
    },
    {
        name: "Makefile",
        p: "A makefile contains a sequence of entries, each of which specifies a build target, some dependencies, and the build scripts of commands to be executed.",
        url: "https://www.gnu.org/software/make/manual/make.html"
    },
    {
        name: "C",
        p: "The C is a programming Language, developed by Dennis Ritchie for creating system applications that directly interact with the hardware devices such as drivers, kernels, etc.",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    {
        name: "C++",
        p: "C++ is a cross-platform language that can be used to create high-performance applications.",
        url: "https://cppreference.com/"
    },
    {
        name: "Shell",
        p: "A shell script is a computer program designed to be run by a Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be command languages.",
        url: "https://en.wikipedia.org/wiki/Shell_script"
    },
    {
        name: "Docker",
        p: "Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.",
        url: "https://docs.docker.com/"
    },
    {
        name: "React",
        p: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more \"seamless\".",
        url: "https://legacy.reactjs.org/"
    },
]

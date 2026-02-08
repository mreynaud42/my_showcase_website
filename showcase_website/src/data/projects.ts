
type description = {
    title?: string;
    description: string[];
    imgs?: string[];
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
            description: [
                "Cub3D is a project from École 42 that involves creating a small first-person game inspired by the very first 3D games. The program displays an environment in which the user can move around, as if exploring a maze.",
                "The aim of the project is to understand how a computer can give an impression of depth and space (3D) from a two-dimensional environment. The user can move around, rotate the camera, and interact visually with the scenery.",
                "Cub3D allows you to work on spatial representation, graphic display, and motion management. It is a project that links the logic of the program to a concrete visual rendering, similar to a simple but complete video game.",
            ],
            imgs: [ "/img_project/cub3d/Screenshot_42_cub.png" ]
        },
        fullDescription: [],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/qxxel/cub3d",
        featured: true,
    },

    {
        id: "transcendence",
        title: "Transcendence",
        shortDescription: {
            description: [
                "Transcendence is the final project in the core curriculum at École 42. It involves creating a complete application, accessible via a browser, integrating the game Pong, user interactions, and account management.",
                "This project draws on all the skills acquired previously: organization, teamwork, and the design of a coherent and functional product. It is similar to a real professional project, where the goal is to deliver a fully functional application.",
            ],
        },
        fullDescription: [],
        technologies: [ "TypeScript", "JavaScript", "HTML", "CSS", "Docker", "Makefile" ],
        githubUrl: "https://github.com/qxxel/ft_transcendence",
        featured: true,
    },
    
    {
        id: "push-swap",
        title: "Push-swap",
        shortDescription: {
            description: [
                "Push-swap is a project focused on optimization and logic. The goal is to sort a list of numbers using a very limited set of possible actions. The challenge is not only to sort, but to do so with as few actions as possible.",
                "This project teaches how to analyze a problem, think about effective strategies, and compare different solutions.",
            ],
            imgs: [ "/img_project/push_swap/radix_sort.gif" ]
        },
        fullDescription: [],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/push_swap",
        featured: true,
    },

    {
        id: "fract-ol",
        title: "Fract-ol",
        shortDescription: {
            description: [
                "Fract-ol is a project from École 42 that aims to create a program capable of displaying images called fractals. These are unique visual forms that feature repetitive patterns rich in detail, even when zooming in on the image.",
                "The project involves generating these images and allowing the user to interact with them: moving around, zooming in, and changing colors. This helps users understand how a computer builds an image from simple rules and how a program can respond to user actions.",
                "Fract-ol is primarily an introductory project to graphic programming. It emphasizes logic, program structure, and the link between abstract rules and concrete visual results, without requiring advanced mathematical knowledge.",
            ],
            imgs: [ "/img_project/fract-ol/mandelbrot.png", "/img_project/fract-ol/julia_0.285_0.01.png", "/img_project/fract-ol/julia_-0.5_-0.6.png" ]
        },
        fullDescription: [ ],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/fract-ol",
        featured: true,
    },

    {
        id: "minishell",
        title: "Minishell",
        shortDescription: {
            description: [
                "Minishell is a project that involves recreating a simplified version of a terminal, i.e., the tool used to give commands to a computer in text form. The program must understand what the user writes, perform the correct actions, and display the results.",
                "This project provides a better understanding of how a system interprets commands, manages multiple actions in sequence, and communicates with the computer.",
            ],
            imgs: [ "/img_project/minishell/screenshot_minishell.png" ]
        },
        fullDescription: [ ],
        technologies: [ "C", "Makefile", "Shell" ],
        githubUrl: "https://github.com/mreynaud42/minishell3",
        featured: false,
    },
    
    {
        id: "philosophers",
        title: "Philosophers",
        shortDescription: {
            description: [
                "The Philosophers project is inspired by a classic problem in computer science. It involves several “philosophers” who must share resources without coming into conflict. The goal is to correctly manage simultaneous actions without deadlocks or errors.",
                "This project helps us understand how a program can manage multiple tasks at the same time, and why coordination is essential.",
            ],
            imgs: [ "/img_project/philosophers/dining_philosophers_problem.png" ]
        },
        fullDescription: [],
        technologies: [ "C", "Makefile" ],
        githubUrl: "https://github.com/mreynaud42/philo",
        featured: false,
    },

    {
        id: "ft_irc",
        title: "ft_IRC",
        shortDescription: {
            description: [
                "The IRC project consists of creating a chat server that allows multiple users to communicate in real time, similar to old-fashioned chat rooms. Users can log in, exchange messages, and join discussion groups.",
                "This project provides insight into how applications communicate with each other remotely and how a service can manage multiple users at the same time. It covers concepts such as connection management, messaging, and communication rules.",
                "IRC is a project focused on real-time exchanges and coordination between users. It illustrates the design of an interactive service and the implementation of common rules to ensure smooth and organized communication.",
            ],
        },
        fullDescription: [],
        technologies: [ "C++", "Makefile" ],
        featured: false,
    },

]
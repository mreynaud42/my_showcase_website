
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
        id: "Lorem-ipsum",
        title: "Lorem ipsum",
        shortDescription: {
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mi faucibus, ultrices sem ac, feugiat quam. Etiam vitae tellus enim. Vivamus in pellentesque erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eros eros, dapibus vitae ex in, hendrerit molestie libero. Donec pharetra purus eleifend massa maximus molestie sit amet ac nibh. Nam tempus purus id augue vestibulum, bibendum placerat libero placerat."
            ],
            imgs: ["/menu.svg"]
        },
        fullDescription: [
            {
                title: "test1",
                description: ["test1", "test1", "test1"],
            },
            {
                title: "test2",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed mi faucibus, ultrices sem ac, feugiat quam. Etiam vitae tellus enim. Vivamus in pellentesque erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eros eros, dapibus vitae ex in, hendrerit molestie libero. Donec pharetra purus eleifend massa maximus molestie sit amet ac nibh. Nam tempus purus id augue vestibulum, bibendum placerat libero placerat.",
                    "Phasellus malesuada placerat orci non condimentum. Praesent rutrum tortor sed ornare pellentesque. Praesent eleifend metus neque, eu vestibulum neque tempus sit amet. Donec egestas quam ac luctus condimentum. Duis scelerisque nibh quam. Aliquam quis ornare leo. Quisque eleifend, enim eu interdum eleifend, augue mi finibus diam, ut lobortis odio velit in massa. Pellentesque sit amet blandit mauris. Phasellus lacus nisi, tincidunt sed rutrum a, convallis id dui. ",
                    "Nulla vehicula ligula vel diam feugiat, nec blandit quam finibus. Phasellus nulla dolor, vulputate et consectetur tincidunt, hendrerit sit amet dui. Suspendisse potenti. Proin cursus justo nec semper luctus. Nam consequat risus quis volutpat rutrum. Nullam ut augue felis. Mauris pretium vestibulum velit, quis feugiat elit consequat at. Praesent gravida mauris elit, a aliquam tortor commodo vitae. Phasellus vitae mi sit amet leo pretium suscipit ac nec tortor. Integer sit amet metus ac tellus varius eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer convallis pulvinar purus et laoreet. Vestibulum sit amet rutrum massa, in pharetra leo. Duis sed ultrices ligula. Integer sit amet turpis sit amet orci placerat pulvinar sit amet at dui.",
                ]
            }
        ],
        technologies: ["React", "TypeScript", "CSS", "html", "docker", "JavaScript", "PHP", "Three.JS", "Makefile", "C", "C++", "Rust", "assembly"],
        githubUrl: "/",
        demoUrl: "/",
        featured: true,
    },
    {
        id: "testtest",
        title: "testtest",
        shortDescription: {
            description: [
                "Ut at nulla laoreet, convallis turpis et, rhoncus dui. Duis efficitur semper nisi pulvinar fermentum. Pellentesque auctor erat sed diam elementum, nec convallis nibh viverra. Nulla convallis turpis sit amet nunc viverra fermentum. Nunc ultricies justo vel nulla pharetra, et congue ante congue. Praesent id nibh augue. Donec pulvinar tempor nisi quis varius. Maecenas mollis pharetra magna, ut elementum mi rhoncus vitae. Mauris rutrum tellus a magna rutrum varius. Vestibulum vestibulum venenatis sem. Ut ornare varius tincidunt. Aliquam vel nulla congue, pellentesque mi sit amet, faucibus diam."
            ],
            imgs: ["/notExiste.png"]
        },
        fullDescription: [
            {
                title: "testtest2",
                description: ["testtest testtest testtest", "testtest", "testtest"],
            },
        ],
        technologies: ["C"],
        featured: true,
    }
]
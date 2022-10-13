window.scrollTo(0, 0);
const aboutMe = document.getElementById("aboutme");
const techContainer = document.getElementById("tech");
const socialmediaContainer = document.getElementById("socialmedia");
const projectsContainer = document.getElementById("projects");

const socialMedia = [
  {
    displayName: "GitHub",
    link: "https://github.com/sebastianhaber/",
    icon: `
        <iconify-icon
            icon="akar-icons:github-fill"
            height="1.5rem"
        ></iconify-icon>
    `,
  },
  {
    displayName: "LinkedIn",
    link: "https://linkedin.com/in/sebastianhaber/",
    icon: `
        <iconify-icon
            icon="akar-icons:linkedin-box-fill"
            height="1.5rem"
        ></iconify-icon>
    `,
  },
];
const technologies = [
  {
    name: "ReactJS",
    icon: `<iconify-icon icon="logos:react"></iconify-icon>`,
  },
  {
    name: "React Native (begginer)",
    icon: `<iconify-icon icon="logos:react"></iconify-icon>`,
  },
  {
    name: "TailwindCSS",
    icon: `<iconify-icon icon="logos:tailwindcss-icon"></iconify-icon>`,
  },
  {
    name: "GraphQL",
    icon: `<iconify-icon icon="logos:graphql"></iconify-icon>`,
  },
  {
    name: "MySQL",
    icon: `<iconify-icon icon="logos:mysql-icon"></iconify-icon>`,
  },
  {
    name: "PHP (basic knowledge)",
    icon: `<iconify-icon icon="logos:php"></iconify-icon>`,
  },
  {
    name: "SASS (SCSS)",
    icon: `<iconify-icon icon="logos:sass"></iconify-icon>`,
  },
  {
    name: "LESS",
    icon: `<iconify-icon icon="logos:less"></iconify-icon>`,
  },
  {
    name: "Git",
    icon: `<iconify-icon icon="logos:git-icon"></iconify-icon>`,
  },
  {
    name: "Figma",
    icon: `<iconify-icon icon="logos:figma"></iconify-icon>`,
  },
  {
    name: "BEM",
    icon: `<iconify-icon icon="logos:bem"></iconify-icon>`,
  },
];

const projects = [
  {
    title: "Bezbekownia BETA",
    tech: "React, Redux, TailwindCSS, PHP REST API + MySQL",
    description: "Memes, memes, memes. A fullstack project made only by me.",
    link: "https://beta.bezbekownia.pl/",
    imageUrl: "./assets/bezbekownia BETA.png",
  },
  {
    title: "E-Commerce Fake Shop",
    tech: "React, ContextAPI, styled-components, FakerAPI",
    description: "",
    link: "https://sebastianhaber.github.io/fakershop",
    imageUrl: "./assets/e-commerce fake shop.png",
  },
  {
    title: "Infonite",
    tech: "React, ContextAPI, SCSS, FortniteAPI",
    description: "App with newest news and shop in Fortnite.",
    link: "https://sebastianhaber.github.io/infonite",
    imageUrl: "./assets/infonite.png",
  },
  {
    title: "T&H EU-Fahrschule",
    tech: "React, styled-components, ContenfulCMS",
    description: "Website created for client from Germany.",
    link: "https://th-eu-fahrschule.de/",
    imageUrl: "./assets/theufahrschule.png",
  },
  {
    title: "5v.pl (Redesign)",
    tech: "HTML, SCSS",
    description: "",
    link: "https://sebastianhaber.github.io/redesigned/5v",
    imageUrl: "./assets/5v redesigned.png",
  },
  {
    title: "Expenses",
    tech: "React, Firebase, ChakraUI",
    description:
      "WebApp with expense monitoring.\n*creating a better version in ReactNative*",
    link: "https://sebastianhaber.github.io/expenses",
    imageUrl: "./assets/expenses.png",
  },
];

const badgeClassName =
  "bg-neutral-900 text-white font-bold flex gap-2 items-center py-2 px-4 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors";

const loadSocialMedia = () => {
  let socialmediaChild = "";

  socialMedia.map((media) => {
    socialmediaChild += `
              <li>
                <a href="${media.link}" class='${badgeClassName}' rel="noreferrer" target="_blank">
                    ${media.icon}
                </a>
              </li>
          `;
  });
  socialmediaContainer.innerHTML = socialmediaChild;
};
const loadTechnologies = () => {
  let techChild = "";

  technologies.map((tech) => {
    techChild += `
                <li class='${badgeClassName} cursor-auto hover:bg-neutral-900 technology'>
                  ${tech.icon}
                  ${tech.name}
                </li>
            `;
  });
  techContainer.innerHTML = techChild;
};
const loadProjects = () => {
  let projectsChild = "";

  projects.map((project) => {
    projectsChild += `
        <li class="min-w-[230px] max-w-[500px] flex-1">
            <a href="${project.link}" class="relative group w-full h-[200px] block">
            <img
                src="${project.imageUrl}"
                alt="${project.title}"
                class="w-full h-[200px] block object-cover rounded-lg"
            />
            <div
                class="scale-0 group-hover:scale-100 transition-all absolute top-2 right-2 bg-black text-white w-10 h-10 p-2 rounded-lg"
            >
                <iconify-icon
                icon="akar-icons:link-chain"
                height="1.5rem"
                ></iconify-icon>
            </div>
            </a>
            <div class="py-4">
                <p class="font-bold text-2xl">${project.title}</p>
                <p class="text-neutral-400">${project.description}</p>
                <p class="text-neutral-400"><span class="font-bold">Tech:</span> ${project.tech}</p>
            </div>
        </li>
    `;
  });
  projectsContainer.innerHTML = projectsChild;
};

const loadData = () => {
  loadSocialMedia();
  loadTechnologies();
  loadProjects();

  gsap.from(socialmediaContainer.children, {
    y: "-=100",
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    delay: 6,
    ease: "elastic.out(1, 0.3)",
  });
  gsap.from(document.getElementById("heading-tech"), {
    opacity: 0,
    stagger: 0.2,
    delay: 3,
  });
  gsap.from(techContainer.children, {
    y: "+=100",
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    delay: 3,
    ease: "back.out(1.7)",
  });
  gsap.from(document.getElementById("heading-projects"), {
    opacity: 0,
    stagger: 0.2,
    delay: 4,
  });
  gsap.from(projectsContainer.children, {
    y: "+=100",
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 4,
    ease: "bounce.out",
  });
  gsap.from(aboutMe.children, {
    x: "-=100",
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    ease: "bounce.out",
  });
  gsap.from(document.getElementById("description").children, {
    opacity: 0,
    stagger: 0.2,
    delay: 2,
  });
};

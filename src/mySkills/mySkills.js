function getImgUrl(imgFileName) {
  return new URL(`../assets/${imgFileName}`, import.meta.url).href;
}
export const html5 = {
  name: "HTML5",
  img: getImgUrl("html5.svg"),
  content:
    "Accurate usage of semantic tags. Well-structured and meaningful markup, accessibility is always part of my HTML code, familiar with HTML5 APIs.",
};

export const css3 = {
  name: "CSS3",
  img: getImgUrl("css3.svg"),
  content:
    "Highly proficient with the usage of latest CSS features like flex box and CSS grid, also very knowledgeable about CSS transitions and animations.",
};

export const javascript = {
  name: "JavaScript",
  img: getImgUrl("javascript.svg"),
  content:
    "Capable of writing clean and succinct code, familiar with the latest ES6+ features and deep understanding of OOP and Functional Programming.",
};

export const sass = {
  name: "Sass",
  img: getImgUrl("sass.svg"),
  content:
    "Able to code scalable and modular styles with this powerful CSS preprocessor. Deep understanding of mixins, extends, functions and more.",
};

export const react = {
  name: "React",
  img: getImgUrl("react.svg"),
  content:
    "Complete understanding of this powerful view library, capable of laying out new components in no time, familiar with react hooks.",
};

export const reactRouter = {
  name: "React-Router",
  img: getImgUrl("react-router.svg"),
  content:
    "Able to implement all the necessary routing to create Single Page Applications with this handy library.",
};

export const redux = {
  name: "Redux",
  img: getImgUrl("redux.svg"),
  content:
    "Deep understanding of the underlying architecture of this state management library. Proficient at implementing middleware, reducers and new actions.",
};

export const git = {
  name: "Git",
  img: getImgUrl("git.svg"),
  content:
    "Familiar with common git commands like add, commit, pull-request, branching. Understanding of semantic version control.",
};

export const nodejs = {
  name: "NodeJS",
  img: getImgUrl("nodejs.svg"),
  content:
    "Capable of taking full advantage of node's ecosystem, allowing me to use a large spectrum of handy libraries and tools.",
};

export const webpack = {
  name: "Webpack",
  img: getImgUrl("webpack.svg"),
  content:
    "Familiar with the concept of packaging and bundling entire code bases, this with the purpose of making our run web apps faster.",
};

export const babel = {
  name: "Babel",
  img: getImgUrl("babel.svg"),
  content:
    "Able to integrate this transpiler on my projects to make use of the latest ES6+ features, this with the goal of easing JS coding workflow.",
};

export const teamPlayer = {
  name: "Team Player",
  img: getImgUrl("teamwork.svg"),
  content:
    "I'm a very connective person, to me it's very ant to communicate with my colleagues as much as possible, so I like to give and ask for feedback.",
};

export const autodidact = {
  name: "Autodidact",
  img: getImgUrl("autodidact.png"),
  content:
    "Typically, I know how to tackle complex topics to learn, by carefully planning a roadmap that allows me to successfully master it in a timely manner.",
};

import { MenuProps, TechSkills } from "../types/interfaces";

export const websiteLogo: string = "/../public/assets/logo.png";
export const profilePicture: string = "/../public/assets/irl-3.png";
export const menuLabels: Array<MenuProps> = [
  { id: "1", title: "Work experience", link: "" },
  { id: "2", title: "Projects", link: "" },
  { id: "3", title: "Skills", link: "" },
];
export const techs: Array<TechSkills> = [
  {
    icon: "/assets/reactjs.svg",
    title: "ReactJS",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    icon: "/assets/nodejs.svg",
    title: "Node.js",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. ",
  },
  {
    icon: "/assets/react-native.svg",
    title: "React Native",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
  },
  {
    icon: "/assets/typescript.svg",
    title: "Typescript",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    icon: "/assets/next-js.svg",
    title: "Next.js",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
  },
];

const lightTheme = {
  iconClass: "fa-solid fa-moon",
};
const darkTheme = {
  iconClass: "fa-solid fa-sun",
};

const navInitialDataRu = {
  title: "Портфолио.",
  lang: "EN",
};
const navInitialDataEn = {
  title: "Portfolio.",
  lang: "RU",
};

const navMenuInitialDataRu = [
  {
    id: "home",
    link: "#home",
    title: "Главная",
  },
  {
    id: "about",
    link: "#about",
    title: "Обо мне",
  },
  {
    id: "skills",
    link: "#skills",
    title: "Мой стек",
  },
  {
    id: "services",
    link: "#services",
    title: "Моё портфолио",
  },
  {
    id: "contact",
    link: "#contact",
    title: "Контакты",
  },
];

const navMenuInitialDataEn = [
  {
    id: "home",
    link: "#home",
    title: "Home",
  },
  {
    id: "about",
    link: "#about",
    title: "About",
  },
  {
    id: "skills",
    link: "#skills",
    title: "Skills",
  },
  {
    id: "services",
    link: "#services",
    title: "Services",
  },
  {
    id: "contact",
    link: "#contact",
    title: "Contact",
  },
];

const homeInitialDataRu = {
  greeting: "Привет,",
  introducing: "Меня зовут Владимир",
  prophecy: "Я - Веб-разработчик",
  location: "из Москвы",
  btnText: "Нанять меня",
};
const homeInitialDataEn = {
  greeting: "Hello,",
  introducing: "My Name is Vladimir",
  prophecy: "I'm Web-developer",
  location: "From Moscow",
  btnText: "Hire Me",
};

const aboutMeInitialDataRu = {
  title: "Обо мне",
  subtitle: "Web-разработка для меня больше, чем профессия",
  text1:
    "Я долгое время работал не по призванию. Занимался продажами и закупками. Время не прошло даром - я получил богатый опыт и отточил множество мягких навыков. Наступил момент, когда я понял, что не стоит больше откладывать на потом свою тягу к разработке и пошел на курсы Яндекс Практикума по специальности Веб-разработка.",
  text2:
    "Параллельно работая, я ночами засиживался за очередной практической работой, изучал теорию и занимался на тренажере в отпуске, штудировал дополнительные материалы, чтобы, почти через год наконец-то получить заветный диплом Веб-разработчика. В процессе обучения на курсах я выполнил 6 проектов, которые добавил в свое портфолио. Это как простые одностраничные сайты с минимальной анимацией, так и полноценные многостраничные сайты с роутингом, возможностью зарегистрироваться и добавить свои данные.",
  text3:
    "Несмотря на то, что я пока еще не работаю по новой специальности, я в свободное время продолжаю изучать языки программирования, решаю задачи на Code Wars и пишу код.",
  text4:
    "Все мои работы, в том числе PET-проекты я выкладываю в виде портфолио ниже. А весь мой тернистый путь до веб-разработки можно посмотреть в моем резюме, кликнув по кнопке ниже.",
  cvLink:
    "https://hh.ru/resume/badb57a9ff0b35b6b70039ed1f6f3956487662?disableBrowserCache=true&hhtmFrom=resume_list",
  btnText: "Посмотреть резюме",
};
const aboutMeInitialDataEn = {
  title: "About Me",
  subtitle: "Web-developing is more then just a profession",
  text1:
    "For a long time I worked outside of my calling. Engaged in sales and purchases. Time has not passed in vain - I gained a lot of experience and practiced many soft skills. The moment came when I realized that I should no longer put off my craving for development for later and went to the Yandex Practicum courses in the specialty Web Development.",
  text2:
    "At the same time, while working, I sat up at night for practical assignments, studied theory and worked on a simulator during my vacation, studied additional materials in order to finally get the coveted diploma of a Web developer almost a year later. In the process of studying at the courses, I completed 6 projects that I added to my portfolio. These are both simple one-page sites with minimal animation, and full-fledged multi-page sites with routing, the ability to register and add your data.",
  text3:
    "Despite the fact that I am not yet working in a new specialty, in my free time I continue to study programming languages, solve problems on Code Wars and write code.",
  text4:
    "All my projects, including PET projects, I posted in my portfolio below. And all my thorny path to web development can be viewed in my resume by clicking on the button below.",
  cvLink:
    "https://hh.ru/resume/badb57a9ff0b35b6b70039ed1f6f3956487662?disableBrowserCache=true&hhtmFrom=resume_list",
  btnText: "Look at CV",
};

const mySkillsInitialDataRu = {
  title: "Мой стек",
  subtitle: "Используемые технологии",
  text1:
    "В своей практике использую HTML5, CSS3 и JavaScript для написания кода. Предпочитаю работать с помощью фреймворка React.js, (но также отлично управляюсь с VUE.js и Next.js. Cвободно владею TypeScript и Kotlin. Для объемных проектов использую Redux (в том числе Redux ToolKit и Redux Saga).",
  text2:
    "Ниже в портфолио прикладываю как мои ранние работы с неадаптивной версткой десктопных сайтов, так и полностью адаптивные многостраничные web-приложения с широким функционалом, запросами к внешним API и использованием сторонних библиотек.",
  yearsTextBB: "Года",
  yearsTextAB: "опыта",
  link: "https://github.com/VladimirIvancha",
  linkText: "Ссылка на мою страничку на Github Pages",
};
const mySkillsInitialDataEn = {
  title: "My Stack",
  subtitle: "My Technologies",
  text1:
    "In my practice I use HTML5, CSS3 and JavaScript to write code. I prefer to work with the React.js framework, (but I'm also great with VUE.js and Next.js. I'm fluent in TypeScript and Kotlin. I use Redux for large projects (including Redux ToolKit and Redux Saga).",
  text2:
    "Below in the portfolio I attach both my early work with non-responsive layout of desktop sites, and fully responsive multi-page web applications with wide functionality, requests to external APIs and the use of third-party libraries.",
  yearsTextBB: "Years Of",
  yearsTextAB: "Experience",
  link: "https://github.com/VladimirIvancha",
  linkText: "Link to my own page on Github Pages",
};

const portfolioTitleRU = "Моё Портфолио";
const portfolioTitleEn = "My Portfolio";

const portfolioInitialDataRu = [
  {
    id: "portfolio-01",
    link: "#",
    iconClass: "fas fa-desktop",
    title: "Web Devlopment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-02",
    link: "#",
    iconClass: "fas fa-paint-brush",
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-03",
    link: "#",
    iconClass: "fas fa-chart-line",
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-04",
    link: "#",
    iconClass: "fab fa-android",
    title: "Icon Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-05",
    link: "#",
    iconClass: "fas fa-camera-retro",
    title: "Photography",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-06",
    link: "#",
    iconClass: "fas fa-tablet-alt",
    title: "Apps Devlopment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Код",
    siteLink: "",
    btnSiteText: "Сайт",
  },
];

const portfolioInitialDataEn = [
  {
    id: "portfolio-01",
    link: "#",
    iconClass: "fas fa-desktop",
    title: "Web Devlopment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi? ",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-02",
    link: "#",
    iconClass: "fas fa-paint-brush",
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-03",
    link: "#",
    iconClass: "fas fa-chart-line",
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-04",
    link: "#",
    iconClass: "fab fa-android",
    title: "Icon Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-05",
    link: "#",
    iconClass: "fas fa-camera-retro",
    title: "Photography",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-06",
    link: "#",
    iconClass: "fas fa-tablet-alt",
    title: "Apps Devlopment",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?",
    gitLink: "",
    btnGitText: "Code",
    siteLink: "",
    btnSiteText: "Site",
  },
];

const contactMeInitialDataRu = {
  title: "Контакты",
  subtitle: "Остались вопросы?",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias repellendus nobis eligendi.",
  btnText: "Напишите мне",
};
const contactMeInitialDataEn = {
  title: "Contact Me",
  subtitle: "Have Any Questions?",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam neque ipsum corrupti dolores, facere numquam voluptate aspernatur sit perferendis qui nisi modi! Recusandae deserunt consequatur voluptatibus alias repellendus nobis eligendi.",
  btnText: "Write Me",
};

export {
  lightTheme,
  darkTheme,
  navInitialDataRu,
  navInitialDataEn,
  navMenuInitialDataRu,
  navMenuInitialDataEn,
  homeInitialDataRu,
  homeInitialDataEn,
  aboutMeInitialDataRu,
  aboutMeInitialDataEn,
  mySkillsInitialDataRu,
  mySkillsInitialDataEn,
  portfolioTitleRU,
  portfolioTitleEn,
  portfolioInitialDataRu,
  portfolioInitialDataEn,
  contactMeInitialDataRu,
  contactMeInitialDataEn,
};

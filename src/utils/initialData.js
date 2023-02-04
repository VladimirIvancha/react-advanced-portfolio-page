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
    iconClass: "fa-solid fa-graduation-cap",
    title: "Научиться учиться",
    text1:
      "Одностраничный сайт о теории, техниках и процессе обучения. Мои первые шаги в программировании.",
    text2:
      "Сверстан по правилам Nested БЭМ с использованием только HTML и CSS. Неадаптивная версткамдля десктопного разрешения. Содержит анимацию, видео с канала YouTube, графические и табличные элементы.",
    gitLink: "https://github.com/VladimirIvancha/how-to-learn",
    btnGitText: "Код",
    siteLink: "https://vladimirivancha.github.io/how-to-learn/",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-02",
    iconClass: "fa-solid fa-car-side",
    title: "Cайт о путешествиях по России",
    text1:
      "Одностраничный сайт о путешествии по России. Знакомит с помощью фотографий и описывает впечатляющие места на территории России, которые можно посетить всей семьей с минимальными затратами.",
    text2:
      "Сверстан по правилам Nested БЭМ с использованием HTML, CSS и JavaScript. Адаптивная верстка, содержит flexbox и grid элементы, используются анимация и переходы.",
    gitLink: "https://github.com/VladimirIvancha/russian-travel",
    btnGitText: "Код",
    siteLink: "https://vladimirivancha.github.io/russian-travel/",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-03",
    iconClass: "fas fa-paint-brush",
    title: "Pet-проект Cool Colours",
    text1:
      "Одностраничный сайт с генерацией 5-ти рандомных цветов из всей палитры hex цветов.",
    text2:
      "Сайт сверстан с использованием HTML, CSS и JavaScript. Возможность генерации 5-ти рандомных цветов по нажатию на клавишу 'пробел'. Возможность зафиксировать/расфиксировать понравившийся цвет и продолжить генерацию других. Возможность скопировать цвет в буфер обмена по клику на его номер. Возможность сохранить номера всех 5-ти выбранных цветов через хеш в адресной строке, отправить выбранную палитру другому человеку в виде адресной строки, при вводе которой другой человек видит выбранные цвета.",
    gitLink: "https://github.com/VladimirIvancha/cool-colours",
    btnGitText: "Код",
    siteLink: "https://vladimirivancha.github.io/cool-colours/",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-04",
    iconClass: "fas fa-chart-line",
    title: "Лендниг сайта консалтинговой компании",
    text1:
      "Одностраничное приложение для Desktop-разрешения (1440px), сверстанное по макету из Figma.",
    text2:
      "Приложение создано на React.js с функциональными компонентами. Использована сторонняя библиотека 'Swyper'. Активные элементы кликабельны. Видеокнопки подгружают видеоролик из YouTube.",
    gitLink:
      "https://github.com/VladimirIvancha/react-increase-your-productivity",
    btnGitText: "Код",
    siteLink:
      "https://vladimirivancha.github.io/react-increase-your-productivity/",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-05",
    iconClass: "fa-solid fa-stopwatch",
    title: "Pet-проект Pomodoro timer",
    text1:
      "Одностраничное приложение таймера обратного отсчета по системе Pomodoro Technique, заключающейся в интенсивной работе в течении 25 мин и отдыха в течении 5 мин с последующим повторением до 5 циклов работы.",
    text2:
      "Приложение создано на React.js с функциональными компонентами. Реализована возможность переходить отдельно на таймер работы и таймер отдыха, а также в качестве бонуса на таймер StopWatch, в котором через установки можно самостоятельно задать интервал времени. Использована адаптивная Flexbox верстка, встроенные хуки UseState и UseEffect, а также сторонний кастомный хук useSound.",
    gitLink: "https://github.com/VladimirIvancha/pomodoro-timer",
    btnGitText: "Код",
    siteLink: "https://vladimirivancha.github.io/pomodoro-timer/",
    btnSiteText: "Сайт",
  },
  {
    id: "portfolio-06",
    iconClass: "fas fa-desktop",
    title: "MVP для HR Яндекс Практикума",
    text1:
      "Участие в Хакатоне. Разработка и создание MVP для HR Яндекс Практикума в составе команды из 3-х дизайнеров и 3-х разработчиков.",
    text2:
      "Сайт сверстан по BEM с использованием HTML, CSS и JavaScript. Адаптивная верстка: от экрана Desktop (1440px) до Mobile (320px). Использованы flex и grid элементы, iframe для видео и сторонние библиотеки для эфектов (slider). Проект собран с помощью Webpack",
    gitLink: "https://github.com/VladimirIvancha/hackathon-design-web",
    btnGitText: "Код",
    siteLink: "https://loner789.github.io/hackathon-design-web/",
    btnSiteText: "Сайт",
  },
];

const portfolioInitialDataEn = [
  {
    id: "portfolio-01",
    iconClass: "fa-solid fa-graduation-cap",
    title: "How to Learn",
    text1:
      "One-page site about theory, techniques and learning process. My first steps in programming.",
    text2:
      "Designed according to Nested BEM rules using only HTML and CSS. Non-adaptive layouts for desktop resolution. Contains animation, YouTube channel video, graphic and table elements.",
    gitLink: "https://github.com/VladimirIvancha/how-to-learn",
    btnGitText: "Code",
    siteLink: "https://vladimirivancha.github.io/how-to-learn/",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-02",
    iconClass: "fa-solid fa-car-side",
    title: "Russian travel",
    text1:
      "One-page site about traveling in Russia. Introduces with the help of photographs and describes impressive places in Russia that can be visited by the whole family at minimal cost.",
    text2:
      "Designed according to Nested BEM rules using HTML, CSS and JavaScript. Adaptive layout, contains flexbox and grid elements, animation and transitions are used.",
    gitLink: "https://github.com/VladimirIvancha/russian-travel",
    btnGitText: "Code",
    siteLink: "https://vladimirivancha.github.io/russian-travel/",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-03",
    iconClass: "fas fa-paint-brush",
    title: "Pet-project Cool Colours",
    text1:
      "One-page site with the generation of 5 random colors from the entire palette of hex colors.",
    text2:
      "The site is designed using HTML, CSS and JavaScript. Ability to generate 5 random colors by pressing the 'space' key. The ability to fix / unfix the color you like and continue generating others. Ability to copy a color to the clipboard by clicking on its number. The ability to save the numbers of all 5 selected colors through a hash in the address bar, send the selected palette to another person in the form of an address bar, when entered, the other person sees the selected colors.",
    gitLink: "https://github.com/VladimirIvancha/cool-colours",
    btnGitText: "Code",
    siteLink: "https://vladimirivancha.github.io/cool-colours/",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-04",
    iconClass: "fas fa-chart-line",
    title: "Consulting company website landing page",
    text1:
      "Single-page application for Desktop-resolution (1440px), laid out according to the layout from Figma.",
    text2:
      "The application is built on React.js with functional components. Third party library 'Swyper' used. Active elements are clickable. Video buttons load a video from YouTube.",
    gitLink:
      "https://github.com/VladimirIvancha/react-increase-your-productivity",
    btnGitText: "Code",
    siteLink:
      "https://vladimirivancha.github.io/react-increase-your-productivity/",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-05",
    iconClass: "fa-solid fa-stopwatch",
    title: "Pet-project Pomodoro timer",
    text1:
      "A one-page countdown timer application based on the Pomodoro Technique system, which consists of intensive work for 25 minutes and rest for 5 minutes, followed by repetition of up to 5 cycles of work.",
    text2:
      "The application is built on React.js with functional components. Implemented the ability to switch separately to the work timer and the rest timer, as well as as a bonus to the StopWatch timer, in which you can independently set the time interval through the settings. Responsive Flexbox layout, built-in UseState and UseEffect hooks, as well as a third-party custom useSound hook were used.",
    gitLink: "https://github.com/VladimirIvancha/pomodoro-timer",
    btnGitText: "Code",
    siteLink: "https://vladimirivancha.github.io/pomodoro-timer/",
    btnSiteText: "Site",
  },
  {
    id: "portfolio-06",
    iconClass: "fas fa-desktop",
    title: "MVP for HR Yandex Workshop",
    text1:
      "Participation in the Hackathon. Development and creation of an MVP for HR Yandex Practicum as part of a team of 3 designers and 3 developers.",
    text2:
      "The site is made by BEM using HTML, CSS and JavaScript. Responsive layout: from Desktop (1440px) to Mobile (320px). Used flex and grid elements, iframe for video and third-party libraries for effects (slider). The project is built with Webpack",
    gitLink: "https://github.com/VladimirIvancha/hackathon-design-web",
    btnGitText: "Code",
    siteLink: "https://loner789.github.io/hackathon-design-web/",
    btnSiteText: "Site",
  },
];

const contactMeInitialDataRu = {
  title: "Контакты",
  subtitle: "Остались вопросы?",
  text1: "Со мной можно связаться как по электронной почте, так и через социаьные сети. Все контакты оставляю ниже. Всегда готов и с радостью отвечу на любые вопросы. Благодарю Вас за то, что посетили мою страничку.",
  text2: "Всего Вам доброго!",
  btnText: "Напишите мне",
};
const contactMeInitialDataEn = {
  title: "Contact Me",
  subtitle: "Have Any Questions?",
  text1: "I can be contacted both by e-mail and through social networks. I leave all contacts below. Always ready and happy to answer any questions. Thank you for visiting my page.",
  text2: "All the best!",
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

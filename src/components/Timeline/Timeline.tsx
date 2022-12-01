import TimelineBox from "./TimelineBox";
import ColoredLink from "../ColoredLink";
import { FunctionComponent } from "react";

// {
//     label: "",
//     content: <></>,
// },

const personalInfo = [
  {
    label: "Phone",
    content: <>+989151018452</>,
  },
  {
    label: "E-mail",
    content: <>mammadtoosi@gmail.com</>,
  },
  {
    label: "Date of birth",
    content: <>1995-09-11</>,
  },
  {
    label: "Twitter",
    content: (
      <ColoredLink href="https://twitter.com/mammad2c">@mammad2c</ColoredLink>
    ),
  },
  {
    label: "Marital status",
    content: <>Single</>,
  },
  {
    label: "GitHub",
    content: (
      <ColoredLink href="https://github.com/mammad2c">
        https://github.com/mammad2c
      </ColoredLink>
    ),
  },
  {
    label: "Ponisha",
    content: (
      <ColoredLink href="https://ponisha.ir/profile/mammad2c">
        https://ponisha.ir/profile/mammad2c
      </ColoredLink>
    ),
  },
];

const summary = [
  {
    content: (
      <>
        <p>In love with Front-End technologies.</p>
        <p>
          Experiences with many Front-End technologies. Such as React, Redux,
          Webpack and so on.
        </p>
        <p>
          Freelancer from 2014. I participated in several projects such as PSD
          to HTML, writing jQuery plugins, Web application with React and ... .
        </p>
        <p>Gained a lot of experience in projects and found lovely friends.</p>
      </>
    ),
  },
];

const experiences = [
  {
    label: "Front-End Developer",
    content: (
      <>
        <h5>Freelancer</h5>
        <p>
          Freelancing in front end technologies since 2014. I participate in
          many projects and contributed on many open source projects.
        </p>
        <ul>
          <li> React </li>
          <li> Redux </li>
          <li> Vue </li>
          <li> Vuex </li>
          <li> Webpack </li>
          <li> Server Side Rendering </li>
          <li>PSD to HTML</li>
          <li>jQuery plugins</li>
        </ul>
      </>
    ),
    duration: {
      from: "2014-05",
    },
  },
  {
    label: "Front-End Developer",
    content: (
      <>
        <h5>Buzzjective</h5>
        <p>
          We are a Berlin-based software development agency specialised in
          development of e-commerce web applications. Our team is made up of
          passionate developers who love to build things that sell and grow
          explosively.
        </p>
        <p>
          <ColoredLink href="https://buzzjective.com/">website</ColoredLink>
        </p>
      </>
    ),
    duration: {
      from: "2019-05",
    },
  },
  {
    label: "React and React Native Developer",
    content: (
      <>
        <h5>Profile.ir</h5>
        <p>Profile is a social network for expert.</p>
        <p>
          In this company we developed React Native application and dashboard
          using React, Redux, Redux Saga.
        </p>
        <p>
          <ColoredLink href="https://profile.ir/">website</ColoredLink>
        </p>
      </>
    ),
    duration: {
      from: "2018-06",
      to: "2019-04",
    },
  },
  {
    label: "Front-End Developer",
    content: (
      <>
        <h5>Hamrah Doctor Company</h5>
        <p>
          HamrahDoctor is a telemedicine company that provides medical services.
          I developed some web applications for them.
        </p>
        <ul>
          <li>
            Main site of Hamrah Doctor. hamrahdoctor.com - landing page
            HTML/CSS/JS/jQuery
          </li>
          <li>Diabetes - Hamrah Doctor - React and React Material</li>
          <li>
            Blog - Hamrah Doctor - HTML/CSS/JS/jQuery integrate with Wordpress
          </li>
          <li>
            Shop - Hamrah Doctor - HTML/CSS/JS/jQuery integrate with Wordpress
            and Woocommerce.
          </li>

          <p>
            <ColoredLink href="https://hamrahdoctor.com/">website</ColoredLink>
          </p>
        </ul>
      </>
    ),
    duration: {
      from: "2018-06",
      to: "2019-04",
    },
  },
  {
    label: "Front-End Developer",
    content: (
      <>
        <h5>Paradaim Company</h5>
        <p>A software development company that that developed many projects.</p>
        <p>
          We should provide new features for current projects and also
          participate in new projects.
        </p>
        <ul>
          <li>sarashpazeman.ir</li>
          <li>hoogle.ir</li>
          <li>Teaching, for example Bootstrap 3.</li>
          <li>A little experience with ASP.net MVC</li>
        </ul>
      </>
    ),
    duration: {
      from: "2015-07",
      to: "2016-05",
    },
  },
];

const projects = [
  {
    label: "Amlak Plus",
    content: (
      <>
        <h6>amlakplus.app</h6>
        <p>
          Amlak Plus is a web application that helps you to find your dream
          home.
        </p>
        <h6>Technologies: </h6>
        <ul>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Vuetify</li>
          <li>PWA by Workbox</li>
        </ul>
        <p>
          <ColoredLink href="https://web.amlakplus.app/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Taxmaro",
    content: (
      <>
        <h6>Taxmaro.com</h6>
        <p>
          Taxmaro is a web application that helps you to manage your tax,
          company salaries, payrolls, expenses and so on ... .
        </p>
        <p>It is a complete HR-tool</p>
        <h6>Technologies: </h6>
        <ul>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Vuetify</li>
        </ul>
        <p>
          <ColoredLink href="https://taxmaro.com/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Blueworld Dataguard",
    content: (
      <>
        <h5>Dataguard.de</h5>
        <p>
          Dataguard is a data privacy and GDPR compliance tool. Blueworld is a
          web application that helps you to protect your data and for officers
          and professional users
        </p>
        <h6>Technologies: </h6>
        <ul>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Element UI</li>
          <li>E2E tests by Cypress</li>
        </ul>
        <p>
          <ColoredLink href="https://dataguard.de/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Redworld Dataguard",
    content: (
      <>
        <h5>Dataguard.de</h5>
        <p>
          Dataguard is a data privacy and GDPR compliance tool. Redworld is a
          web application that helps you to protect your data and for usual
          users.
        </p>
        <h6>Technologies: </h6>
        <ul>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Element UI</li>
          <li>Storybook</li>
          <li>E2E tests by Cypress</li>
        </ul>
        <p>
          <ColoredLink href="https://dataguard.de/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Geompu",
    content: (
      <>
        <h5>Geomp.eu</h5>
        <p>
          Nowadays a great part of all the available geospatial satellite data
          is free and accessible to everybody. But these data are still
          difficult to interpret. GeoMP helps you finding the right experts
          (freelancers, companies or universities) that know where to find and
          how to process these kind of data for your Earth Observation purposes.
        </p>
        <h6>Technologies: </h6>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React Material</li>
          <li>Storybook</li>
          <li>
            Customized Server Side Rendering via{" "}
            <ColoredLink href="https://github.com/mammad2c/mmd-react-ssr">
              https://github.com/mammad2c/mmd-react-ssr
            </ColoredLink>
          </li>
          <li>Formik and Yup for form validation</li>
        </ul>
        <p>
          <ColoredLink href="https://geomp.eu/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Tourgram",
    content: (
      <>
        <h5>Tourgram.ir</h5>
        <p>Tourgram is a social network for tourists.</p>
        <h6>Technologies: </h6>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>React Material</li>
          <li>
            Customized Server Side Rendering via{" "}
            <ColoredLink href="https://github.com/mammad2c/mmd-react-ssr">
              https://github.com/mammad2c/mmd-react-ssr
            </ColoredLink>
          </li>
          <li>Formik and Yup for form validation</li>
        </ul>
        <h6>Note: new version developed by NextJs </h6>
        <p>
          <ColoredLink href="https://tourgram.ir/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Foodjoo",
    content: (
      <>
        <h5>Foodjoo.com</h5>
        <p>
          Foodjoo is a food delivery service. We developed a website for them.
        </p>
        <p>First version was lunched in Bushehr, a city in Iran. </p>
        <h6>Technologies: </h6>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>TailwindCSS</li>
          <li>PWA via Workbox</li>
          <li>
            Customized Server Side Rendering via{" "}
            <ColoredLink href="https://github.com/mammad2c/mmd-react-ssr">
              https://github.com/mammad2c/mmd-react-ssr
            </ColoredLink>
          </li>
          <li>Formik and Yup for form validation</li>
          <li>Customized design system</li>
        </ul>
        <p>
          <ColoredLink href="https://foodjoo.com/">website</ColoredLink>
        </p>
      </>
    ),
  },
  {
    label: "Mizboon.com",
    content: (
      <>
        <h5>Mizboon.com - by Eghamat24 </h5>
        <p>Rent homes like Airbnb.</p>
        <p>HTML/CSS/JS/jQuery integrate with Laravel/PHP.</p>
        <p>
          <ColoredLink href="https://mizboon.com/">website</ColoredLink>
        </p>
      </>
    ),
    // duration: {
    //   from: "2018-01",
    //   to: "2018-05",
    // },
  },
  {
    label: "Parvazyab.com",
    content: (
      <>
        <h5>Parvazyab.com - by Eghamat24 </h5>
        <p>Flights reservation.</p>
        <p>HTML/CSS/JS/jQuery integrate with PHP.</p>
        <p>
          <ColoredLink href="https://parvazyab.com/">website</ColoredLink>
        </p>
      </>
    ),
    // duration: {
    //   from: "2018-01",
    //   to: "2018-05",
    // },
  },
];

const openSourceProjects = [
  {
    label: "Mmd React SSR",
    content: (
      <>
        React Server Side rendered application (isomorphic) with support fetch
        data like Next.js using React Router
      </>
    ),
    url: "https://github.com/mammad2c/mmd-react-ssr",
  },
  {
    label: "Mmd Persian Datepicker",
    content: <>A pure js persian datepicker, powered by TypeScript :)</>,
    url: "https://github.com/mammad2c/mmd-persian-datepicker",
  },
  {
    label: "Mmd Gitlab Backuper",
    content: (
      <>
        A command line package to backup your repositories in your local from
        Gitlab. Because of U.S Sanctions there is high risk without any backup.
        This script supports for users that run gitlab on their own servers.
      </>
    ),
    url: "https://github.com/mammad2c/mmd-gitlab-backuper",
  },
];

const volunteerWorks = [
  {
    label: "Front-End Developer",
    content: (
      <>
        <h5>Silk Road Startup - silkroadstartup.org </h5>
        <p>
          Silk Road Startup is the first international B2B, invite-only,
          gathering in Iran to showcase the local startup ecosystem
        </p>
      </>
    ),
    duration: {
      from: "2018-06",
      to: "2018-12",
    },
  },
];

const educations = [
  {
    label: "Bachelor of Computer Engineering",
    content: (
      <>
        <h5>Azad University Of Mashhad</h5>
      </>
    ),
    duration: {
      from: "2016-1",
      to: "2020-1",
    },
  },
];

const certificates = [
  {
    content: <>Fanavard - 7th rank in UI Develop - https://fanavard.com</>,
    duration: {
      from: "2016-10",
      to: null,
    },
  },
  {
    content: <>Fanavard - 1th rank in UI Develop - https://fanavard.com</>,
    duration: {
      from: "2018-07",
      to: null,
    },
  },
  {
    content: (
      <>
        Hackahealth - Mobile development hackaton
        <p>http://hackahealth.org</p>
      </>
    ),
    duration: {
      from: "2019-04",
      to: null,
    },
  },
];

const interests = [
  {
    content: <>Football</>,
  },
  {
    content: <>Game</>,
  },
  {
    content: <>Movie</>,
  },
];

const Timeline: FunctionComponent = () => (
  <div className="timeline">
    {/* Personal Info */}
    <TimelineBox iconName="user" title="Personal Info" data={personalInfo} />
    {/* Summary */}
    <TimelineBox iconName="dot-circle" title="Summary" data={summary} />
    {/* Experiences */}
    <TimelineBox
      iconName="business-time"
      title="Experiences"
      data={experiences}
    />
    {/* Projects */}
    <TimelineBox iconName="tv" title="Projects" data={projects} />
    {/* Volunteer Works */}
    <TimelineBox
      iconName="heart"
      title="Volunteer Works"
      data={volunteerWorks}
    />
    {/* Open source Projects  */}
    <TimelineBox
      iconName="hands-helping"
      title="Open Source Projects"
      data={openSourceProjects}
    />
    {/* Education */}
    <TimelineBox
      iconName="graduation-cap"
      title="Education"
      data={educations}
    />
    {/* Certificates */}
    <TimelineBox
      iconName="certificate"
      title="Certificates"
      data={certificates}
    />
    {/* Interests */}
    <TimelineBox iconName="star" title="Interests" data={interests} />
  </div>
);

export default Timeline;

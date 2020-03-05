import React from "react";
import TimelineBox from "./TimelineBox";

// {
//     label: "",
//     content: "",
// },

const personalInfo = [
  {
    label: "Phone",
    content: "+989151018452"
  },
  {
    label: "E-mail",
    content: "mammadtoosi@gmail.com"
  },
  {
    label: "Date of birth",
    content: "1995-09-11"
  },
  {
    label: "Twitter",
    content: `<a href="https://twitter.com/mammad2c">@mammad2c</a>`
  },
  {
    label: "Marital status",
    content: "Single"
  },
  {
    label: "GitHub",
    content: `<a href="https://github.com/mammad2c">https://github.com/mammad2c</a>`
  },
  {
    label: "Ponisha",
    content: `<a href="https://ponisha.ir/profile/mammad2c">https://ponisha.ir/profile/mammad2c</a>`
  }
];

const summary = [
  {
    content: `<p>
                Experiences with many front end technologies. Such as ReactJs, ReactNative, Redux, Webpack and so on.
            </p> 
            <p>
                Freelancer from 2014. I participated in several projects such as PSD to HTML, writing jQuery plugins, Web application with ReactJs and ... .</p> <p>Gained a lot of experience in projects and found lovely friends.
            </p>`
  }
];

const experiences = [
  {
    label: "Front-End Developer",
    content: `<h5>Freelancer</h5> 
            <ul> 
                <li> PSD to HTML </li> 
                <li> jQuery plugins </li> 
                <li> Node js </li> 
            </ul>`,
    duration: {
      from: "2014-05"
    }
  },
  {
    label: "Front-End Developer",
    content: `<h5>Buzzjective</h5> 
                <p> Buzzjective is a great company for building websites, applications ... .</p>
                <p> We are a competent team committed to providing you with the best service </>
              `,
    duration: {
      from: "2019-05"
    }
  },
  {
    label: "ReactJS and React Native Developer",
    content: `<h5>Profile.ir</h5> 
            <p>Profile is a social network for expert.</p>
            <p>In this company we developed React Native application and dashboard using React, Redux.</p>`,
    duration: {
      from: "2018-06",
      to: "2019-04"
    }
  },
  {
    label: "Front-End Developer",
    content: `<h5>Hamrah Doctor Company</h5> 
            <ul>
                <li>Main site of Hamrah Doctor. hamrahdoctor.com - landing page HTML/CSS/JS/jQuery</li>
                <li>Diabetes - Hamrah Doctor - ReactJs and React Material</li>
                <li>Blog - Hamrah Doctor - HTML/CSS/JS/jQuery integrate with Wordpress</li>
                <li>Shop - Hamrah Doctor - HTML/CSS/JS/jQuery integrate with Wordpress and Woocommerce.</li>
            </ul>`,
    duration: {
      from: "2018-06",
      to: "2019-04"
    }
  },
  {
    label: "Front-End Developer",
    content: `<h5>Paradaim Company</h5> 
            <p>
                Do many projects for the company. 
            </p>
            <ul>
                <li>sarashpazeman.ir</li>
                <li>hoogle.ir</li>
                <li>Teaching, for example Bootstrap 3.</li>
                <li>A little experience with ASP.net MVC</li>
            </ul>`,
    duration: {
      from: "2015-07",
      to: "2016-05"
    }
  }
];

const projects = [
  {
    label: "Mizboon.com",
    content: `<h5>Mizboon.com - by Eghamat24 </h5> 
            <p>
                Rent homes like Airbnb. 
            </p>
            <p>
                HTML/CSS/JS/jQuery integrate with Laravel/PHP.
            </p>
            `,
    duration: {
      from: "2018-01",
      to: "2018-05"
    }
  },
  {
    label: "Parvazyab.com",
    content: `<h5>Parvazyab.com - by Eghamat24 </h5> 
            <p>
                Flights reservation. 
            </p>
            <p>
                HTML/CSS/JS/jQuery integrate with PHP.
            </p>
            `,
    duration: {
      from: "2018-01",
      to: "2018-05"
    }
  }
];

const oppensourceProjects = [
  {
    label: "Mmd React SSR",
    content: `React Server Side rendered application (isomorphic) with support fetch data like Next.js using React Router`,
    url: "https://github.com/mammad2c/mmd-react-ssr"
  },
  {
    label: "Mmd Persian Datepicker",
    content: `A pure js persian datepicker, powered by TypeScript :)`,
    url: "https://github.com/mammad2c/mmd-persian-datepicker"
  }
];

const volunteerWorks = [
  {
    label: "Front-End Developer",
    content: `<h5>Silk Road Startup - silkroadstartup.org </h5> 
        <p>
            Silk Road Startup is the first international B2B, invite-only, gathering in Iran to showcase the local startup ecosystem
        </p>
        `,
    duration: {
      from: "2018-06",
      to: "2018-12"
    }
  }
];

const educations = [
  {
    label: "Bachelor of Computer Engineering",
    content: ``,
    duration: {
      from: "2016-1",
      to: "2020-1"
    }
  }
];

const certificates = [
  {
    content: `Fanavard - 7th rank in UI Develop - https://fanavard.com`,
    duration: {
      from: "2016-10",
      to: null
    }
  },
  {
    content: `Fanavard - 1th rank in UI Develop - https://fanavard.com`,
    duration: {
      from: "2018-07",
      to: null
    }
  },
  {
    content: `Hackahealth - Mobile development hackaton 
            <p>http://hackahealth.org</p>
            `,
    duration: {
      from: "2019-04",
      to: null
    }
  }
];

const interests = [
  {
    content: "Football"
  },
  {
    content: "Volleyball"
  },
  {
    content: "Boxing"
  },
  {
    content: "Driving"
  },
  {
    content: "Swimming"
  },
  {
    content: "Video"
  }
];

const Timeline: React.SFC = () => (
  <div className="timeline">
    {/* Personal Info */}
    <TimelineBox
      iconName="fa fa-user"
      title="Personal Info"
      data={personalInfo}
    />

    {/* Summary */}
    <TimelineBox iconName="fa fa-dot-circle" title="Summary" data={summary} />

    {/* Experiences */}
    <TimelineBox
      iconName="fa fa-business-time"
      title="Experiences"
      data={experiences}
    />

    {/* Projects */}
    <TimelineBox iconName="fa fa-tv" title="Projects" data={projects} />

    {/* Volunteer Works */}
    <TimelineBox
      iconName="fa fa-heart"
      title="Volunteer Works"
      data={volunteerWorks}
    />

    {/* Opensource Projects  */}
    <TimelineBox
      iconName="fa fa-hands-helping"
      title="Opensource Projects"
      data={oppensourceProjects}
    />

    {/* Education */}
    <TimelineBox
      iconName="fa fa-graduation-cap"
      title="Education"
      data={educations}
    />

    {/* Certificates */}
    <TimelineBox
      iconName="fa fa-certificate"
      title="Certificates"
      data={certificates}
    />

    {/* Interests */}
    <TimelineBox iconName="fa fa-star" title="Interests" data={interests} />
  </div>
);

export default Timeline;

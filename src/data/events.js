import e1_img1 from '../assets/events/Anukheth_IntroToAi/anukiedc1.jpg';
import e1_img2 from '../assets/events/Anukheth_IntroToAi/anukiedc2.jpg';
import e1_poster from '../assets/events/Anukheth_IntroToAi/anukiedc.jpg';

import e2_img1 from '../assets/events/Yadhu_Linkedin/ysdhu2.jpg';
import e2_img2 from '../assets/events/Yadhu_Linkedin/image1.jpg';
import e2_poster from '../assets/events/Yadhu_Linkedin/yadhuied.jpg';

import e3_img1 from '../assets/events/Innaguration/1.jpg';
import e3_img2 from '../assets/events/Innaguration/2.jpg';
import e3_img3 from '../assets/events/Innaguration/3.jpg';
import e3_poster from '../assets/events/Innaguration/poster.png';

import e4_img1 from '../assets/events/Farhan_Comms/1.jpg';
import e4_img2 from '../assets/events/Farhan_Comms/2.jpg';
import e4_poster from '../assets/events/Farhan_Comms/poster.png';

const getSrc = (img) => img.src || img;

const eventsData = {
  events: [
    {
      id: 1,
      title: "The Weeknd Huddle-1: An Intro to AI",
      description: "Introductory session for AI and Machine Learning led by Anukheth Sunil M.",
      date: "January 31, 2025",
      location: "ASAP Lab, CETKR",
      images: [
        getSrc(e1_img1),
        getSrc(e1_img2)
      ],
      poster: getSrc(e1_poster),
      highlights: [
        "Introduction to AI and Machine Learning",
        "Speaker: Anukheth Sunil M.",
        "Q&A session",
        "Networking opportunities"
      ]
    },
    {
      id: 2,
      title: "The Weeknd Huddle-2: Personal Branding on LinkedIn",
      description: "Building your Personal Brand on LinkedIn led by Yadhu Nadanan",
      date: "February 14, 2025",
      location: "Main Seminar Hall, CETKR",
      images: [
        getSrc(e2_img1),
        getSrc(e2_img2)
      ],
      poster: getSrc(e2_poster),
      highlights: [
        "LinkedIn Workshop",
        "Speaker: Yadhu Nadanan",
        "Q&A session",
        "Networking opportunities"
      ]
    },
    {
      id: 3,
      title: "Official IEDC CETKR Innaguration",
      description: "Grand inauguration of IEDC CETKR, marking the beginning of innovation and entrepreneurship.",
      date: "February 20, 2025",
      location: "Main Seminar Hall, CETKR",
      images: [
        getSrc(e3_img1),
        getSrc(e3_img2),
        getSrc(e3_img3)
      ],
      poster: getSrc(e3_poster),
      highlights: [
        "Official Inauguration of IEDC CETKR",
        "Keynote Address by Principal",
        "Introduction to IEDC Vision & Mission",
        "Startup & Innovation Opportunities for Students",
        "Networking & Collaboration Session"
      ]
    },
    {
      id: 4,
      title: "The Weekend Huddle-3: The Art of Persuasive Communication in Entrepreneurship",
      description: "An insightful session with Abdullahi Farhan on mastering persuasive communication to pitch ideas, influence decisions, and create an impact in the business world.",
      date: "February 20, 2025",
      location: "Main Seminar Hall, CETKR",
      images: [
        getSrc(e4_img1),
        getSrc(e4_img2)
      ],
      poster: getSrc(e4_poster),
      highlights: [
        "Mastering Persuasive Communication",
        "Speaker: Abdullahi Farhan",
        "Attracting Investors & Customers",
        "Building Strong Teams & Partnerships",
        "Q&A and Networking Session"
      ]
    }
  ]
};

export default eventsData;
import { Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import googleSearch from '../assets/img/googleSearch.png';
import Wiki from '../assets/img/wiki.png';
import Email from '../assets/img/email.png';
import Ecommerce from '../assets/img/ecommerce.png';
import Promptopia from '../assets/img/promptopia.png';
import Checkins from '../assets/img/checkins.png';
import CollectIQ from '../assets/img/collectiq.png';
import HumanityPassport from '../assets/img/humanityPassport.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Collect IQ',
      description:
        'Full-stack app with Next.js 14 + Tailwind on AWS Amplify, TypeScript Lambdas, Bedrock (Claude) + Rekognition AI, Step Functions orchestration, DynamoDB, S3, Cognito auth, and Terraform-managed infrastructure.',
      imgUrl: CollectIQ,
      linkUrl: 'https://main.ddtufp5of4bf.amplifyapp.com',
      readmeUrl: 'https://devpost.com/software/collectiq',
    },
    {
      title: 'Humanity Passport',
      description:
        'Full-stack app on Next.js 14, powered by GPT-OSS-20B via Groq for fast AI, with GitHub integration (Octokit + LangChain), Postgres + Prisma storage, and a Tailwind/shadcn UI.',
      imgUrl: HumanityPassport,
      linkUrl: 'https://ai-humanity-passport.vercel.app/',
      readmeUrl: 'https://devpost.com/software/humanity-passport',
    },
    {
      title: 'Hotel Checkins',
      description: 'Next JS, React, Javascript, HTML, Tailwind CSS',
      imgUrl: Checkins,
      linkUrl: 'https://search.hotelcheckins.com',
      readmeUrl: 'https://www.sheleen.dev',
    },
    {
      title: 'Promptopia',
      description: 'Next JS, React Framework, Mongoose, MongoDB',
      imgUrl: Promptopia,
      linkUrl: 'https://project-promptopia-9xtmdrmp1-shsanantonio.vercel.app/',
      readmeUrl:
        'https://github.com/shsanantonio/promptopia-completed-comments#readme',
    },
    {
      title: 'Ecommerce',
      description: 'Javascript, Python and SQLite',
      imgUrl: Ecommerce,
      linkUrl: 'https://shen001.pythonanywhere.com/',
      readmeUrl: 'https://github.com/shsanantonio/commerce-app#readme',
    },
    {
      title: 'Email',
      description: 'Javascript, Python and Postgresql ',
      imgUrl: Email,
      linkUrl: 'https://shen002.pythonanywhere.com/',
      readmeUrl: 'https://github.com/shsanantonio/mail-app#readme',
    },
    {
      title: 'Wiki',
      description: 'HTML, Python, Markdown',
      imgUrl: Wiki,
      linkUrl: 'https://shen003.pythonanywhere.com/',
      readmeUrl: 'https://github.com/shsanantonio/wiki-app#readme',
    },

    {
      title: 'Google Search Engine Imitation',
      description: 'HTML and CSS',
      imgUrl: googleSearch,
      linkUrl: 'https://shen000-google-search.vercel.app/',
      readmeUrl: 'https://github.com/shsanantonio/search#readme',
    },

    // {
    //   title: "Social Media",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div className="animate-on-scroll">
          <h2>Projects</h2>
          <p>
            Built full-stack applications end-to-end across multiple projects,
            using Django/Python (SQLite) and evolving to modern stacks with
            Next.js, React, MongoDB (Mongoose), and Tailwind, along with AWS
            services (Lambda, DynamoDB, S3, Cognito, Step Functions) and AI
            integrations via Amazon Bedrock (Claude) and Rekognition.{' '}
          </p>

          <Row>
            {projects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

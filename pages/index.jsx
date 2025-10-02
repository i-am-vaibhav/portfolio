import { fetchRepos } from '../lib/github';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

export default function Home({ repos }) {
  const topRepos = repos
    .filter(r => !r.fork)
    .sort((a,b)=>b.stargazers_count-a.stargazers_count)
    .slice(0,5);

  const experiences = [
    {
      role: 'Senior Consultant',
      company: 'ThoughtWorks',
      start: 'Jan 2025',
      end: 'Present',
      highlights: [
        'Designed scalable microservices for Lenovo in distributed environments',
        'Implemented micro-frontend architecture for modular UI',
        'Improved system resilience and availability'
      ]
    },
    {
      role: 'Full Stack Developer 2',
      company: 'FedEx ACC',
      start: 'Sep 2023',
      end: 'Jan 2025',
      highlights: [
        'Developed DQM & MCT dashboards, saving $1B & reducing manual work by 80%',
        'Integrated React + Power BI with Databricks & ADLS for KPIs'
      ]
    },
    {
      role: 'Analyst',
      company: 'Deloitte USI',
      start: 'Jan 2022',
      end: 'Aug 2023',
      highlights: [
        'Built OTP-based credential recovery for 500K+ users',
        'Enhanced real-time balance inquiry and benefit issuance modules'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Olive Crypto Systems',
      start: 'Sep 2019',
      end: 'Dec 2021',
      highlights: [
        'Implemented merchant onboarding API for Axis Bank, reducing time by 50%',
        'Built mandate management and payment systems handling millions of daily transactions',
        'Automated HSBC IMPS reporting system, reducing manual effort by 70%'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Vaibhav Kumar Gupta</h1>
        <p className="text-xl text-gray-600">Full Stack Developer | Cloud & Microservices | Banking & Fintech</p>
        <div className="mt-4 space-x-4">
          <a href="mailto:vg566556@gmail.com" className="text-blue-600">Email</a>
          <a href="https://www.linkedin.com/in/vaibhav-kumar-gupta" className="text-blue-600">LinkedIn</a>
          <a href="https://github.com/i-am-vaibhav" className="text-blue-600">GitHub</a>
        </div>
      </header>

      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <span className="bg-gray-100 p-2 rounded">Java</span>
          <span className="bg-gray-100 p-2 rounded">Spring Boot</span>
          <span className="bg-gray-100 p-2 rounded">React</span>
          <span className="bg-gray-100 p-2 rounded">AWS</span>
          <span className="bg-gray-100 p-2 rounded">Kubernetes</span>
          <span className="bg-gray-100 p-2 rounded">Docker</span>
          <span className="bg-gray-100 p-2 rounded">Terraform</span>
          <span className="bg-gray-100 p-2 rounded">Kafka</span>
        </div>
      </section>

      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {experiences.map((exp, i) => <ExperienceCard key={i} experience={exp}/> )}
      </section>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topRepos.map(repo => <ProjectCard key={repo.id} repo={repo} />)}
        </div>
      </section>

      <section id="contact" className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Reach out via Email, LinkedIn or GitHub for collaborations or opportunities.</p>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const repos = await fetchRepos();
  return { props: { repos }, revalidate: 3600 };
}
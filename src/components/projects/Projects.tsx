import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Replient",
    imgSrc: "project-imgs/replient.png",
    projectLink: "https://replient.ai",
    tech: ["Next.js", "TypeScript", "tRPC","AI SDK", "Prisma", "PostgreSQL", "BullMQ", "Redis", "OpenAI"],
    description:
      "AI-powered social media management platform with multi-platform inbox, sentiment analysis, smart replies, and visual automation builder.",
    modalContent: (
      <>
        <p>
          Replient is a comprehensive social media management platform that
          leverages AI to help brands manage interactions across Facebook,
          Instagram, TikTok, LinkedIn, YouTube, and Google Reviews.
        </p>
        <p>
          <strong>Architecture highlights:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Queue-based processing with BullMQ + Redis for scalability</li>
          <li>Smart visual automation builder with conditional logic and delays</li>
          <li>Multi-platform comments and messages inbox with Facebook, Instagram, TikTok, LinkedIn, YouTube, and Google Reviews</li>
          <li>Vector search using pgvector + HNSW indexes for semantic search</li>
        </ul>
        <p>
          I handle everything from API integrations and webhook processing to
          AI pipelines and the automation engine.
        </p>
      </>
    ),
  },
  {
    title: "Scopri",
    imgSrc: "project-imgs/scopri.png",
    projectLink: "https://scopri.ai/",
    tech: ["AI", "Vector Search", "PostgreSQL", "Next.js", "TypeScript", "Prisma", "tRPC", "Google BigQuery"],
    description:
      "AI-powered patent analysis platform for researchers. Semantic search and AI summaries for patent discovery.",
    modalContent: (
      <>
        <p>
          Scopri helps researchers discover and analyze patents using AI-powered
          semantic search and intelligent summaries.
        </p>
        <p>
          Built with vector embeddings for semantic patent matching and LLM
          integration for generating patent summaries and insights.
        </p>
      </>
    ),
  },
  {
    title: "Taxado",
    imgSrc: "project-imgs/taxado.png",
    projectLink: "https://taxado.com/",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "Cron Jobs"],
    description:
      "Professional network platform for law firms. LinkedIn-style networking for legal professionals.",
    modalContent: (
      <>
        <p>
          Taxado is a professional networking platform designed specifically for
          law firms and legal professionals in Europe (Austria, Germany, etc.).
        </p>
        <p>
          Features include firm profiles, candidates profiles, job postings, and a job application system.
        </p>
      </>
    ),
  },
  {
    title: "Thundermail",
    imgSrc: "project-imgs/thundermail.png",
    code: "https://github.com/thepradipvc/thundermail-web",
    projectLink: "https://thundermail.thepradipvc.com",
    tech: ["Gmail API", "Lucia Auth", "Next.js", "TypeScript", "Tailwind", "AWS SQS", "AWS Lambda"],
    description:
      "Resend clone - email delivery system using Gmail. Send transactional emails through Gmail API.",
    modalContent: (
      <>
        <p>
          Thundermail is an email delivery service similar to Resend, but uses
          Gmail as the underlying email provider.
        </p>
        <p>
          Built to learn about OAuth flows, email APIs, and building developer
          tools with great DX.
        </p>
      </>
    ),
  },
  {
    title: "Lucir",
    imgSrc: "project-imgs/lucir.png",
    code: "https://github.com/thepradipvc/lucir-landing-page",
    projectLink: "https://lucir.vercel.app",
    tech: ["Next.js", "Tailwind", "React slick"],
    description:
      "Landing page for a link-in-bio SaaS. Clean design with smooth animations.",
    modalContent: (
      <>
        <p>
          A polished landing page built for Lucir, a link-in-bio SaaS product.
        </p>
        <p>
          Features responsive design, with clean UI to demonstrate product features.
        </p>
      </>
    ),
  },
  {
    title: "UI Components",
    imgSrc: "project-imgs/ui-components.png",
    code: "https://github.com/thepradipvc/ui-components",
    projectLink: "https://ui.thepradipvc.com",
    tech: ["React", "Framer Motion", "Shadcn UI", "Tailwind"],
    description:
      "Collection of animated UI components. Reusable components with smooth animations.",
    modalContent: (
      <>
        <p>
          A collection of animated, reusable UI components built with React and
          Framer Motion.
        </p>
        <p>
          Includes various interactive components like button, Twitter wall of fame, countdown timer, text animations and more with smooth animations.
        </p>
      </>
    ),
  },
];

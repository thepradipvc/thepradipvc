import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Builway",
    position: "Software Engineer",
    time: "Dec 2024 - Present",
    location: "Remote",
    description:
      "Working on AI-driven products including Replient (social media management), Scopri (patent analysis), Taxado (legal tech), and Buildpilot (internal mobile app). Building scalable architectures with queue-based processing, vector search, and multi-platform integrations.",
    tech: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "AI SDK",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "OpenAI",
      "React Native",
    ],
  },
  {
    title: "Cal.com",
    position: "Open Source Contributor",
    time: "2024",
    location: "Remote",
    description:
      "Implemented browser push notifications using the Web Push API + Service Workers to deliver real-time updates across browsers, improving user engagement with timely reminders and scheduled-event updates.",
    tech: ["Web Push API", "Service Workers", "Push Notifications"],
  },
];

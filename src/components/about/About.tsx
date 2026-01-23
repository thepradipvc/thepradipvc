import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                I
              </span>
              &apos;m a full-stack engineer focused on building scalable,
              AI-driven products. I enjoy solving complex backend problems,
              designing clean systems, and shipping production-ready software.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Currently at Builway, I&apos;m working on Replient — an AI-powered
              social media management platform. I handle everything from
              queue-based architectures and background workers to vector search
              and multi-platform API integrations.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;ve also contributed to Scopri (AI patent analysis), Taxado
              (legal tech), and Buildpilot (mobile app). Open to freelance
              opportunities — let&apos;s connect!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

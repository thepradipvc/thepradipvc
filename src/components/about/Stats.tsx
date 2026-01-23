import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Next.js</Chip>
            <Chip>TypeScript</Chip>
            <Chip>OpenAI</Chip>
            <Chip>Claude</Chip>
            <Chip>React</Chip>
            <Chip>Tailwind</Chip>
            <Chip>AI SDK</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Redis</Chip>
            <Chip>BullMQ</Chip>
            <Chip>tRPC</Chip>
            <Chip>Supabase</Chip>
            <Chip>Prisma</Chip>
            <Chip>pgvector</Chip>
            <Chip>Radix</Chip>
            <Chip>Mantine</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>React Native</Chip>
            <Chip>Expo</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>Elysia</Chip>
            <Chip>Docker</Chip>
            <Chip>Better Auth</Chip>
            <Chip>Base UI</Chip>
            <Chip>Figma</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

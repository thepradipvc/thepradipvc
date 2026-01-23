import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import { SOCIAL_LINKS } from "../../constants/socialLinks";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("resume.pdf", "_blank", "noopener,noreferrer")}
      >
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href={SOCIAL_LINKS.github}
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href={SOCIAL_LINKS.linkedin}
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href={SOCIAL_LINKS.x}
      target="_blank"
      rel="nofollow"
    >
      <SiX />
    </Link>
  </div>
);

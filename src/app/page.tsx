import { CustomLink } from "@/components/CustomLink";
import { Signature } from "@/components/Signature";
import { Picture } from "@/components/Picture";
import { AchievementsProgress } from "@/components/Achivements/AchivementsProgress";
import { ForkItTicketHunt } from "@/components/ForkItTicketsHunt";

export default function Home() {
  return (
    <div className="m-auto flex w-full max-w-[54rem] flex-col-reverse items-center gap-4 px-4 pb-32 pt-8 md:flex-row md:px-12 md:py-20">
      <div className="relative z-10 mx-auto flex w-fit flex-1 flex-col gap-12 text-balance text-sm md:mx-0 md:w-full">
        <div className="flex flex-col gap-5">
          <h1 className="">
            Oh hi, I&apos;m
            <strong className="block font-heading text-3xl font-normal text-highlight md:text-4xl">
              Ivan Dalmet
            </strong>
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              Co-founder and Lead Designer of{" "}
              <CustomLink href="https://bearstudio.fr">BearStudio</CustomLink>
            </p>
            <p>
              Co-founder of{" "}
              <CustomLink href="https://forkit.community">
                Fork It! Community
              </CustomLink>
            </p>
            <p>
              Maintainer of{" "}
              <CustomLink href="https://start-ui.com">Start UI</CustomLink>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p>Enjoying life in Rouen, FRANCE</p>
          </div>
        </div>

        <ForkItTicketHunt />

        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-xl text-highlight">Find me on</h2>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              Linkedin{" "}
              <CustomLink href="https://www.linkedin.com/in/ivandalmet/">
                <span className="arobase">@</span>ivandalmet
              </CustomLink>
            </li>
            <li>
              X{" "}
              <CustomLink href="https://x.com/IvanDalmet">
                <span className="arobase">@</span>ivandalmet
              </CustomLink>
            </li>
            <li>
              BlueSky{" "}
              <CustomLink href="https://bsky.app/profile/ivan.dalmet.fr">
                <span className="arobase">@</span>ivan.dalmet.fr
              </CustomLink>
            </li>
            <li>
              GitHub{" "}
              <CustomLink href="https://github.com/ivan-dalmet">
                <span className="arobase">@</span>ivan-dalmet
              </CustomLink>
            </li>
          </ul>
        </div>

        <Signature className="w-32" />
      </div>
      <Picture />
      <AchievementsProgress />
    </div>
  );
}

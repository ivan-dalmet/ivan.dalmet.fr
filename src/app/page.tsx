import Image from "next/image";
import photo from "@/../public/ivan-dalmet.png";
import { CustomLink } from "@/components/CustomLink";
import { Signature } from "@/components/Signature";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Snow } from "@/components/Snow";

export default function Home() {
  return (
    <>
      <div className="px-4 pt-8 pb-32 md:px-12 md:py-20 flex w-full max-w-[54rem] m-auto flex-col-reverse gap-4 md:flex-row items-center">
        <div className="relative z-10 text-sm text-balance flex-1 w-fit md:w-full mx-auto md:mx-0 flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="">
              Oh hi, I&apos;m
              <strong className="font-normal font-heading block text-3xl md:text-4xl text-highlight">
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

          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-highlight text-xl">
              Keep in touch
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                BlueSky{" "}
                <CustomLink href="https://bsky.app/profile/ivan.dalmet.fr">
                  @ivan.dalmet.fr
                </CustomLink>
              </li>
              <li>
                Linkedin{" "}
                <CustomLink href="https://www.linkedin.com/in/ivandalmet/">
                  @ivandalmet
                </CustomLink>
              </li>
              <li>
                X{" "}
                <CustomLink href="https://x.com/IvanDalmet">
                  @ivandalmet
                </CustomLink>
              </li>
            </ul>
          </div>

          <Signature className="w-32" />
        </div>
        <div className="relative md:-translate-x-8">
          <div className="blur-3xl opacity-20 bg-image-accent absolute w-[125%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-39.6%] rounded-full" />
          <div className="bg-image-background absolute w-[125%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-39.6%] rounded-full bg-gradient-to-t from-image-background-from to-image-background-to" />
          <div className="bg-image-accent absolute w-[70%] aspect-square top-1/2 left-1/2 translate-x-[-49.7%] translate-y-[-15%] rounded-full" />
          <Image
            className="relative"
            priority
            src={photo}
            width={261}
            height={396}
            alt="Picture of Ivan Dalmet"
            sizes="100vw, (min-width: 768px) 261px"
          />
        </div>
      </div>
      <ThemeSwitcher className="fixed bottom-3 right-3 z-40" />
      <Snow />
    </>
  );
}

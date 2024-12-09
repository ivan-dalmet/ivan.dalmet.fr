import { CustomLink } from "@/components/CustomLink";
import { Signature } from "@/components/Signature";
import { Picture } from "@/components/Picture";

export default function Home() {
  return (
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
          <h2 className="font-heading text-highlight text-xl">Keep in touch</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              BlueSky{" "}
              <CustomLink href="https://bsky.app/profile/ivan.dalmet.fr">
                <span className="arobase">@</span>ivan.dalmet.fr
              </CustomLink>
            </li>
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
          </ul>
        </div>

        <Signature className="w-32" />
      </div>
      <Picture />
    </div>
  );
}

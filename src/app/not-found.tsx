import { CustomLink } from "@/components/CustomLink";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-4 text-balance text-center gap-4">
      <p className="text-xs -mb-3">ivan.dalmet.fr</p>
      <h1 className="text-4xl font-heading text-highlight">Page Not Found</h1>
      <p>Looking for something? There is only one page here</p>
      <CustomLink href={"/"} className="">
        TAKE ME HOME
      </CustomLink>
    </div>
  );
}

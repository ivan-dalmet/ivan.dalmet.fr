import { CustomLink } from "@/components/CustomLink";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-balance p-4 text-center">
      <p className="-mb-3 text-xs">ivan.dalmet.fr</p>
      <h1 className="font-heading text-4xl text-highlight">Page Not Found</h1>
      <p>Looking for something? There is only one page here</p>
      <CustomLink href={"/"} className="">
        TAKE ME HOME
      </CustomLink>
    </div>
  );
}

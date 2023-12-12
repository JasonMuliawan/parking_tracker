import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-center py-5">
      <div className="absolute left-10 start-0">
        <UserButton />
      </div>
      <h2 className="text-2xl font-bold text-blue-950 md:text-3xl lg:text-4xl xl:text-4xl">
        PARKING TRACKER
      </h2>
    </div>
  );
}

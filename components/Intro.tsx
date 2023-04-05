import Image from "next/image";
import { Raleway } from "@next/font/google";
const raleway = Raleway({
  weight: "600",
  style: "normal",
});
function Intro() {
  const cl = `mt-24 text-6xl pb-2 pt-2 flex ${raleway.className}`;
  return (
    <div className={cl}>
      <Image
        className="rounded-full border-2 border-cyan-100 ml-8"
        src="/profile.jpeg"
        alt="Profile picture"
        width={500}
        height={500}
      ></Image>
      <div className="flex-col mt-28 ml-4">
        Gamal Lautaro Lascano Hassen
        <p className="text-4xl">Backend Software Engineer</p>
      </div>
    </div>
  );
}
export default Intro;

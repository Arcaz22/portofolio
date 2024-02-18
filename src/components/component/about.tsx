import Link from "next/link";
import { FaLinkedin, FaGithub, FaGitlab, } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export function AboutComponent() {
  return (
    <div>
      <section className="py-6 lg:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide text-gray-500 sm:text-base md:text-xs/relaxed lg:text-sm/relaxed dark:text-gray-400">
                Introducing
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl">
                Chandra Arcychan Azfar
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Cloud Computing Enthusiast | Backend Developer
              </p>
            </div>
            <div className="flex justify-center gap-4 sm:justify-center md:justify-start">
              <Link
                href="http://www.linkedin.com/in/chandra-arcychan-azfar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/Arcaz22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://gitlab.com/Arcaz22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab />
              </Link>
              <Link
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdDownload  />
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <img
              alt="Avatar"
              className="rounded-full overflow-hidden"
              height="400"
              src="/chandra.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


import Link from "next/link"

export function PortofolioComponent() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col min-h-[200px]">
                <Link
                  className="inline-flex flex-1 flex-col rounded-lg overflow-hidden transition transform-gpu hover:scale-105"
                  href="#"
                >
                  <img
                    alt="Project"
                    className="rounded-t-lg object-cover aspect-landscape"
                    height="250"
                    src="/chadra.jpg"
                    width="400"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold">Project Title</h3>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Project Category</p>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col min-h-[200px]">
                <Link
                  className="inline-flex flex-1 flex-col rounded-lg overflow-hidden transition transform-gpu hover:scale-105"
                  href="#"
                >
                  <img
                    alt="Project"
                    className="rounded-t-lg object-cover aspect-landscape"
                    height="250"
                    src="/chadra.jpg"
                    width="400"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold">Project Title</h3>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Project Category</p>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col min-h-[200px]">
                <Link
                  className="inline-flex flex-1 flex-col rounded-lg overflow-hidden transition transform-gpu hover:scale-105"
                  href="#"
                >
                  <img
                    alt="Project"
                    className="rounded-t-lg object-cover aspect-landscape"
                    height="250"
                    src="/chadra.jpg"
                    width="400"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold">Project Title</h3>
                    <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">Project Category</p>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

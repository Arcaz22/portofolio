export function AboutComponent() {
  return (
    <div>
      
      <section className="py-12 lg:py-24">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide text-gray-500 sm:text-base md:text-xs/relaxed lg:text-sm/relaxed dark:text-gray-400">
                Introducing
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl">Chandra Arcychan Azfar</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Cloud Computing Enthusiast | Backend Developer
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <img
              alt="Avatar"
              className="rounded-full overflow-hidden"
              height="400"
              src="/chadra.jpg"
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
  )
}

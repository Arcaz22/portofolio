import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactComponent() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Want to work together? Have a question about my projects? Send me a message.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[400px] space-y-4">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <div className="sm:col-span-2">
                  <Textarea placeholder="Message" />
                </div>
                <div className="sm:col-span-2 text-center">
                  <Button>Send</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

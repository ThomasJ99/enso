import ContactForm from "@/components/contact/contact-form";
import EnsoCircle from "@/components/ui/enso-circle";

export const metadata = {
  title: "Contact - Thomas Dojo",
  description: "Get in touch with Thomas Dojo.",
};

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20">
        {/* Left: Form */}
        <div className="flex-1">
          <h1 className="font-dongle text-6xl md:text-7xl mb-4">Contact</h1>
          <p className="text-muted-foreground mb-10 max-w-md">
            Have a question about training, or just want to connect? Send a
            message and we will get back to you.
          </p>
          <ContactForm />
        </div>

        {/* Right: Decorative enso */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0 w-48 lg:w-64 opacity-10">
          <EnsoCircle />
        </div>
      </div>
    </section>
  );
}

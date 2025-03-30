const ContactPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 items-center pt-36">
      <div className="flex items-center justify-center flex-col gap-3 py-20 max-w-7xl px-5">
        <h1 className="text-4xl font-medium">
          Contact Us
        </h1>
        <span className="text-secondary/70">
          Get in touch with us
        </span>
        <span className="text-secondary text-center max-w-xl">
          Selecting the right appliance repair company is essential to keeping your home running smoothly. With our dedication to quality and years of expertise, we're the trusted choice for all your appliance repair needs. Here's what sets us apart:
        </span>
        <div className="grid gap-4 mt-6 md:grid-cols-2 w-full max-w-5xl">
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Skilled Professionals</h3>
              <p className="text-secondary/70">Our certified experts stay up-to-date with the latest repair methods to deliver dependable results every time.</p>
            </div>
          </div>
          
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Top-Notch Repairs</h3>
              <p className="text-secondary/70">We use premium-quality parts and tools to restore your appliances to peak performance.</p>
            </div>
          </div>
          
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Honest Pricing</h3>
              <p className="text-secondary/70">Expect clear, upfront pricing with no surprises—so you'll always know what you're paying for.</p>
            </div>
          </div>
          
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Convenient Scheduling</h3>
              <p className="text-secondary/70">We offer flexible appointment options, including same-day and emergency services, to fit your schedule.</p>
            </div>
          </div>
          
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Satisfaction Guaranteed</h3>
              <p className="text-secondary/70">All repairs are backed by a warranty, giving you confidence and peace of mind.</p>
            </div>
          </div>
          
          <div className="flex gap-3 p-4 rounded-lg bg-white border shadow border-primary/40">
            <div className="size-2 mt-2 rounded-full bg-primary shrink-0"></div>
            <div>
              <h3 className="font-medium">Reliable Support</h3>
              <p className="text-secondary/70">Our friendly customer care team is always ready to answer your questions and address your concerns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

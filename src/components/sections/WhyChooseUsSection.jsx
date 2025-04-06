import CallButtons from "../buttons/CallButtons";

const WhyChooseUs = () => {
  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-fixed"
      style={{
        backgroundImage: "url('/static/ac5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full w-full justify-center bg-black/75 text-white/95">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-5 py-20">
          <div className="mb-8 flex w-fit flex-col items-center justify-center gap-2 text-3xl font-semibold uppercase">
            Why Choose Us
            <div className="h-0.5 w-1/2 bg-primary"></div>
          </div>
          <div className="mx-auto mb-6 max-w-6xl text-lg">
            <p className="mb-4">
              When it comes to <strong>AC repair in Dubai</strong>, we are the trusted
              choice for residents across communities like JVC, Dubai Marina, Palm Jumeirah, Arabian Ranches, and Silicon Oasis. Our commitment to quality and fast response has earned us a strong reputation as a top-rated <strong>air conditioner repair company</strong>.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="font-bold">Expert Technicians:</span> Our certified AC technicians specialize in everything from <strong>AC maintenance in JVC</strong> to <strong>emergency AC repair in Dubai</strong>, ensuring quick diagnostics and effective solutions.
              </li>
              <li>
                <span className="font-bold">Comprehensive HVAC Services:</span> Whether you need <strong>HVAC system installation</strong>, <strong>AC duct cleaning services in Dubai</strong>, or full <strong>AC maintenance in Palm Jumeirah</strong>, we’ve got you covered.
              </li>
              <li>
                <span className="font-bold">24/7 Emergency Support:</span> We provide <strong>24-hour air conditioning service</strong> and <strong>AC repair emergency service</strong> to help you stay cool no matter the time or day.
              </li>
              <li>
                <span className="font-bold">Transparent Pricing:</span> Our rates are competitive and honest. Whether it’s a small fix or a full <strong>ducted air conditioning installation</strong>, you’ll always know what to expect.
              </li>
              <li>
                <span className="font-bold">Reliable Service Areas:</span> From <strong>AC repair in Dubai Marina</strong> to <strong>AC maintenance in Arabian Ranches</strong>, we serve all major neighborhoods with timely and efficient solutions.
              </li>
              <li>
                <span className="font-bold">Trusted by Residents & Businesses:</span> We are known as one of the <strong>best AC maintenance companies in Dubai</strong>, serving both residential and <strong>commercial AC service near you</strong>.
              </li>
            </ul>
          </div>
          <CallButtons className="py-5" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

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
              We understand that choosing the right appliance repair service is
              crucial for your home. Our commitment to excellence, combined with
              our extensive experience, makes us the ideal choice for all your
              appliance needs. Here’s why our customers trust us:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="font-bold">Expert Technicians:</span> Our
                certified technicians are well-trained in the latest repair
                techniques, ensuring efficient and reliable service.
              </li>
              <li>
                <span className="font-bold">Quality Repairs:</span> We use
                top-quality parts and tools, restoring your appliances to their
                optimal performance.
              </li>
              <li>
                <span className="font-bold">Transparent Pricing:</span> Enjoy
                clear and competitive pricing with no hidden fees, so you know
                exactly what to expect.
              </li>
              <li>
                <span className="font-bold">Convenient Service:</span> We offer
                flexible scheduling options, including same-day and emergency
                services, to fit your busy lifestyle.
              </li>
              <li>
                <span className="font-bold">
                  Customer Satisfaction Guarantee:
                </span>{" "}
                We back our work with a warranty on all repairs, ensuring peace
                of mind with every service.
              </li>
              <li>
                <span className="font-bold">Responsive Support:</span> Our
                friendly customer service team is always ready to assist with
                any questions or concerns you may have.
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

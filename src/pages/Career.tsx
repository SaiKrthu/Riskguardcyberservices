import React, { useRef } from "react";

// Props for Hero section to enable scrolling to job listings
interface HeroProps {
  scrollToJobListings: () => void;
}

// Hero Section
const Hero: React.FC<HeroProps> = ({ scrollToJobListings }) => (
  <section className="py-12 px-4 text-center bg-gray-100">
    <h1 className="text-3xl sm:text-4xl font-bold mb-6">OUR CAREER</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Text Block */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Join Our Team At <br />
          <span className="text-orange-500 font-bold">RISK GUARD</span>
        </h2>
        <button
          onClick={scrollToJobListings}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          See Openings
        </button>
      </div>

      {/* Right Image Block */}
      <div className="max-w-sm">
        <img
          src="/images/risk3.jpeg"
          alt="Team Working"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  </section>
);

// Features Section
const Features: React.FC = () => {
  const featureList = [
    "People Centricity",
    "Back To Work",
    "Work-Life Balance",
    "Recognition & Rewards",
    "Empowerment & Nurturing",
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Your Life at <span className="text-orange-500">RISK GUARD</span>
        </h2>
        <h3 className="text-lg sm:text-xl mt-2 font-semibold">
          JOIN US AND BUILD THE FUTURE
        </h3>
        <p className="mt-4 text-gray-600">
          Ready to join? Our success comes from a passionate team, strong
          relationships, and a commitment to positive impact.
        </p>
        <blockquote className="mt-4 italic font-medium">
          "TOGETHER, WE TURN VISION INTO REALITY"
        </blockquote>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg font-semibold shadow transition hover:bg-orange-500 hover:text-white"
            tabIndex={0}
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
};

// Job Listings Section
interface Job {
  title: string;
  description: string;
  remote: boolean;
  image: string;
}

const JobListings = React.forwardRef<HTMLDivElement>((_, ref) => {
  const jobs: Job[] = [
    {
      title: "Web Development",
      description: "Code the future!",
      remote: true,
      image: "/images/risk india 2.png",
    },
    {
      title: "Business Consulting",
      description: "Empower businesses.",
      remote: true,
      image: "/images/rges india 1.png",
    },
    {
      title: "Data Science",
      description: "Analyze the future.",
      remote: true,
      image: "/images/Group.png",
    },
    {
      title: "Cyber Security",
      description: "Be the shield!",
      remote: true,
      image: "/images/rges india 1.png",
    },
  ];

  const handleApplyClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScGt4ufylZLhuY5BZIPwecqTZ9IuxmblXEW0B463PqZrOz-Zg/viewform?usp=dialog";
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-8">Our Openings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-left hover:shadow-lg transition"
          >
            <img
              src={job.image}
              alt={job.title}
              className="rounded-md mb-4 h-36 object-cover mx-auto"
            />
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.description}</p>
            </div>
            <span className="text-xs text-orange-500 font-medium block mb-4">
              {job.remote ? "100% Remote" : "Onsite"}
            </span>
            <div className="flex justify-center">
              <button
                onClick={handleApplyClick}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

// Resume Upload Section
const Resume: React.FC = () => {
  const handleRedirect = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScQs8BGMcCm8c_dM0uQzM46s6Yihcva9bKWpqKJ6rv_D9ssqQ/viewform?usp=dialog";
  };

  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-2xl font-bold mb-4">Didn't find your role?</h2>
      <p className="text-gray-600 mb-6">
        Upload your resume, and we'll contact you when a suitable role is
        available.
      </p>
      <button
        onClick={handleRedirect}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
      >
        Upload Resume
      </button>
    </section>
  );
};

// Main Career Page
const Career: React.FC = () => {
  const jobListingRef = useRef<HTMLDivElement>(null);

  // Scroll to job listings section
  const scrollToJobListings = () => {
    jobListingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero scrollToJobListings={scrollToJobListings} />
      <Features />
      <JobListings ref={jobListingRef} />
      <Resume />
    </div>
  );
};

export default Career;
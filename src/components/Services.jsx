import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Client 1",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Client 2",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Client 3",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/group-club.png",
    },
    {
      id: 4,
      title: "Client 4",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/group-club.png",
    },
    {
      id: 4,
      title: "Client 4",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/group-club.png",
    },
    {
      id: 4,
      title: "Client 4",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur magna tellus maecenas magna dui tempor vivamus ac. Convallis dapibus rutrum per lacinia dui quam suspendisse interdum?",
      image: "/src/assets/icons/group-club.png",
    },
    
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      {/* Heading Section */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Why Choose Us?
        </h2>
        <p className="text-neutralGrey">
          We have been working with hundreds of clients
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={image} alt={title} className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {title}
              </h4>
              <p className="text-sm text-neutralGrey">{description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Clients Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mt-20"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Partner
        </h2>
        <p className="text-neutralGrey">
        We are pleased to work with our esteemed partners, leveraging our collective expertise to drive mutual success.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/icons/company1.png" alt="Company 1" />
          <img src="/src/assets/icons/company2.png" alt="Company 2" />
          <img src="/src/assets/icons/company3.png" alt="Company 3" />
          <img src="/src/assets/icons/company4.png" alt="Company 4" />
          <img src="/src/assets/icons/company5.png" alt="Company 5" />
          <img src="/src/assets/icons/company6.png" alt="Company 6" />
          <img src="/src/assets/icons/company7.png" alt="Company 7" />
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

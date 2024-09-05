import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from '../assets/maecenas.png'

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          
        </div>
      </div>

      {/* company stats */}
      <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis sit hac ipsum penatibus metus quisque senectus fusce. Praesent varius orci porttitor fames fusce eget. Viverra at sociosqu tellus montes nisi at tincidunt potenti. Dignissim vel aptent tellus molestie sagittis risus integer nunc. Turpis accumsan parturient vehicula hac; tellus duis dis mattis. Nostra inceptos ridiculus rhoncus ante orci; vestibulum nibh netus. Hac etiam sit amet amet placerat orci. Fusce posuere erat nisi diam tempus curabitur. Platea dapibus netus dapibus mattis suscipit blandit condimentum. Ultrices rhoncus magna vel ullamcorper sollicitudin vivamus orci nulla maximus. Varius vel mattis sem phasellus nulla in sit molestie. Dapibus lobortis fringilla commodo sodales augue aptent primis. Ipsum posuere lorem id per quis bibendum. Platea venenatis dolor dignissim; habitasse cursus placerat inceptos curae. Ante mi nisi lobortis suscipit, felis convallis justo viverra. Phasellus primis montes maximus; hendrerit quam congue. Efficitur pretium etiam id taciti id; dis a.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">Founder & CEO</h5>
              <p className="text-base text-neutralGrey mb-8">
                Mario Tanata 
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src="/src/assets/icons/company1.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company2.png" alt=""  className="cursor-pointer"/>
                  <img src="/src/assets/icons/company3.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company4.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company5.png" alt="" className="cursor-pointer" />
                  <img src="/src/assets/icons/company6.png" alt="" className="cursor-pointer" />
                  <div className="flex gap-8 items-center">
                    <a href="/" className="font-bold text-brandPrimary hover:text-neutralBlack">
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;

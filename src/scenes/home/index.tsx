import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/type";
import { ActionButton } from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 pb-20 py-10 md:h-full  md:pb-0"
    >
      {/*IMAGE AND MAIN HEADER*/}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*MAIN HEADER*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*HEADINGS*/}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: -0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:z-[-1]">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href="#contact"
            >
              Learm More
            </AnchorLink>
          </div>
        </div>
        {/*IMAGE*/}
        <div className="flex basis-3/5 justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 justify-center flex">
            <div className="flex w-3/5 items-center justify-between gap-10">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorFortune} alt="redbull-fortune" />
              <img src={SponsorForbes} alt="redbull-forbes" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link } from "./Link";
import { Props } from "./type";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "../shared/ActionButton";

const index = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [menuToggled, setMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={props.setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
                {/* MENU ITEM */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full  bg-secondary-500"
                onClick={() => setMenuToggled(!menuToggled)}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Menu toggle moblile */}
      {isAboveMediumScreens && menuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON*/}
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggled(!menuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default index;

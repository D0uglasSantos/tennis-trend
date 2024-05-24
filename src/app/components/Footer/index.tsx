import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const socialIcons = [
  { icon: AiOutlineTwitter, key: "twitter" },
  { icon: FaFacebookF, key: "facebook" },
  { icon: AiOutlineInstagram, key: "instagram" },
  { icon: FaThreads, key: "threads" }, // Verifique se FaThreads está correto, parece haver um erro no import
  { icon: AiFillYoutube, key: "youtube" },
];

interface SocialIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon }) => (
  <Icon className="cursor-pointer p-2 h-10 w-10 text-bg-green bg-[#909090] rounded-full hover:text-white hover:bg-[#B5AB40]" />
);

const Footer = () => {
  return (
    <>
      <section className="bg-bg-green pt-12 px-12">
        <div className="flex flex-wrap justify-between pb-8">
          <div className="flex justify-between gap-8 w-1/2">
            <div>
              <ul className="text-white text-sm font-semibold flex flex-col gap-2 uppercase cursor-pointer">
                <li>Gift Cards</li>
                <li>Promotions</li>
                <li>Find a Store</li>
                <li>Become a Member</li>
                <li>Send Us Feedback</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2 cursor-pointer">
                <li className="font-semibold text-white">Get Help</li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Order Status
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Returns
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Order Cancellation
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-1 cursor-pointer">
                <li className="font-semibold text-white">About Time</li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  New
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Careers
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Investors
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Purpose
                </li>
                <li className="text-sm font-medium text-[#8A8A8A] hover:text-white transition-all">
                  Sustainability
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            {socialIcons.map(({ icon: Icon, key }) => (
              <SocialIcon key={key} Icon={Icon} />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-2 py-2 border-t-2">
          <div className="flex items-center gap-1">
            <MdLocationOn className="text-white" />
            <p className="text-white font-semibold">
              San Francisco - California
            </p>
          </div>
          <div className="font-thin text-[#909090]">
            <p> © 2023 Tennis Pro Shop, Inc. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

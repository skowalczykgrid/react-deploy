import facebookLogo from "../assets/social-media/fb.svg";
import twitterLogo from "../assets/social-media/twitter.svg";
import instagramLogo from "../assets/social-media/instagram.svg";
import Logo from "./Logo";
import EmailInput from "./EmailInput";

function Footer() {
  return (
    <footer className="flex flex-col ">
      <div className="flex h-[488px] justify-center bg-[#F8F8FD] px-[304px] py-[94px]">
        <div className="flex w-[1920px] justify-center gap-[130px]">
          <div className="flex flex-col gap-8">
            <Logo className="h-8 w-[103px]" />
            <EmailInput />
            <p className="font-light text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-textPrimary">
              Categories
            </h2>
            <ul className="w-max space-y-6">
              <li className=" text-base font-light text-[#8A8FB9]">
                Laptops & Computers
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Cameras & Photography
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Smart Phones & Tablets
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Video Games & Consoles
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Waterproof Headphones
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 w-max text-xl font-bold text-textPrimary">
              Customer Care
            </h2>
            <ul className="w-max space-y-6">
              <li className="text-base font-light text-[#8A8FB9]">
                My Account
              </li>
              <li className="text-base font-light text-[#8A8FB9]">Discount</li>
              <li className="text-base font-light text-[#8A8FB9]">Returns</li>
              <li className="text-base font-light text-[#8A8FB9]">
                Order History
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Order Tracking
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 w-max text-xl font-bold text-textPrimary">
              Pages
            </h2>
            <ul className="w-max space-y-6">
              <li className="text-base font-light text-[#8A8FB9]">Blog</li>
              <li className="text-base font-light text-[#8A8FB9]">
                Browse the Shop
              </li>
              <li className="text-base font-light text-[#8A8FB9]">Category</li>
              <li className="text-base font-light text-[#8A8FB9]">
                Pre-Built Pages
              </li>
              <li className="text-base font-light text-[#8A8FB9]">
                Visual Composer Elements
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-[56px] items-center justify-center bg-[#E5E0FC] px-[304px]">
        <div className="flex w-[1920px] justify-between">
          <p className="text-sm font-light text-[#8A8FB9]">
            ©Webecy - All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <img src={facebookLogo} alt="facebook" className="cursor-pointer" />
            <img src={twitterLogo} alt="twitter" className="cursor-pointer" />
            <img
              src={instagramLogo}
              alt="instagram"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import ButtonBlackBorder from "../../../components/ButtonBlackBorder";
import backgroundImage from "../../../assets/newsletter/newsletter.png";

function Newsletter() {
  return (
    <section className="relative flex h-[457px] flex-col items-center justify-center gap-[60px]">
      <img
        src={backgroundImage}
        alt="newsletter image"
        className="object-position absolute -z-10 h-full w-full object-cover object-[bottom_-80px_right_0px]"
      />
      <h2 className="max-w-[768px] text-center text-[44px] font-bold text-textPrimary">
        Get Latest Update By Subscribe 0ur Newsletter
      </h2>
      <ButtonBlackBorder>Subscribe</ButtonBlackBorder>
    </section>
  );
}

export default Newsletter;

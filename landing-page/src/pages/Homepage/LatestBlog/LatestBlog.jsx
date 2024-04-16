import img1 from "../../../assets/latest-blog/latest-1.jpeg";
import img2 from "../../../assets/latest-blog/latest-2.jpeg";
import img3 from "../../../assets/latest-blog/latest-3.jpeg";
import LatestBlogCard from "./LatestBlogCard";

function LatestBlog() {
  return (
    <section className="flex flex-col items-center gap-[72px] py-[100px]">
      <h2 className="text-[44px] font-bold text-textPrimary">Latest Blog</h2>
      <div className="flex gap-8">
        <LatestBlogCard imgSrc={img1} />
        <LatestBlogCard imgSrc={img2} />
        <LatestBlogCard imgSrc={img3} />
      </div>
    </section>
  );
}

export default LatestBlog;

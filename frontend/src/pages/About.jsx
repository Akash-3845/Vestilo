import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl border-t pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Vestilo began with a simple yet powerful idea — to create a fashion
            brand that blends style, comfort, and individuality. Founded by a
            group of passionate fashion enthusiasts, Vestilo was born out of a
            desire to break away from generic, mass-produced clothing and bring
            something truly meaningful and personal to the modern wardrobe.
          </p>
          <p>
            At Vestilo, we believe fashion should empower, not conform. We aim
            to give everyone the freedom to express their personality through
            versatile, high-quality pieces. Our collections are carefully
            crafted to cater to all — whether you're chasing trends or setting
            them. Each item is made with attention to detail, comfort, and
            durability — because we know clothes aren’t just worn, they’re lived
            in.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to redefine everyday fashion by offering styles that
            are both bold and timeless. As we grow, we remain committed to
            sustainability, ethical production, and community-driven creativity.
            Vestilo isn't just a brand — it’s a journey, a story, and a
            statement. We’re proud of how far we’ve come, and even more excited
            about where we’re headed.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Vestilo, every garment is handpicked and quality-checked to match
            our premium standards. We ensure only the best reaches you.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Enjoy a seamless shopping experience with our easy-to-navigate
            website and fast, reliable checkout process.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our friendly support team is always here to help you with queries,
            returns, and style guidance — because you matter.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;

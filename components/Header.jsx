import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const categories = [
  { name: "React", slug: "react" },
  { name: "Angular", slug: "angular" },
];


const Header = () => {

    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);
  
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div id="myBorder" className="border-b w-full inline-block  py-8">
      <div className="md:float-left block">
  <Link href="/">
    <div className="ml-4 mb-4 cursor-pointer font-bold text-4xl text-white">
      Fmode.net
    </div>
    <div className="cursor-pointer font-bold text-lg text-gray-800">
     Basit bir yazılım geliştirme platformu
    </div>
  </Link>
</div>

        
        <div className="hidden md:float-left  md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span
                className="md:float-right mt-6 align-middle text-white ml-4 font-semibold
                cursor-pointer"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

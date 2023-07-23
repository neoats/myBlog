import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="shadow-lg p-1  lg:p-1 pb-12  bottom-0 w-full sticky">
      <div className="relative  grid  grid-cols-3 gap-4 overflow-hidden  pb-40 ml-40 mt-5 mb-6 ">
         {/* İlk sütun */}
        <div className="col-span-1">
          <h1  className="ml-12">Kısaca</h1>
          <span
            className="block h-px w-36 mt-1 "
            style={{ backgroundColor: "#757575" }}
          ></span>
        </div>

        {/* İkinci sütun */}
        <div className="col-span-1 ">
          <h1 className="ml-12">Harita</h1>
          <span
            className="block h-px w-36 mt-1"
            style={{ backgroundColor: "#757575" }}
          ></span>
        </div>

        {/* Üçüncü sütun */}
        <div className="col-span-1">
          <h1  className="ml-12">Linkler</h1>
          <span
            className="block h-px w-36 mt-1"
            style={{ backgroundColor: "#757575" }}
          ></span>
        </div>
      </div>
      <div className="bg-black object-center h-16 lg:h-16 w-full relative">
        <div className="flex items-center justify-between">
          <p className="text-white pl-30 lg:pl-60 mr-4">
            &copy; 2023 - Tüm Hakları Saklıdır
          </p>
          <button
            id="upBtn"
            className="h-14 w-14 mr-20 mt-1 lg:mr-40"
            onClick={handleScrollToTop}
          >
            <img src="/up.png" className="object-scale-down h-auto w-auto" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

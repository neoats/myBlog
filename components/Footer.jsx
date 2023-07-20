import React from 'react';

const Footer = () => {
  return (
    <footer className=" shadow-lg  p-1 lg:p-1 pb-12 fixed bottom-0 w-full">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
       
      </div>
      <div className="bg-black object-center h-10 lg:h-20 w-full shadow-lg relative">
      
  <p className="text-white text-left pl-60 lg:pl-100 pt-2">
  &copy; 2023 - Tüm Hakları Saklıdır
  </p>
  <div className="bg-black object-center h-10 lg:h-20 w-full shadow-lg relative">
  <button className="fixed right-0 bg-blue-500 text-white pb-10 pr-4 mr-2 -mb-32">Başa Dön</button>
  <p className="text-white text-left pl-60 lg:pl-100 pt-2">&copy; 2023 - Tüm Hakları Saklıdır</p>
</div>

</div>

    </footer>
  );
};

export default Footer;

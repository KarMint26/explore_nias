import React from "react";

function Banner() {
  return (
    <div
      className="w-full h-[38rem] flex items-center px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/foto/pesisir.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="p-10 bg-white/50 w-[40rem] rounded-xl backdrop-blur-sm">
        <h3 className="text-black text-3xl">
          Nikmati Liburanmu Bersama ExploreNias
        </h3>
        <p className="text-xl mt-3 text-slate-600">
          Langsung Kunjungi Tempat Wisata, Festival dan Kulier di ExploreNias
        </p>
      </div>
    </div>
  );
}

export default Banner;

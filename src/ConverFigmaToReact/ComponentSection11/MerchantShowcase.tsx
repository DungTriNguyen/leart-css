"use client";
import * as React from "react";
import ImageColumn from "./ImageColumn";
import TextContent from "./TextContent";

function MerchantShowcase() {
  return (
    <section className="flex relative justify-center items-center px-5 py-10 mx-auto my-0 max-w-[1260px] max-md:flex-col max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <ImageColumn
        smallImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b18d790a2273bf899ddf895ae0c8d25ffa7813d5"
        mediumImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8f98ce8ace38244ecee8e00dbdb515049be50f2f"
        largeImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ee21b42c2a37346bfad360c48f410275cf84e4bf"
      />

      <TextContent />

      <ImageColumn
        smallImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7e84a6c0a942156f075a75e7e7471676caf2ae42"
        mediumImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/88593452a8f50dacbcdb630c34fb65778ed195a5"
        largeImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/91766e809ebbd78987f6f521027d022db7ee3172"
      />
    </section>
  );
}

export default MerchantShowcase;

import Introduction from "@/components/Introduction";
import React from "react";

function HercegNovi() {
  return (
    <div>
      <Introduction
        country="montenegro"
        place="hercegNovi"
        image="/assets/images/countries/montenegro/herceg-novi/intro-bg.webp"
        imageMobile="/assets/images/countries/montenegro/herceg-novi/intro-bg_mob.webp"
        frame={2}
      />
    </div>
  );
}

export default HercegNovi;

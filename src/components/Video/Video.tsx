import React from "react";

import s from "./Video.module.scss";

type VideoProps = {
  src: string;
};
function Video({ src }: VideoProps) {
  return (
    <div className={s.videoWrapper}>
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={s.video}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Video;

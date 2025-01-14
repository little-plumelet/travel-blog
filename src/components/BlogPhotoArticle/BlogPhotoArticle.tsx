import React from "react";
import cn from "classnames";
import Image from "next/image";

import PhotoCard from "../PhotoCard/PhotoCard";

import s from "./BlogPhotoArticle.module.scss";

type BlogPhotoArticleProps = {
  photoWrapperClassName?: string;
  children?: React.ReactElement<typeof PhotoCard>;
  text: string;
  descriptionBackground?: "circle" | "circle_2";
  isMirrored?: boolean;
};
function BlogPhotoArticle({
  text,
  children,
  photoWrapperClassName,
  isMirrored = false,
  descriptionBackground = "circle",
}: BlogPhotoArticleProps) {
  return (
    <article className={cn(s.block, { [s.blockMirror]: isMirrored })}>
      <div className={s.descriptionWrapper}>
        <Image
          className={s.descriptionBackground}
          src={`/assets/images/frames/${descriptionBackground}.svg`}
          width={1300}
          height={1300}
          alt="description background"
        />
        <div
          className={s.description}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
      {/* <p>
          
          Мне нравится купить кусок горячей пиццы на вынос, сесть на лавочку и
          жевать глядя на воду и птиц. Вечером же приятно красиво посидеть за
          столиком с бокалом вина или ракии. Херцег-Нови это про созерцание и
          гедонизм. Моя любимая часть в кафе - подача чая. Обязательно принесут
          лимон и мед. Внимание: Чтобы гулять по
          Херцег-Нови нужно быть достаточно спортивным человеком, не зря
          Херцег-Нови называется городом лестниц, прогуляться от набережной к
          центру города и обратно означает серьезно подкачать попу и ноги, чему
          я весьма радовалась после нескольких месяцев таких прогулок ;-).
        </p>
        */}
      {children && (
        <div className={cn(photoWrapperClassName, s.photoWrapper)}>
          {children}
        </div>
      )}
    </article>
  );
}

export default BlogPhotoArticle;

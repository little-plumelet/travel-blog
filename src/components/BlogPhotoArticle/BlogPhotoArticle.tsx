import React from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

import PhotoCard from "../PhotoCard/PhotoCard";

import s from "./BlogPhotoArticle.module.scss";

type BlogPhotoArticleProps = {
  photoWrapperClassName?: string;
  children: React.ReactElement<typeof PhotoCard>;
  textKey: string;
  isMirrored?: boolean;
};
function BlogPhotoArticle({
  textKey,
  children,
  photoWrapperClassName,
  isMirrored = false,
}: BlogPhotoArticleProps) {
  const t = useTranslations();
  return (
    <article className={cn(s.block, { [s.blockMirror]: isMirrored })}>
      <div
        className={s.description}
        dangerouslySetInnerHTML={{
          __html: t.raw(textKey),
        }}
      />
      {/* <p>
          На одном конце набережной гостиничный комплекс Лазуре и его марина -
          там можно полюбоваться на яхты или договориться о морской прогулке, на
          другом конце - самый современный район - Игало с магазинами и кафе.
          Вдоль набережной расположено огромное количество кафан и ресторанов.
          Мне нравится купить кусок горячей пиццы на вынос, сесть на лавочку и
          жевать глядя на воду и птиц. Вечером же приятно красиво посидеть за
          столиком с бокалом вина или ракии. Херцег-Нови это про созерцание и
          гедонизм. Моя любимая часть в кафе - подача чая. Обязательно принесут
          лимон и мед. Мы остановились на третьей линии от моря в симпатичной
          студии. Во дворе росло лимонное дерево и хозяин дома разрешил нам
          рвать по лимону в день. Все-таки приятно пить чай с лимоном, который
          ты не купил а сорвал собственной рукой. Внимание: Чтобы гулять по
          Херцег-Нови нужно быть достаточно спортивным человеком, не зря
          Херцег-Нови называется городом лестниц, прогуляться от набережной к
          центру города и обратно означает серьезно подкачать попу и ноги, чему
          я весьма радовалась после нескольких месяцев таких прогулок ;-).
        </p>
        <p>
          Довольно непривычно было то что в воскресенье все магазины закрыты, и
          прилет в воскресенье означает 'голодную смерть' - но спасение есть -
          кафе/рестораны и заправки работают. Еще все очень специализированно,
          хлеб и булочки продаются в пекаре, мясо в месаре а фрукты - во
          фруктовых лавках.
        </p> */}
      <div className={cn(photoWrapperClassName, s.photoWrapper)}>
        {children}
      </div>
    </article>
  );
}

export default BlogPhotoArticle;

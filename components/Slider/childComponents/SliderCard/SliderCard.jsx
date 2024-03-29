import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Style from "./SliderCard.module.css";

const SliderCard = ({ background, idx }) => {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={background}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
            width={500}
            height={300}
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{idx + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            <small>{idx + 4} 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{idx + 2}.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>
              {idx + 1}h : 15m : {idx + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;

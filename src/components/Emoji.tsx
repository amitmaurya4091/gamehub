import BullsEye from "../assets/Emojis/bulls-eye.webp";
import ThumbsUp from "../assets/Emojis/thumbs-up.webp";
import Meh from "../assets/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "extraordinary", boxSize: "35px" },
  };
  if (rating_top < 3) return null;
  return <Image {...emojiMap[rating_top]} marginTop={1} />;
};

export default Emoji;

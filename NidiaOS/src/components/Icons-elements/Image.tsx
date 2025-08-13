import { useState } from "react";
import Icon from "../Icon";
import image from "../../assets/image-icon.png";

interface ImageProperties {
  name: string;
}

export default function Image({ name }: ImageProperties) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenImage() {
    if (!isOpen) setIsOpen(true);
  }

  return (
    <>
      {isOpen && <div>Helouda</div>}
      <Icon
        image={image}
        name={name}
        onClicker={() => handleOpenImage()}
      ></Icon>
    </>
  );
}

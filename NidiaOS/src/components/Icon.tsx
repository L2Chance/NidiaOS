interface IconProperties {
  name: string;
  image: string;
  onClicker?: () => void;
}

export default function Icon({ name, image, onClicker }: IconProperties) {
  return (
    <div
      className="h-30 w-30 flex flex-col justify-center items-center cursor-pointer"
      onClick={() => {
        if (onClicker) {
          onClicker();
        }
      }}
    >
      <img className="h-20 w-20" src={image} alt="icon" />
      <p className="font-gohu-11">{name}</p>
    </div>
  );
}

interface ButtonMenuProps {
  OpenMenu: () => void;
}

export default function ButtonMenu({ OpenMenu }: ButtonMenuProps) {
  return (
    <button
      onClick={() => OpenMenu()}
      className="w-25 border-effect bg-gray-200 cursor-pointer"
    >
      🟢 Start
    </button>
  );
}

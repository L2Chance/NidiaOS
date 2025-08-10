import { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";
import Menu from "./Menu";

export default function Taskbar() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [menuIsActive, setMenuIsActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function HandleOpenMenu() {
    if (!menuIsActive) setMenuIsActive(true);
    else {
      setMenuIsActive(false);
    }
  }

  return (
    <>
      <div className=" absolute z-50 flex items-center h-15 fixed bottom-0 w-full border-effect bg-gray-200">
        <section className="flex flex-1">
          <article>
            <ButtonMenu OpenMenu={() => HandleOpenMenu()}></ButtonMenu>
          </article>
          <article>Icons</article>
        </section>
        <section className="w-auto px-4">
          <p> {hour}</p>
        </section>
      </div>
      {menuIsActive && <Menu />}
    </>
  );
}

import { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";

export default function Taskbar() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center h-15 fixed bottom-0 w-full border-effect bg-gray-200">
      <section className="flex flex-1">
        <article>
          <ButtonMenu></ButtonMenu>
        </article>
        <article>Icons</article>
      </section>
      <section className="w-auto px-4">
        <p> {hour}</p>
      </section>
    </div>
  );
}

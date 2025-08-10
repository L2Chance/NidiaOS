import { useEffect, useState } from "react";
import folder from "../assets/folder.png";
import Taskbar from "../components/taskbar/Taskbar";

export default function Desktop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  }, []);

  if (isVisible) {
    return (
      <>
        <div className="absolute w-full h-[100vh] bg-cyan-600">
          <div className="font-gohu-14">Hello, this is the desktop</div>
          <div>
            <img className="pixelated-effect" src={folder} alt="folderimage" />
          </div>
        </div>
        <Taskbar></Taskbar>
      </>
    );
  }
}

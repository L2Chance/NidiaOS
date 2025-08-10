import { useEffect, useState } from "react";
import folder from "../assets/folder.png";
import Taskbar from "../components/taskbar/Taskbar";
import Icon from "../components/Icon";
import Folder from "../components/folder/Folder";

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
        <div className="absolute w-full h-[100vh] bg-blue-300">
          <div className="flex">
            <section className="max-h-[90vh] gap-x-2 flex flex-col flex-wrap items-center">
              <Folder folderName="MyFoldering"></Folder>
              <Icon image={folder} name="MyFolder" />
              <Icon image={folder} name="MyFolder" />
              <Icon image={folder} name="MyFolder" />
              <Icon image={folder} name="MyFolder" />
            </section>
          </div>
        </div>
        <Taskbar></Taskbar>
      </>
    );
  }
}

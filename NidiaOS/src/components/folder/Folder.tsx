import { useRef, useState } from "react";
import folder from "../../assets/folder.png";
import Icon from "../Icon";
import Draggable from "react-draggable";

interface FolderProperties {
  folderName: string;
}

export default function Folder({ folderName }: FolderProperties) {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    if (!isOpen) setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
        <>
          <Draggable nodeRef={nodeRef}>
            {/*This is the design for the folder*/}
            <div
              ref={nodeRef}
              className=" bg-amber-400 items-center justify-center h-[500px] w-[700px]"
            >
              Hello, i'm a folder
            </div>
          </Draggable>
        </>
      )}
      <Icon image={folder} name={folderName} onClicker={handleOpen}></Icon>
    </>
  );
}

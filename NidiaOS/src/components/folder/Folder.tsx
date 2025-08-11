import { useState } from "react";
import folder from "../../assets/folder.png";
import Icon from "../Icon";
import Window from "../Window";

interface FolderProperties {
  folderName: string;
}

export default function Folder({ folderName }: FolderProperties) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    if (!isOpen) setIsOpen(true);
  }

  function handleClose() {
    if (isOpen) setIsOpen(false);
  }

  return (
    <>
      <Icon image={folder} name={folderName} onClicker={handleOpen}></Icon>
      {isOpen && (
        <>
          <Window
            longer="[700px]"
            title="Folder"
            closerWindow={() => handleClose()}
          >
            <div className=" bg-yellow-700 items-center justify-center h-[500px] w-[700px] absolute">
              <section className="h-[15%] w-[100%] bg-amber-100 flex justify-center items-center border-2">
                <section className="flex justify-center items-center mt-7 bg-[#686550] text-white w-[650px] rounded-[1rem]">
                  <p className="font-gohu-14">/C:/desktop/{folderName}</p>
                </section>
              </section>
              <div className="flex h-full w-full">
                <section className="h-[85%] w-[20%] bg-amber-100 flex justify-center items-center border-2">
                  Hello, i'm a section
                </section>
                <section className="h-[85%] w-[80%] bg-amber-100 flex justify-center items-center border-2">
                  hello
                </section>
              </div>
            </div>
          </Window>
        </>
      )}
    </>
  );
}

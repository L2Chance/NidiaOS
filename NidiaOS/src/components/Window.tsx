import { useRef, type ReactNode } from "react";
import Draggable from "react-draggable";

interface WindowProperties {
  children: ReactNode;
  title: string;
  longer: string;
  closerWindow: () => void;
}

export default function Window({
  children,
  title,
  closerWindow,
  longer,
}: WindowProperties) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <section
          className={`bg-gray-200 border-2 h-8 flex justify-between items-center z-60 w-${longer} absolute`}
        >
          <p className="ml-3 font-gohu-11">{title}</p>
          <button
            className="bg-red-600 h-5 w-5 flex rounded-full cursor-pointer justify-center items-center mr-1.5"
            onClick={() => closerWindow()}
          >
            x
          </button>
        </section>
        {children}
      </div>
    </Draggable>
  );
}

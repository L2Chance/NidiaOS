import "../styles/filter.css";
import video from "../assets/filter-video.mp4";

export default function filter() {
  return (
    <div className="absolute w-[100vw] h-[100vh] truncate ">
      <video
        className="absolute sepia-50 z-100 pointer-events-none object-cover opacity-3 w-[100%]"
        src={video}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

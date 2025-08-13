import "../styles/shadowFilter.css";

export default function ShadowFilter() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-[500] shadow-filter"></div>
    </div>
  );
}

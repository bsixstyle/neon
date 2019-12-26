import React from "react";
function SidebarEx() {
  return (
    <div id="sidebar">
      <h1>Sidebar</h1>

      <iframe
        src="https://codesandbox.io/embed/neon-sidebar-f41bn?fontsize=14&hidenavigation=1&theme=dark"
        style={_style}
        title="neon-sidebar"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
const _style = {
  width: "100%",
  height: "500px",
  border: "0",
  borderRadius: "4px",
  overflow: "hidden"
};
export default SidebarEx;

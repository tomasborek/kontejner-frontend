import React, { useEffect } from "react";

const Feed = () => {
  useEffect(() => {
    window.PixleeAsyncInit = function () {
      Pixlee.init({ apiKey: "kJbI_trUw70SimutKbVr" });
      Pixlee.addSimpleWidget({ widgetId: "36854" });
    };
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js";
    document.body.appendChild(scriptTag);
  }, []);
  return (
    <div className="container">
      <div style={{ width: "100%" }} id="pixlee_container" />
    </div>
  );
};

export default Feed;

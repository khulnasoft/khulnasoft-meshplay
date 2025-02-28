import * as React from "react";
import MeshplayDesignEmbed from "@khulnasoft/meshplay-design-embed";
const Testing = () => {
  return (
    <main>
      <MeshplayDesignEmbed
        style={{ border: "1px solid #eee" }}
        embedId="embedded-design-6f2255ba-54bf-4cb8-9033-262b8464d5d2"
        embedScriptSrc="embed-test/embedded-design-embed1.js"
      />
    </main>
  );
};

export default Testing;

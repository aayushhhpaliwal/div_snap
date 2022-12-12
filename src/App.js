import React, { useRef } from "react";
import "./styles.css";

import { Box } from "./Box";

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

const Container = ({ children }) => {
  const ref = useRef();

  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <SnapParent
        ref={ref}
        style={{
          position: "absolute"
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

function ScrollSample() {
  return (
    <Container>
      <Box color="#FDD692">Box 1 (full)</Box>
      <Box color="#C5E99B">Box 2 (half)</Box>
      <Box color="#84B1ED">Box 3 (full)</Box>
      <Box color="#67D5B5">Box 4 (half)</Box>
      <Box color="#FDD692">Box 5 (full)</Box>
      <Box color="#84B1ED">Box 6 (full)</Box>
    </Container>
  );
}

export default function App() {
  return (
    <div>
      <ScrollSample />
    </div>
  );
}

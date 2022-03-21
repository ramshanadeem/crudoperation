import React, { useState } from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
function AnimatedButton({ animateHover = false, iconPosition = "left" }) {
  const [expandType, setExpandType] = useState("close");
  return (
    <div>
      {" "}
      <motion.div
        style={{
          width: "fit-content",
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.0367952)",
          borderRadius: "16px",
          backgroundColor: "grey",

          fontWeight: "bold",
          display: "flex",

          alignItems: "center",
          fontSize: "12px",
          textAlign: "center",
          color: "#FFFFFF",
          margin: "auto",
          justifyContent: "space-between",

          padding: `2px ${expandType === "close" ? "10" : "17"}px 2px 10px`,
          flexDirection: iconPosition === "left" ? "row" : "row-reverse",
          zIndex: -1,
        }}
        onHoverStart={() => animateHover && setExpandType("expand")}
        onHoverEnd={() =>
          setTimeout(() => animateHover && setExpandType("close"), 2000)
        }
      >
        <AddIcon />
        <motion.div
          initial={expandType}
          variants={{
            close: { width: 0, marginLeft: 0, marginRight: 0 },
            expand: {
              width: "fit-content",
              marginRight: iconPosition === "left" ? 0 : 4,
              marginLeft: iconPosition === "left" ? 4 : 0,
            },
          }}
          animate={expandType}
          transition={{ type: "tween", duration: 0.25 }}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          expandable
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AnimatedButton;

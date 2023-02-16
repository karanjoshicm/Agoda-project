import React from "react";

//helpers
import useOutsideClick from "../../helpers/useOutsideClick";

//styles
import "./Tooltip.scss";
const Tooptip = ({ children, setShowToolTip = () => { }, style = {} }) => {
  const ref = useOutsideClick(() => setShowToolTip(false));

  return (
    <div style={style} ref={ref} className="tooltip">
      {children}
    </div>
  );
};

export default Tooptip;

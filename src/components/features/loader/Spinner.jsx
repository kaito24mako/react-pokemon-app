import { RotatingLines } from "react-loader-spinner";
import { useTheme } from "../../../context/ThemeContext";

function Spinner() {
  const { isDark } = useTheme();

  return (
    <RotatingLines
      visible={true}
      height="50"
      width="50"
      color={isDark ? "#ffffff" : "#000000"}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass="spinner-loader"
    />
  );
}

export default Spinner;

import { MagnifyingGlass } from "react-loader-spinner";

function Spinner() {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height="120"
        width="120"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#ffffff"
        color="#e60000"
      />
    </>
  );
}

export default Spinner;

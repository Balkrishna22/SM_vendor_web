export const getCustomstyle = (size) => {
  return {
    valueContainer: (provided) => ({
      ...provided,
      height: "calc(2.15rem + 2px)",
      overflowY: "visible",
    }),
    control: (provider) => ({
      ...provider,
      borderColor:
        // "#34c38f",
        //   "#f46a6a",
        "#195da4 ",
      boxShadow: "0 0 0 0px #195da4 ",
      width: { size },
    }),
    placeholder: (provider) => ({
      ...provider,
      color: "#195da4 ",
    }),
  };
};

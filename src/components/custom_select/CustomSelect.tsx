import { useState, Fragment, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { makeStyles } from "@mui/styles";
import arrowDown from "../../assets/shared/icon-arrow-down.svg";
import colors from "../../utils/colors";
import check from "../../assets/shared/icon-check.svg";

const styles = makeStyles({
  container: {
    width: "100%",
    position: "relative",
  },
  select: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#647196",
    backgroundColor: "#F7F8FD",
    border: "2px solid white",
    borderBottom: "2px solid #F2F4FF",
    borderRadius: "0.5rem",
    padding: "0.7rem 2rem",
    textAlign: "left",
    transition: "color 0.2s ease-in-out",
    // position: "relative",
    "&:hover": {
      border: "2px solid #4661E6",
    },
  },
  options: {
    width: "100%",
    // listStyle: "none",
    borderRadius: "0.5rem",
    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
    overflow: "hidden",
    position: "absolute",
  },
  option: {
    width: "100%",
    color: "#647196",
    backgroundColor: "white",
    borderBottom: "2px solid #F2F4FF",
    padding: "0.7rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      color: "#AD1FEA",
    },
  },
});
type CategoryType = {
  label: string;
  value: string;
};
type CustomSelectProps = {
  options: CategoryType[];
  value: CategoryType;
  onChange: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
};

const CustomSelect = ({ options, value, onChange }: CustomSelectProps) => {
  const [selected, setSelected] = useState(options[0]);
  const classes = styles();

  return (
    <div className={classes.container}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button className={classes.select}>
          {value.label}
          <img src={arrowDown} alt="" />
        </Listbox.Button>
        <Listbox.Options className={classes.options}>
          {options.map((item, index) => (
            <Listbox.Option key={index} value={item} as={Fragment}>
              {({ active, selected }) => (
                <li className={classes.option}>
                  {item.label}
                  {item.label === value.label && <img src={check} alt="" />}
                </li>
              )}
              {/* {person.name} */}
              {/* {selected.name === person.name && <img src={check} alt="" />} */}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default CustomSelect;

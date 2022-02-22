import { makeStyles } from "@mui/styles";
import check from "../../assets/shared/icon-check.svg";

type DropDownItemsProps = {
  value: string;
  selected: boolean;
  someFunction: (event: React.MouseEvent) => void;
  children: React.ReactNode;
};
export function DropDownItem(props: DropDownItemsProps) {
  const classes = makeStyles({
    item: {
      width: "100%",
      color: "#647196",
      backgroundColor: "white",
      borderBottom: "2px solid #F2F4FF",
      padding: "0.7rem 2rem",
      cursor: "pointer",
      transition: "color 0.2s ease-in-out",
      position: "relative",
      "&:hover": {
        color: "#AD1FEA",
      },
      "& img": {
        position: "absolute",
        right: "2rem",
      },
    },
  })();

  return (
    <p
      className={classes.item}
      role="menuitem"
      onClick={(e) => {
        props.someFunction(e);
      }}
    >
      {props.children}
      {props.selected === props.children && <img src={check} alt="" />}
    </p>
  );
}

import classes from "./Table.module.css";

function Table(props) {
  return <table className={classes.table}>{props.children}</table>;
}

export default Table;

import { useState, useEffect } from "react";
import classes from "./Typing.module.css";

function Typing(props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === props.words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      if (index === props.words.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 130);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1 className={classes.text}>
        Also a{" "}
        {`${props.words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
}

export default Typing;

import React from "react";
import { CSSTransition } from "react-transition-group";

const AnimatedDiv = () => (
  <div className="page-border">
    <CSSTransition
      in={true}
      appear={true}
      timeout={700}
      classNames="top-border"
    >
      <div className="top-border"></div>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={700}
      classNames="right-border"
    >
      <div className="right-border"></div>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={700}
      classNames="bottom-border"
    >
      <div className="bottom-border"></div>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={700}
      classNames="left-border"
    >
      <div className="left-border"></div>
    </CSSTransition>
  </div>
);

export default AnimatedDiv;

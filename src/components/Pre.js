import React from "react";

function Pre(props) {
  return (<div id={props.load ? "preloader" : "preloader-none"} class="preloader-div">
</div>);
}

export default Pre;
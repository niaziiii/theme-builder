import React from "react";

function Facebook() {
  return (
    <div className="w-full flex justify-center mt-10">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fpresoftz%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=340&height=271&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId"
        width="340"
        height="70"
        className="border-none overflow-hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Facebook;

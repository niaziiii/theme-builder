import React from "react";

const Map = () => {
  return (
    <div className="w-full p-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.795266846813!2d71.4861886747375!3d33.997792120605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917cf3ea401df%3A0xd3b246244e041f25!2sPrecise%20Technology!5e0!3m2!1sen!2s!4v1715257386850!5m2!1sen!2s"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Map;

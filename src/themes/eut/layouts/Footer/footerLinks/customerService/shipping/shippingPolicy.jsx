const ShippingPolicy = () => {
  return (
    <div className="w-[50%] mx-auto mb-24">
      <h1 className="text-[#7A7A7A] text-3xl font-normal mb-6">
        Shipping is free over $50!
      </h1>
      <p className="text-[#7A7A7A] font-medium">
        We offer FREE shipping on orders of $50 or more, delivered across
        Canada.
        <br />
        <br />
        All parcels are shipped via Canada Post Expedited Parcel Rate with ‘DO
        NOT SAFE DROP’ option selected. In the event that no one is available to
        receive the item, a delivery notice card will be left by Canada Post and
        the parcel may then be collected from the Canada Post location indicated
        on the card.
        <br />
        <br />
        All orders require 3-5 business days of processing time to be picked,
        packed and prepared for shipping.
        <br />
        <br />
        If you have any questions about the status of your order, please{" "}
        <span className="text-[#A6CE39]">contact us. </span>{" "}
      </p>
      <br />
      <br />
      <h1 className="text-[#7A7A7A] text-3xl font-normal mb-6">Returns.</h1>
      <p className="text-[#7A7A7A] font-medium">
        Our goal at naturalcalm.ca is to ensure that you are totally satisfied
        with your shopping experience. We accept returns of unopened products up
        to 30 days after the date of purchase. Opened or used products or items
        marked as non-refundable/final sale are not within our return
        guidelines. Customer is responsible for return shipping. If you’re
        trying our products for the first time, we recommend buying a 226g/8oz
        bottle (the smaller size) or emailing us requesting free small sample
        sachets so you can try them. We usually have them available in our most
        popular flavours.
      </p>
    </div>
  );
};

export default ShippingPolicy;

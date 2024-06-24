const GivingBack = () => {
  return (
    <div className="flex flex-col px-5">
      {/* Main Heading Section */}
      <div className="mt-16 text-3xl leading-10 text-sky-600 max-md:mt-10">
        <p>
          On a trip to Malawi in 2004, Linda and Dale Bolton were blown away by
          the fact that there were an estimated 34 million orphans in Africa. In
          response, they started a not-for-profit and committed to donating 100%
          of their company&apos;s profits.
        </p>
      </div>

      {/* Story Section */}
      <div className="mt-10 max-w-fullmax-md:mt-10">
        <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0">
          <div className="my-10">
            <h4 className="text-2xl text-neutral-500 leading-7 max-md:max-w-full">
              We first realized the need in Malawi in 2004.
            </h4>
          </div>
          <div className="md:flex gap-10 mx-auto text-lg max-w-full w-[1102px] leading-6 text-[#989898]">
            <p>
              It was at an orphanage we'd helped build. The children were loved,
              protected, educated, immunized.
              <br />
              <br />
              But with all the costs, there was only enough to feed them a diet
              of ugali – the equivalent of white cornmeal. They could never
              thrive and fight life-threatening diseases on such limited
              nutrients.
              <br />
              <br />
              Yet all around the orphanage was uncultivated land and the perfect
              conditions for growing. With the right knowledge and simple tools,
              we knew that orphanage could grow life-giving, disease-fighting
              foods without the limitations of cost.
              <br />
              <br />
              We set out to find a way and created a not-for-profit, then called
              Organics 4 Orphans.
            </p>
            <p>
              Getting our hands deep in the soil in Africa, learning from local
              biointensive agriculture experts, we developed research-based
              methods for growing the most nutritious food, organically — almost
              anywhere and at the lowest cost.
              <br />
              <br />
              We layered in a model for holistic health that includes in-depth
              education on nutrition, cultivation and use of natural medicinal
              plants.
              <br />
              <br />
              But knowledge only matters if it can be shared — and we realized
              that what's needed is a movement for growing health. We learned
              how to teach people to teach others, so health changes can ripple
              out across communities, countries, continents.
              <br />
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="shrink-0 mx-auto mt-14 max-w-full h-px border-t border-sky-600 border-solid w-[560px] max-md:mt-10" />
      </div>

      <div
        className="flex overflow-hidden relative mx-auto text-lg leading-6 min-h-[1055px] md:w-full mt-14 max-w-full w-[1102px] max-md:mt-10 object-contain"
        style={{
          backgroundImage: "url('/DSC_0668Celestinegradientwhite3.jpeg')",
          backgroundSize: "contain",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          padding: "0px 0px 300px 0px",
          maxWidth: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div className="mx-auto flex flex-col relative max-w-full w-[1102px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col gap-10 mx-auto text-lg max-w-full w-[1102px] leading-6 text-[#989898]">
              <p className="max-md:max-w-full">
                Along the way, we discovered that when people grow their own
                health, they can step out of poverty. Their lives are no longer
                consumed by illness. Their food costs drop. And they have the
                skills to grow surplus for income.
                <br />
                <br />
                Growing health this way plants hope and harvests change. That's
                why we call what we cultivate, 'Life Gardens.'
                <br />
                <br />
                Our training centre, the Growing Health Institute in Kenya, and
                all costs for operations have been covered by nearly $3 million
                in donations from Natural Calm Canada. That means 100% of public
                donations have always gone directly to fund Life Gardens in
                places where nutrition is needed most.
                <br />
                <br />
                Today, we're called Thrive for Good. By changing our name, we've
                embraced that our impact extends beyond specific people or
                demographics: It's a movement that empowers individuals and
                communities to THRIVE and eradicate poverty. It reflects our big
                vision to transform the health and lives of 1 million people by
                2025.
                <br />
                <br />
                All of this is thanks to over <b>$2 million in donations</b>
                from the sale of Natural Calm in Canada. And it's just the
                beginning.
                <br />
                <br />
                Thrive is gaining momentum, and we believe you'll someday
                discover that your simple act of <b>conscious shopping</b>
                enabled something much, much bigger. In a world of choice,
                <b>thank you</b> for choosing to support the magnesium brand
                that's making a difference.
              </p>
              <button className="justify-center self-start px-8 py-6 mt-7 text-sm tracking-widest leading-5 text-center text-white uppercase whitespace-nowrap bg-sky-600 font-semibold rounded-[50px] hover:bg-lime-500 max-md:px-5">
                Find out more
              </button>
            </div>

            <div className="flex flex-col gap-10 mx-auto text-lg max-w-full w-[1102px] leading-6 text-[#989898] invisible">
              {/* Space Div */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingBack;

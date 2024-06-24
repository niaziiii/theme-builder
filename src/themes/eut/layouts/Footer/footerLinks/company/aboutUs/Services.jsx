export default function Services() {
  const heading = [
    {
      leftHeading: [`Excellent Products & Service`],
      centerHeading: [`Integrity`],
      rightHeading: [`Social Justice`],
    },
  ];
  const content = [
    {
      leftTitle: [
        `We acknowledge a huge responsibility to the Canadians who put their faith in our products. `,
        `From personal experience we know that Natural Calm can substantially reduce pain, improve sleep, stress, heart health, bone density, and more.`,
        `Natural Calm Canada is committed to only offering the purest, most absorbable, most effective magnesium. `,
        `The fact that Natural Calm tastes great is important, too, because it’s a supplement you should take daily.`,
        `We’re grateful for your loyalty and strive to show it by delivering the most caring and responsive service.`,
      ],
      centerTitle: [
        `We believe business should be conducted with complete honesty, transparency and a commitment to doing what’s right.`,
        `Integrity guides our relationships with suppliers, partners, the retailers who carry our products and every customer who uses Natural Calm. `,
        `Telling the whole truth is an important part of integrity and that’s why we strive to understand and share the most rigorous science on natural health and on magnesium, specifically. `,
        `This moral compass keeps us aligned with doing what’s fair, not just what’s good for business`,
      ],
      rightTitle: [
        `We believe it’s our responsibility to help those who have been less fortunate and make the world more fair for everyone.`,
        `Natural Calm is doing this by focusing on the eradication of extreme poverty.`,
        `People in extreme poverty cannot meet basic needs for food, water, shelter and medicine.`,
        `That’s why the charity we founded, Thrive for Good, equips communities to grow an abundance of nutritious food — even if they have little land and limited access to water.`,
        `By addressing hunger and disease, Thrive makes it possible for those in extreme poverty to improve their own futures.`,
      ],
    },
  ];
  return (
    <div className="md:flex md:justify-between gap-x-4 text-[#898989] text-md my-5 xs:block">
      <div>
        <div>
          {heading[0].leftHeading.map((item) => (
            <div className="my-2 text-xl text-blue-500">
              {item}
              <br />
            </div>
          ))}
        </div>
        {content[0].leftTitle.map((item) => (
          <div className="my-2">
            {item}
            <br />
          </div>
        ))}
      </div>
      <div>
        <div>
          {heading[0].centerHeading.map((item) => (
            <div className="my-2 text-xl text-blue-500">
              {item}
              <br />
            </div>
          ))}
        </div>
        {content[0].centerTitle.map((item) => (
          <div className="my-2">
            {item}
            <br />
          </div>
        ))}
      </div>
      <div>
        <div>
          {heading[0].rightHeading.map((item) => (
            <div className="my-2 text-xl text-blue-500">
              {item}
              <br />
            </div>
          ))}
        </div>
        {content[0].rightTitle.map((item) => (
          <div className="my-2">
            {item}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

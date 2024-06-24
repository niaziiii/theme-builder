export const sectionsData = {
  sowa: [
    {
      refComponent: "BANNER",
      data: {
        style: {},
        heading: {
          content: "Test Sowa Headeing",
          style: {},
        },
        description: {
          content: "Test Sowa Description",
          style: {},
        },
        button: {
          content: "shop numbers",
          style: {
            fontSize: "20",
          },
        },
      },
    },
    {
      refComponent: "SOW-INFO",
      data: {
        info: [
          {
            id: "1",
            title: "Free Delivery",
            description: "For all oders over $99",
          },
          {
            id: "2",
            title: "Free Delivery",
            description: "For all oders over $99",
          },
          {
            id: "3",
            title: "Free Delivery",
            description: "For all oders over $99",
          },
          {
            id: "4",
            title: "Free Delivery",
            description: "For all oders over $99",
          },
        ],
      },
    },
   {
    refComponent : "DEAL-OF-THE-DAY" ,
    data : {
      style: {},
      heading: {
        content: "Deals of the day",
        style: {},
      } ,
      deals : [
        {
          id : 1 ,
          title: "Grand Slam Indoor Of Show Jumping Novel",
          rating: 2,
          store: "Robert's store",
          imgSrc: "/dealOfTheDay/image-1.jpg",
          price: {
            orignal: "41.27",
            discounted: "32.39",
          },
        },
        {
          id : 2 ,
          title: "Korea Long Sofa Fabric In Blue Navy Color",
          rating: 1,
          store: "Young Shop",
          imgSrc: "/dealOfTheDay/image-2.jpg",
          price: {
            orignal: "90.27",
            discounted: "72.39",
          },
        },
        { 
          id : 3 ,
          title: "LG White Front Load Steam Washer",
          rating: 4,
          store: "Robert's store",
          imgSrc: "/dealOfTheDay/image-3.jpg",
          price: {
            orignal: "120.27",
            discounted: "32.39",
          },
        },
        {
          id : 4 ,
          title: "Edifier Powered Bookshelf Speakers",
          rating: 2,
          store: "Young store",
          imgSrc: "/dealOfTheDay/image-4.jpg",
          price: {
            orignal: "41.27",
            discounted: "32.39",
          },
        },
        {
          id : 5 ,
          title: "DJI Phantom 4 Quadcopter Camera",
          rating: 5,
          store: "Robert's store",
          imgSrc: "/dealOfTheDay/image-5.jpg",
          price: {
            orignal: "41.27",
            discounted: "32.39",
          },
        },
      ]
    }
   },
   {
    refComponent : "Alert" ,
    data : {
      description : "abc"
    }
   }
  ],
};

export const getData = (data, refComponent) => {
  const d = data.find((item) => item.refComponent === refComponent);
  return d.data;
};

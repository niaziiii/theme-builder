import React from 'react'
const content = [
    {
        leftTitle: [
            `Hi, I’m Linda Bolton. Together with my husband, Dale, I founded Natural Calm Canada in 2005.`,
            `Natural Calm made a huge difference in my health, but at that time, it was only available in the USA.`,
            `So, starting with just a small wholesale order, I brought Natural Calm to independent health stores near Thornhill where we live.`,
            `I also personally distributed hundreds of thousands of samples to Canadians across the country and raised awareness of chronic magnesium deficiency.`,
            `When people try Natural Calm, they can feel the difference quickly. Over the years, I’ve heard countless ‘before and after’ Natural Calm stories.`,
            `People who had insomnia are able to sleep, thanks to Natural Calm. `,
            `Parents whose children were hyperactive are seeing their kids become calmer`,
        ],
        rightTitle: [
            `Adults who struggled with tension, pain, stress and anxiety are getting relief.`,
            `And these are just some of the more common symptoms Natural Calm helps to resolve. `,
            `We still hear almost daily from Natural Calm fans of all ages who tell us how their health has been changed. It’s so rewarding.`,
            `Today, we are the exclusive distributors of Natural Calm in Canada.`,
            `Backed by thousands of five-star reviews, multiple awards and a groundbreaking clinical study, Natural Calm is truly Canada’s better-tasting, better-absorbing, best-loved magnesium.`,
            `If you have any questions, please reach out. We are happy to help you on your health journey.`
        ]
    }
]
const TextOne = () => {
    return (
        <div className='xs:block xs:w-[90%] xs:mx-auto md:flex justify-between text-[#898989] text-md mt-5 my-10'>
            <div className='md:me-5'>
                {content[0].leftTitle.map((item) => (
                    <div className='my-2 mx-auto max-w-[100%]'>
                        {item}
                        <br />
                    </div>
                ))}
            </div>
            <div>
                {content[0].rightTitle.map((item) => (
                    <div className='my-2 mx-auto md:max-w-[90%] xs:w-full'>
                        {item}
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TextOne

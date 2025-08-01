import headshot from './myHeadshot copy.jpeg';

function Founder() {
    return (
        <>
            <div className="founder">
                <img src={headshot} alt="Founder headshot" className="headshot" />

            </div>

            <div className="founderParagraph">
                {/* <p className="founderParagraph">  */}

                <p>my name is Tamera Middlebrooks and i'm the founder of purepostage! i got involved in environmental justice work at the age of 18, when the youth activist non-profit i'd co-founded worked on a water testing project in response to lead contaminated water in surrounding neigborhoods of DPS schools. since then, i've continued to participate in EJ advocacy here in Detroit, as well as continuing to educate myself (and others) as much as possible on the realities of climate change and human behaviors that contribute to it.
                    <br></br>
                    <br></br>
                    a few years ago, as i became more passionate about taking direct action through ethical fashion, i had the idea for a sustainable shipping platform that could reduce environmental harm. 
                                       <br></br>

                    thanks to the MSU Apple Developer Academy, i now have the tools and roadmap to make that vision real. what started as a passion for sustainability in fashion became a commitment to rethinking how small brands ship: with care, transparency, and direct impact.
                </p>
            </div>
        </>
    )
}

export default Founder;

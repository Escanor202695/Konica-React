    import React, { useEffect } from "react";
    import Footer from "../Footer";
    import Header from "./AboutHeader";
    import Hero from "../Hero";
    import ScrollIntoView from "react-scroll-into-view";
    import Contact from "../Contact"
    function AboutDetails() {
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return (
        <>
        <Header />
        {/**hero */}
        <div className="relative z-40 ">
            <img
            src="/img/about.jpg"
            alt="heroImage"
            className="w-full h-full absolute top-0 left-0 -z-20"
            />
            <div className="w-screen relative -z-10 bg-gradient-to-t from-black to-themeBlue opacity-90  md:px-0 ">
            <div className="max-w-[1140px] h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between  mx-auto w-full  px-[20px] md:px-0">
                <div className="w-[80%] mb-5 ">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl text-themeWhite mb-6">
                    We indent best quality <br/>pharmaceutical raw materials
                </h2>
                </div>
            </div>
            </div>
            <div className="custom-shape-divider-bottom-1683382367">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
                ></path>
            </svg>
            </div>
        </div>
        {/**about*/}
        <div className="w-screen py-[60px] md:py-[120px]" id="about">
            <h2 className="text-[3rem] font-semibold text-themeBlue text-center mb-[50px] ">
            <span className="line">About Us</span>
            </h2>
            <div className="max-w-[1140px] mx-auto  flex flex-col-reverse md:flex-row ">
            <div className="w-full  lg:ml-[30px] flex-col px-[20px]">
                <p className="mb-[30px] mt-[10px] md:mt-0">
                <span className="font-semibold text-themeGreen">
                    Konica Corporation Limited
                </span>{" "}
                proposes its customers Pharmaceuticals Raw materials,
                Intermediates and Packaging Materials with high quality and
                dependability. We offer Pharmaceutical Raw Materials,
                Intermediates and Excipients which comply with latest USP, BP, INN and
                EP. <br /> <br />
                We offer packaging components from{" "}
                <span className="font-semibold text-themeGreen">
                    USFDA approved manufacturers{" "}
                </span>
                as well. It holds reputation as a supplier who supplies superior
                quality products timely delivery and commercially feasible
                pricing.
                </p>
                <p>
                We have achieved this in a really small period of time, due to our
                professional approach and commitment to maintain our standards. We
                strive for continuous improvements in our services which is the
                key of our development and growth. We fully understand that scope
                of improvement is endless. It is the place where the best quality
                at the most genuine prices is found.
                <br />
                <br />
                Konica Corporation Limited is one of the leading indenting
                companies in Bangladesh dealing with  Pharmaceuticals, Chemical and
                Dairy industry. Company’s core competences are facility<span className="font-semibold text-themeGreen">
                development, processing machinery, packaging machinery, laboratory
                equipment, raw materials and packaging materials.</span> Konica
                Corporation Limited is in spontaneous growth. It is the
                comprehensive service oriented indenting agent and Manufacturer
                representative (Distributor) engaged in sourcing, marketing and
                sales of Intermediates, APIs, Excipient and Sophisticated
                compounds as well as fine chemicals of Pharmaceuticals,
                Nutritional and Cosmetic industries in Bangladesh.
                <br />
                <br />
                Konica Corporation Limited employees a broad range of highly
                experienced and motivated professionals with specific background
                and qualification appropriate to project in the said industry.
                This enables us to provide industry-focused, up-to-date solutions,
                which meets all the special and unique requirements of industrial
                facilities.
                <br />
                <br />
                Konica Corporation Limited is the trusted name in the field of
                Pharmaceutical Industry. It is professionally managed company of
                experienced professionals and technocrats that differ our company
                with others. Konica Corporation Limited prides itself in providing
                the best assistance to existing and new entrepreneurs. We have
                fostered good working relationships with various leading FDA
                approved agencies. Our diverse project experience has allowed us
                to work closely with various industrial sectors.
                <br />
                <br />
                Konica Corporation Limited was established with a mission to make
                available Newest Molecules to all companies so that they can be
                benefitted by the power of New Molecules. We have maintained high
                quality standards for our Products, As a result, in a very short
                span of time our company has evolved and grown exponentially and
                now we are recognized and respected as a company that offers
                impeccable quality products with best services in the industry.
                <br />
                <br />
                Our commitment of continuous improvement in the services of
                existing products and sourcing of new products demanded highly
                efficient Manufacturing Plant. With a comprehensive and clear
                understanding of business across segments, the goal of Konica
                Corporation Limited is to integrate environmentally responsible
                consulting into the framework of every client’s project to
                maximize value and reduce the environmental footprint. We are
                committed to contributing to the economic and environmental growth
                of the society in which we do work. We believe in the fact that
                knowledge is everywhere but expertise lies within.
                </p>
            </div>
            </div>
        </div>
        <Contact/>
        <Footer />
        </>
    );
    }

    export default AboutDetails;

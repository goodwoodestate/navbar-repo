import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const HotelBooking = () => {
    return (<div>
        <h1 className="text-white mb-4 text-xl">Dining at The Goodwood Estate</h1>
        <Accordion transition={{duration: "200ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <p className="text-white">ADULT(12+ YEARS)*</p>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full p-2.5 rounded flex justify-between items-center text-black mt-4 text-xl bg-white mt-0">
                            <span>1 Adult</span>
                            <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </AccordionHeader>

                        <AccordionBody className="flex flex-wrap flex-col bg-white">
                            <a className="p-2 dropdown__border text-xl text-black">
                            2 Adult
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                            3 Adult
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                            4 Adult
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                            5 Adult
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black bottom__border ">
                            6 Adult
                            </a>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        <Accordion className="mt-4" transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <p className="text-white">CHILDREN (3-12 YEARS)*</p>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full p-2.5 rounded flex justify-between items-center text-black mt-4 text-xl bg-white mt-0">
                            <span>Unselected</span>
                            <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </AccordionHeader>

                        <AccordionBody className="flex flex-wrap flex-col bg-white">
                            <a className="p-2 dropdown__border text-xl text-black">
                                1 Child
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                                2 Children
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                                3 Children
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                                4 Children
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black bottom__border ">
                                5 Children
                            </a>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        <Accordion className="mt-4" transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <p className="text-white">INFANTS (0-2 YEARS)*</p>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full p-2.5 rounded flex justify-between items-center text-black mt-4 text-xl bg-white mt-0">
                            <span>Unselected</span>
                            <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </AccordionHeader>

                        <AccordionBody className="flex flex-wrap flex-col bg-white">
                            <a className="p-2 dropdown__border text-xl text-black">
                                1 Infant
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                            2 Infants
                            </a>
                            <a className="p-2 text-xl dropdown__border border-t text-black">
                            3 Infants
                            </a>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
        <button className="bg-nav-second-text text-white w-full text-lg mt-12 h-16 rounded">Check Availability</button>
    </div>
    );
};

export default HotelBooking;
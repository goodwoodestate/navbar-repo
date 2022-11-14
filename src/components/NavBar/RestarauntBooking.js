import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const RestarauntBooking = () => {
    return (
        <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-full flex justify-between items-center text-black mt-4 text-xl bg-white">
                            <span>Unselected</span>
                            <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </AccordionHeader>

                        <AccordionBody className="flex flex-wrap flex-col bg-white">
                            <a className="p-2 text-xl text-black">
                                Goodwood House (Afternoon Tea)
                            </a>
                            <a className="p-2 text-xl text-black">
                                Farmer Butcher Chef
                            </a>
                            <a className="p-2 text-xl text-black">
                                The Kennels
                            </a>
                            <a className="p-2 text-xl text-black">
                                Goodwood Bar and Grill
                            </a>
                            <a className="p-2 text-xl text-black">
                                Motor Circuit Cafe
                            </a>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    );
};

export default RestarauntBooking;
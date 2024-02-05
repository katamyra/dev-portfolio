import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {Button} from "@/components/ui/button"

const AboutMe = () => {
    const handleDownload = () => {
      console.log("test");
    };
    return (
        <Accordion type="multiple" className="w-full">
         <AccordionItem value="item-1">
          <AccordionTrigger>Basic Info About Me</AccordionTrigger>
          <AccordionContent>I{"'"}m a Georgia Tech student who lived in Southern California until college started. </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Technologies That I am Learning</AccordionTrigger>
          <AccordionContent>
            Currently, I am learning two different languages/technologies: C++ and Nextjs. I am learning C++ in order to further my skills in developing low-latency back end systems, 
            and I am learning Next js to use for developing websites to showcase future projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Classes I am Taking</AccordionTrigger>
          <AccordionContent>Some useful classes I have/are taking include: Computer Organization and Programming, Data Structures and Algorithms,
            Objects and Design, Linear Algebra, and Intro to Object Oriented Programming. </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>My Resume</AccordionTrigger>
          <AccordionContent><Button variant="outline"><a target="_" href = "/KrishGTResume.pdf">Click to View Resume</a></Button></AccordionContent>
        </AccordionItem>
        
       
      </Accordion>
    )
}
export default AboutMe;
import { ContactSheet } from "./ContactSheet";
import { Button } from "./button";


export default function HeaderNav() {
    return (
        <div className="space-x-2 pr-4">
        <Button variant="ghost">
          <a href="/projects">Projects </a>{"   "}
        </Button>

        
          /
        
      
          <ContactSheet>
          </ContactSheet>
       
          / { " "}
        <Button variant="ghost">
          Notes
        </Button>
      </div>

    )
}
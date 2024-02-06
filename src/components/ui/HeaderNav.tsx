import { ContactSheet } from "./ContactSheet";
import { Button } from "./button";
import Router from "next/router";
import { useRouter } from "next/router";
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
          <a href="/notes">Notes</a>
        </Button>
      </div>

    )
}
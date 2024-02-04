import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function ContactSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">Contact Me</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Me!</SheetTitle>
          <SheetDescription>
            Here are various links that you can reach me at:
          </SheetDescription>
        </SheetHeader>
       
        <div className="grid gap-4 py-4">
        <Label> Github Link: <a className="font-bold" href="https://github.com/katamyra"> Link</a> </Label> {" "} 
        <Label> Linked In Link: <a className="font-bold" href="https://github.com/katamyra"> Link</a> </Label> {" "} 
        <Label> My Email: krishkatariya@outlook.com </Label> {" "} 
        
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

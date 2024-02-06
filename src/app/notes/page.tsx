import { Button } from "@/components/ui/button";

export default function notes() {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl"> Currently, I have not uploaded my notes here yet, but you can find them on my Github Notes Repository!</h1>
            <Button variant="outline"><a href="https://github.com/katamyra/Notes">Notes Repository</a></Button>
        </div>
    )
}
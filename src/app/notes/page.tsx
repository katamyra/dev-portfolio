
import { Button } from "@/components/ui/button";
import AnimatedCursor from "react-animated-cursor";
import Header from "@/components/ui/Header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ParticleBackground from '@/components/ui/ParticleBackground'
import { Share_Tech } from "next/font/google";
const sharetech = Share_Tech({weight: '400', subsets: ['latin']});

export default function notes() {
    return (
        
        <div className="">
            <Header></Header>
            <AnimatedCursor></AnimatedCursor>
            <div>
            <div className="text-5xl text-center pb-5">
                <h1 className={sharetech.className}>A Collection of My Notes</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Card>
                    <CardHeader>
                        <CardTitle>CS 2110 </CardTitle>
                        <CardDescription>Notes on Computer Organization and Programming</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-red-350">Topics: Structure and Operation of Basic Computers, Digital Logic, Machine Language Instructions, Assembly, C</p>
                    </CardContent>
                    <CardFooter>
                        <Button className=""><a href="https://github.com/katamyra/Notes/blob/main/Compiled%20School%20Notes/CS2110/CompiledNotes.pdf">Link To Notes</a></Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>CS 1332</CardTitle>
                        <CardDescription>Data Structures and Algorithms</CardDescription>
                    </CardHeader>
                    <CardContent>
                        Topics: Linked Lists, Stacks, Queues, Binary Search Trees, Heaps, HashMaps
                    </CardContent>
                    <CardFooter>
                        <Button className=""><a href="https://github.com/katamyra/Notes/blob/main/Compiled%20School%20Notes/CS1332/CompiledNotes.pdf">Link To Notes</a></Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>CS 2340</CardTitle>
                        <CardDescription>Objects and Design</CardDescription>
                    </CardHeader>
                    <CardContent>
                        Topics: SOLID, Requirements Engineering, Software Architecture
                    </CardContent>
                    <CardFooter>
                    <Button className=""><a href="https://github.com/katamyra/Notes/blob/main/Compiled%20School%20Notes/CS2340/LectureNotes.pdf">Link To Notes</a></Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Hands on Machine Learning</CardTitle>
                        <CardDescription>Based on the 2nd edition book Hands on Machine Learning w/ Sci-kit, Keras, and Tensorflow</CardDescription>
                    </CardHeader>
                    <CardFooter>
                    <Button className=""><a href="https://github.com/katamyra/Notes/blob/main/Personal%20Notes/HandsOnMl/CompiledNotes.pdf">Link To Notes</a></Button>
                    </CardFooter>
                </Card>
            </div>
            <ParticleBackground
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={400}
            ></ParticleBackground>

            </div>
            
        </div>
    )
}
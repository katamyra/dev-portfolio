import AboutMeAccordion from '@/components/ui/AboutMeAccordion';
import Header from '@/components/ui/Header';
import AnimatedCursor from 'react-animated-cursor';
import Image from 'next/image'
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function aboutme() {
    return (
        <div>
            <Header></Header>
            <AnimatedCursor></AnimatedCursor>
            <div className='text-center'>
                <h1 className="text-2xl font-bold"> About Me! </h1>
            </div>
            <div className="flex flex-row items-center">

                <div className='w-1/2 pl-6'>
                    <AboutMeAccordion></AboutMeAccordion>
                </div>
                <div className="pl-40 flex items-center justify-center">
                    <Image className="rounded-full max-w-full max-h-full" width={400} height={400} src="/me.jpeg" alt="Image of Me"></Image>
                </div>
            
            </div>
            <ParticleBackground
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={400}
            ></ParticleBackground>
        </div>
    )

}
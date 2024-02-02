"use client"
import ContactCarousel from '@/components/ui/ContactCarousel';
import AnimatedTextWord from '@/components/ui/AnimatedTextWord';
import { CarouselItem } from '@/components/ui/carousel';
export default function Contact() {
    return (
        <div className="bg-black flex h-screen items-center justify-center">
          <div className='text-center'>
            <div className="mx-auto pb-5">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AnimatedTextWord text="My Contacts"></AnimatedTextWord>
              </div>
            </div>
            <ContactCarousel></ContactCarousel>
          </div>
            

        </div>
    )
}
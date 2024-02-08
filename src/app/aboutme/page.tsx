import AboutMeAccordion from '@/components/ui/AboutMeAccordion'

export default function aboutme() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold"> About me! </h1>
            <div className='w-1/2'>
                <AboutMeAccordion></AboutMeAccordion>
            </div>
        </div>
    )

}
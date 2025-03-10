
import {ContactSheet} from './ContactSheet'
import { Button } from './button'
export default function Header() {
    return (
        <div className="navbar bg-base-600">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/notes">Notes</a></li>
                <li><a href="/aboutme">About Me</a></li>
            

            </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl">Katamyra</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/notes'>Notes</a></li>
            <li><a href='/aboutme'>About Me</a></li>
            
           
            </ul>
        </div>
        <div className="navbar-end">
            <Button variant="ghost"> <a className="text-red-400" href='/resume.pdf' target="_blank">Resume</a></Button>
            <ContactSheet/>
        </div>
        </div>

    )
}

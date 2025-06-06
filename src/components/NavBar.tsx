import { IoMenu } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { navBar} from "../dataUltis/data";
import { Link } from "react-router";

const NavBar = () => {

    // const navLinkList = navBar.map((array) => {
    //     return array.links
    // })

    const [isOpen, setIsOpen] = useState(false)

    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

    const menuButtonRef = useRef<HTMLButtonElement | null>(null)

    const drawerRef = useRef<HTMLElement | null>(null)

    // open/close Drawer side effects
    useEffect(() => {

        const closeDrawerKey = (e:KeyboardEvent) => {

            if(e.key === 'Escape') {
                e.preventDefault()
                setIsOpen(false)
            }
        }

        if(isOpen) {

            document.addEventListener('keydown', closeDrawerKey)
            document.body.style.overflowY = 'hidden'

            const firstFocusedElement = drawerRef.current?.querySelector<HTMLElement>('button, a')

            firstFocusedElement && firstFocusedElement.focus()

        } else {

            document.body.style.overflowY = ''
            document.removeEventListener('keydown', closeDrawerKey)

            menuButtonRef.current && menuButtonRef.current.focus() 
        }

        return () => {

            document.body.style.overflowY = ''
            document.removeEventListener('keydown', closeDrawerKey)
        }

    },[isOpen])

    // trap focus in the drawer
    useEffect(() => {
        const trap = (e:KeyboardEvent) => {
            if(e.key !== 'Tab') return;

            if(!drawerRef.current) return;

            const focusList = Array.from(
                drawerRef.current?.querySelectorAll<HTMLElement>('button, a')
            )

            const firstItem = focusList[0]
            const lastItem = focusList[focusList.length - 1]
            if (e.shiftKey) {
                // Shift+Tab on the first element → wrap to last
                if (document.activeElement === firstItem) {
                    e.preventDefault();
                    lastItem.focus();
                }

            } else {
                // Tab on the last element → wrap to first
                if (document.activeElement === lastItem) {
                    e.preventDefault();
                    firstItem.focus();
                }
            }
        }

        if(isOpen){
            drawerRef.current?.addEventListener('keydown', trap)
        }

        return () => {
            drawerRef.current && drawerRef.current.removeEventListener('keydown', trap)
        }
    },[isOpen])

    const activateSubMenu = (dropDownName: string) => {
        setOpenSubMenu(openSubMenu === dropDownName ? null: dropDownName)
    }

  return (
    <>
    <header className="w-full flex justify-between items-center px-4 py-4 md:justify-center h-[12vh]">
        <nav className="flex w-full max-sm:justify-around md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[50vw]">

            {navBar.map((navData, i) => (
            <div key={i} className="sm:min-w-full flex">
                <div className="flex items-center text-3xl lg:text-4xl max-md:pl-10">
                    <h1 className="font-bold">{navData.logo}</h1>
            </div>

            <div className="max-sm:hidden text-lg flex items-end justify-end w-full gap-8 lg:gap-16 max-lg:pr-8">
                <a href="">{navData.links[0]}</a>
                <a href="">{navData.links[1]}</a>
                <a href="">{navData.links[2]}</a>
                <Link to='/about'>{navData.links[3]}</Link>
            </div>
            </div>
            ))}

            <div className="flex items-center max-sm:flex-1 max-sm:justify-end sm:hidden">
            <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Menu Open" : "Menu Closed"}
            className="text-5xl"
            ref={menuButtonRef}
            onClick={() => {
                setIsOpen((open) => !open)
            }}>
                <IoMenu/>
            </button>
            </div>
        </nav>
    </header>

    {isOpen && 
    <div>
        <div
        aria-hidden="true"
        className="bg-black absolute inset-0 bg-opacity-40"
        onClick={() => {
            setIsOpen(false)
        }}/>
    <aside
    ref={drawerRef}
    id="mobile-nav"
    role="dialog"
    aria-modal="true"
    className="bg-orange-500 w-[35vh] h-[100vh] fixed inset-0 overflow-auto"
    >
    <nav className="flex flex-col items-end">
        <button className="text-3xl w-8 h-8" onClick={() => {
            setIsOpen(false)
        }}>x</button>
        <ul className="flex flex-col items-center gap-y-4 mt-8 w-full">
            <li>
            <button onClick={() => {
                activateSubMenu('recipes')
            }}
            className="text-2xl font-semibold"
            >Recipes</button>
            {openSubMenu === 'recipes' && (
                <p>Something</p>
            )}
            </li>

            <li>
            <button onClick={() => {
                activateSubMenu('ingredients')
            }}
            className="text-2xl font-semibold">Ingredients</button>
            {openSubMenu === 'ingredients' && (
                <p>Stuff</p>
            )}
            </li>

            <li>
            <button onClick={() => {
                activateSubMenu('best-chefs')
            }}
            className="text-2xl font-semibold">Best-Chefs</button>
            {openSubMenu === 'best-chefs' && (
                <p>Someone</p>
            )}
            </li>

            <li>
                <Link to="/about" className="text-2xl font-semibold">About</Link>
            </li>
        </ul>
    </nav>
    </aside>
    </div>}
    
    </>
    
  )
}

export default NavBar
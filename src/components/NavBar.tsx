import { IoMenu } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const NavBar = () => {

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

    const activateSubMenu = (dropDownName: string) => {
        setOpenSubMenu(openSubMenu === dropDownName ? null: dropDownName)
    }

  return (
    <>
    <header className="border border-solid border-black w-full flex justify-between items-center px-4 py-4">
        <nav className="border border-solid border-black flex w-full">
            <div className="border border-solid border-black flex items-center text-3xl">
                <h1 className="font-bold">Cooking</h1>
            </div>
            <div className="flex max-sm:hidden">
                <p>Recipes</p>
                <p>Ingredients</p>
                <p>Best-Chefs</p>
                <p>About</p>
            </div>
            <div className="border border-solid border-black flex items-center max-sm:flex-1 max-sm:justify-end sm:hidden">
            <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Menu Open" : "Menu Closed"}
            className="border border-solid border-green-300 text-5xl"
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
            <a href=""
            className="text-2xl font-semibold">About</a>
            </li>
        </ul>
    </nav>
    </aside>
    </div>}
    
    </>
    
  )
}

export default NavBar
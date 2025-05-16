



type NavBarType = {
    logo: string,
    links: string[]
}

type FilterMenuType = {
    heading: string,
    filterMenu: string[]
}

type FooterType = {
    logo: string,
    links: string[]
}

type mobileMenu = {
    heading: string,
    dropDownText?: string[]
}


export const navBar: NavBarType[] = [
    {
        logo: 'COOKING',
        links: ['Recipes', 'Ingredients', 'Best-Chefs', 'About',]
    },
]

export const filterMenu: FilterMenuType[] = [
    {
        heading: 'Filter',
        filterMenu: ['']
    }
]

export const footer: FooterType[] = [
    {
        logo:'COOKING',
        links: ['Community resources', 'Terms of Service', 'Privacy Policy']
    }
]

export const mobileMenu: mobileMenu[] = [
    {
        heading: 'Recipes',
        dropDownText: ['pizza', 'hot-dog', 'hamburguer']
    },
    {
        heading: 'Ingredients',
        dropDownText: ['cheese','bread','patty']
    },
    {
        heading: 'Best-chefs',
        dropDownText: ['Ronaldo', 'Messi', 'joe']
    },
    {
        heading: 'About'
    }
]
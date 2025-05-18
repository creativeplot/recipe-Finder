



type NavBarType = {
    logo: string,
    links: string[]
}



type FilterMenuType = {
    heading: string,
    choices: string[]
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
        heading: 'Meal-type',
        choices: ['Breakfeast', 'Lunch', 'Snack', 'Dinner']
    },
    {
        heading: 'Cuisine',
        choices: ['American', 'Mexican', 'Italian', 'Asian', 'Mediterranean']
    },
    {
        heading: 'Difficulty',
        choices: ['Easy', 'Medium', 'Hard']
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
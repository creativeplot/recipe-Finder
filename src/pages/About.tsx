import { Link } from "react-router"

const About = () => {
  return (
    <main className="text-3xl font-semibold text-center mt-24">
        <h1>This is the about page in this recipe finder website</h1>
        <p>it does not contain anything go back 
            <span className="text-emerald-500">
                <Link to='/'> Home</Link>
            </span>
        </p>
    </main>
  )
}

export default About
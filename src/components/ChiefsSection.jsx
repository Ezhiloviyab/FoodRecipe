import ChiefCard from "./ChiefCard"
import'./chiefs-section.css'

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/ch1.jpeg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/ch4.jpeg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/ch2.jpeg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/ch3.jpeg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/ch5.jpeg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/ch6.jpeg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}
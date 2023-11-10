import CustomImage from "./CustomImage"
import './recipes-section.css'
export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image}  />
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}
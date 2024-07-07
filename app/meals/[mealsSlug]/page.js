import Link from "next/link"
import classes from "./page.module.css"
import Image from "next/image";
import { getMeal } from "../../../lib/meals";
import { notFound } from "next/navigation";

export default  function MealsSlug({ params }) {
    
    const {mealsSlug} = params;
    const meal =  getMeal(mealsSlug);

    if(!meal) {
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br />")

    return (
       <>
            <header className={classes.header}> 
                <div className={classes.image}>
                    <Image 
                        src={meal.image}
                        fill
                    />
                </div>
                <div className={classes.headerText}>
                    <h1>
                        {meal.title}
                    </h1>
                    <p className={classes.creator}>
                        by <a href={`/mailto:${meal.creator_email}}`}>{meal.creator}</a>
                    </p>
                </div>
            </header>
            <main className={classes.main}>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions   
                }}>
                                     
                </p>
            </main>
       </>
    )
} 
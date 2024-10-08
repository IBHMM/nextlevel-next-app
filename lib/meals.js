import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return db.prepare('Select * from meals').all();
}


export function getMeal(slug) {
    return db.prepare(`Select * from meals where slug = ?`).get(slug)
}


export function saveMeal(meal) {
    
}
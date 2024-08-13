"use server"

import {saveMeal} from '@/lib/meals.js'
import { redirect } from 'next/dist/server/api-utils';

export async function ShareMeal(formdata) {

    const data = {
      title: formdata.get("title"),
      summary: formdata.get("summary"),
      instruection: formdata.get("instruction"),
      image: formdata.get("image"),
      creator: formdata.get("name"),
      creator_email: formdata.get("email"),
    }

    if (
      !meal.title || 
      !meal.summaray || 
      !meal.instructions || 
      !meal.creator || 
      !meal.creator_email || 
      !meal.creator_email.includes('@') || 
      !meal.image || 
      meal.image.size == 0
    ) {
      return {
        message: 'Invalid input.',
        status: 404
      }
    }

    await saveMeal(meal);
    redirect('/meals');
  }
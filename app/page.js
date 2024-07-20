import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
     CardDescription,
     CardContent
     } from '../components/ui/card'
     import { Badge } from '@/components/ui/badge'
     import { Button } from '@/components/ui/button'
     import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { resolve } from 'styled-jsx/css'


const getRecipe = async ()=>{
  const results = await fetch('http://localhost:5000/recipes')
  return results.json()
}

export default async function Home() {
  const recipes = await getRecipe()
  return (
   <main>
      <div className="grid grid-cols-3 gap-8 max-sm:flex max-sm:flex-col">
          {recipes.map(recipe => (
            <Card key={recipe.id} className='flex flex-col justify-between'>
              <CardHeader className='flex-row gap-4 items-center'>
                <Avatar>
                  <div >
                      <AvatarImage className='object-cover rounded-full aspect-square' width={60} height={60} src={`/img/${recipe.image}`} alt='recipe '/>
                  </div>
                  <AvatarFallback>
                    {recipe.title.slice(0,2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins to cook</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button >View Recipe</Button>
                {recipe.vegan && <Badge variant='secondary'>Vegan</Badge>}
              </CardFooter>
            </Card>
          ))}
      </div>
   </main>
  );
}

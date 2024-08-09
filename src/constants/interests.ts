import { IContributor } from "@/types/contributors"

 
export const tags=[
    'Breaking News','News & Media', 'Politics',
    'Ukraine','Weather','Breaking News - UK',
    'NHS','Israel-Gaza War','Cost of Living','Climate',
    'World'
]
export const interests=[
   { name:'News',tags},
   { name:'Business',tags},
   { name:'Global Issues',tags},
   { name:'Environment',tags},
   { name:'Technology',tags},
   { name:'Science',tags},
   { name:'Humanities',tags},
]

export const contributors:IContributor[]=[
    {
        email:'user@gmail.com',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
        name:'User123',
        text:'Some description subtitle'
    },
    {
        email:'user@gmail.com',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
        name:'User123',
        text:'Some description subtitle'
    },
    {
        email:'user@gmail.com',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
        name:'User123',
        text:'Some description subtitle'
    },
    {
        email:'user@gmail.com',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s',
        name:'User123',
        text:'Some description subtitle'
    }
]

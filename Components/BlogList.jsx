import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

const [menu,setMenu] = useState('All');

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=>setMenu('All')} className={menu==="All" ? 'bg-black text-white py-1 px-4 rounded-sm' : '' }>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : '' }>Technology</button>
        <button onClick={()=>setMenu('Startup')} className={menu==="Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : '' } >Startup</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : '' } >LifeStyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item)=> menu==="All"?true:item.category===menu).map((items, index )=>{
            return <BlogItem key={index} id={items.id} image={items.image} title={items.title} description={items.description} category={items.category}/>
        })}

      </div>
    </div>
  )
}

export default BlogList
import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

export default function loading() {
  return (
    <main>
        <div className='grid grid-cols-3 gap-8 max-sm:flex max-sm:flex-col'>
            {"abcdefghi".split('').map(i =>(
                <SkeletonCard key={i}/>
            ))}
        </div>
    </main>
  )
}

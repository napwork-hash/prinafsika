import React from 'react'
import Image from 'next/image'

const photos = [1, 2, 3, 6, 5, 4]

function Photos() {
  return (
    <div className="w-10/12 overflow-x-auto rounded-3xl bg-zinc-800/80 p-4">
      <div className="flex snap-x snap-mandatory gap-5">
        {photos.map((photo) => (
          <div key={photo} className="min-w-[250px] snap-center">
            <Image src={`/images/profile/${photo}.png`} className="rounded-2xl object-cover" alt={`Profile ${photo}`} width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photos

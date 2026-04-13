import type React from 'react'
import Image from 'next/image'

interface ExecutiveProfileProps {
  name: string
  role: string
  imageUrl: string
}

const ExecutiveProfile: React.FC<ExecutiveProfileProps> = ({
  name,
  role,
  imageUrl
}) => {
  return (
    <div className="mx-auto flex h-full max-w-xs flex-col items-center rounded-md border border-gray-200 bg-white p-5 text-center shadow-sm">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-brand-yellow-default bg-gray-100">
        <Image
          src={imageUrl || 'https://placehold.co/160x160?text=Profile'}
          alt={`${name}'s profile`}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-lg font-bold text-gray-950">{name}</p>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-default">
          {role}
        </p>
      </div>
    </div>
  )
}

export default ExecutiveProfile

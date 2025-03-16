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
    <div className="flex flex-col items-center p-6 max-w-xs mx-auto space-y-4">
      <div className="relative w-40 h-40">
        <Image
          src={imageUrl || '/placeholder.svg?height=160&width=160'}
          alt={`${name}'s profile`}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-center space-y-2">
        <p className="text-xl font-semibold text-gray-900">{name}</p>
        <p className="text-gray-500 font-medium">{role}</p>
      </div>
    </div>
  )
}

export default ExecutiveProfile

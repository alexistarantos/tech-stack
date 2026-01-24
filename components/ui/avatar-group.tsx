import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: {
    src?: string
    alt?: string
    fallback?: string
  }[]
  max?: number
}

export function AvatarGroup({ avatars, max = 4, className, ...props }: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div className={cn("flex -space-x-2", className)} {...props}>
      {displayAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          className="size-8 ring-background ring-2"
        >
          <AvatarImage src={avatar.src} alt={avatar.alt} />
          <AvatarFallback className="text-xs">
            {avatar.fallback}
          </AvatarFallback>
        </Avatar>
      ))}
      {remaining > 0 && (
        <Avatar className="size-8 ring-background ring-2">
          <AvatarFallback className="text-xs">
            +{remaining}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

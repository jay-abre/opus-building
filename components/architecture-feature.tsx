import { Lightbulb, Layers, Leaf } from "lucide-react"

interface ArchitectureFeatureProps {
  title: string
  description: string
  icon: "acoustic" | "facade" | "sustainability"
}

export default function ArchitectureFeature({ title, description, icon }: ArchitectureFeatureProps) {
  const getIcon = () => {
    switch (icon) {
      case "acoustic":
        return <Lightbulb className="h-6 w-6 text-[#8B7E66]" />
      case "facade":
        return <Layers className="h-6 w-6 text-[#8B7E66]" />
      case "sustainability":
        return <Leaf className="h-6 w-6 text-[#8B7E66]" />
      default:
        return null
    }
  }

  return (
    <div className="p-8 bg-white border border-[#E5DCC3] hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#E5DCC3]/50 flex items-center justify-center mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">{title}</h3>
      <p className="text-[#5A5A5A]">{description}</p>
    </div>
  )
}

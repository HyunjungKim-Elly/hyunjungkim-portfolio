'use client'

interface ProjectCardProps {
    title: string
    image: string
    onClick: () => void
}

export const ProjectCard = ({ title, image, onClick }: ProjectCardProps) => {
    return (
        <div onClick={onClick} className="cursor-pointer group">
            <img src={image} alt={title} className="rounded-lg transition hover:scale-105" />
            <h3 className="mt-2 text-sm font-semibold">{title}</h3>
        </div>
    )
}
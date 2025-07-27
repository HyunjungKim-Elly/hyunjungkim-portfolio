import Image from "next/image";

interface ProjectCardProps {
    title: string;
    year: number;
    image: string;
    description: string;
    onClick?: () => void;
}

export const ProjectCard = ({
    title,
    year,
    image,
    description,
    onClick,
}: ProjectCardProps) => {
    return (
        <div
            className="group flex items-center space-x-5 cursor-pointer hover:opacity-80 transition-all"
            onClick={onClick}
        >
            <div className="relative w-50 h-30 rounded-md overflow-hidden border border-gray-600">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="flex flex-col w-full">
                <span className="text-sm text-gray-400">{year}</span>
                <span className="text-base text-white font-medium group-hover:underline">{title}</span>
                <span className="text-sm text-gray-500 truncate max-w-[300px]">{description}</span>
            </div>
        </div>
    );
};
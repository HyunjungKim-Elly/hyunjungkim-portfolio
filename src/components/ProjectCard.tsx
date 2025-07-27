import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
    title: string;
    year: string;
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
    const { t } = useTranslation();
    return (
        <div
            className="w-full flex items-center space-x-5 cursor-pointer hover:opacity-80 transition-all"
            onClick={onClick}
        >
            <div className="relative min-w-60 w-60 h-30 rounded-md overflow-hidden border border-gray-600 sm:min-w-30">
                <Image src={image} alt={t(title)} sizes="200px" fill className="object-cover" />
            </div>
            <div className="flex flex-col w-full">
                <span className="text-sm text-gray-400">{year}</span>
                <span className="text-base text-white font-medium group-hover:underline">{t(title)}</span>
                <span className="text-sm text-gray-500 truncate max-w-[300px]">{t(description)}</span>
            </div>
        </div>
    );
};
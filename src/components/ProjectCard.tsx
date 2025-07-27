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
            className="w-full flex flex-row items-center gap-5 cursor-pointer hover:opacity-80 transition-all sm:flex-col sm:justify-center"
            onClick={onClick}
        >
            <div className="relative min-w-60 min-h-30 rounded-md overflow-hidden border border-gray-600">
                <Image src={image} alt={t(title)} sizes="300px" fill className="object-cover" />
            </div>
            <div className="group flex flex-col w-full">
                <span className="text-sm text-gray-400">{year}</span>
                <span className="text-base text-white group-hover:underline">{t(title)}</span>
                <span className="text-sm text-gray-500 truncate max-w-[300px]">{t(description)}</span>
            </div>
        </div>
    );
};
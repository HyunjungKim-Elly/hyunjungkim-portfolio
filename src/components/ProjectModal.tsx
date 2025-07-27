'use client'

import { Dialog, DialogTitle, Transition, TransitionChild, DialogPanel } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { ProjectItem } from './Projects'
import { useTranslation } from 'react-i18next'

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: ProjectItem
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const { t } = useTranslation();

    const [activeImage, setActiveImage] = useState(0)

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/40" />
                </TransitionChild>

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="bg-white min-h-2/12 dark:bg-neutral-900 max-w-5xl w-full p-6 rounded-lg shadow-xl overflow-y-auto relative">
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 text-2xl"
                            >
                                ×
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left: Main Image + Gallery */}
                                <div>
                                    <div className="relative w-full h-[300px] border-2 border-gray-200 rounded-md">
                                        <Image
                                            src={project.images[activeImage]}
                                            alt={`Project image ${activeImage + 1}`}
                                            fill
                                            className="rounded-md border object-contain w-full max-h-[400px]"
                                        />
                                    </div>

                                    {project.images.length > 0 && (
                                        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
                                            {project.images.map((src, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveImage(index)}
                                                    className={`w-16 h-12 border rounded-md overflow-hidden flex-shrink-0 ${activeImage === index ? 'border-blue-800' : 'border-neutral-300'
                                                        }`}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        width={64}
                                                        height={48}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Details */}
                                <div className='text-gray-800'>
                                    <DialogTitle className="text-2xl font-semibold mb-2">
                                        {t(project.title)}
                                    </DialogTitle>
                                    <div className="text-sm text-muted-foreground font-semibold text-sky-800 mb-4">
                                        {project.year}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-sm leading-relaxed mb-4 whitespace-pre-line">
                                        {t(project.description)}
                                    </p>
                                    {/* 
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block text-sm text-blue-500 underline"
                                        >
                                            Visit Project →
                                        </a>
                                    )} */}
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}

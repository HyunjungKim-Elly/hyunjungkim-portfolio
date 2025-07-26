'use client'

import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Project } from './Projects'


interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    project: Project
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg">
                    <Dialog.Title className="text-xl font-bold mb-4">{project.title}</Dialog.Title>

                    <img
                        src={project.images[currentIndex]}
                        alt={`project-image-${currentIndex}`}
                        className="w-full rounded mb-4"
                    />

                    <div className="flex space-x-2 justify-center mb-4">
                        {project.images.map((img, idx) => (
                            <button key={idx} onClick={() => setCurrentIndex(idx)}>
                                <img
                                    src={img}
                                    alt={`thumbnail-${idx}`}
                                    className={`h-14 rounded ${idx === currentIndex ? 'ring-2 ring-blue-500' : ''}`}
                                />
                            </button>
                        ))}
                    </div>

                    <p className="text-gray-700">{project.description}</p>

                    <div className="text-right mt-6">
                        <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Close</button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
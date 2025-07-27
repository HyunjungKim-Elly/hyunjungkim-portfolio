'use client'

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const SocialSidebar = () => {
    return (
        <div className="pt-10 flex gap-6 text-muted-foreground">
            <a href="https://github.com/HyunjungKim-Elly" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://instagram.com/__imwithu" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="mailto:ujujo@naver.com" target="_blank" rel="noopener noreferrer">
                <MdEmail className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/hyunjung-elly-kim-663381125/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 hover:text-white transition" />
            </a>
        </div>
    )
}
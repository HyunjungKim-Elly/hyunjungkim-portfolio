import LanguageToggle from "./LanguageToggle";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-4">
            <LanguageToggle />
        </header>
    )
}
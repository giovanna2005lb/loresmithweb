import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
    active: "Home" | "Criações" | "Árvore Genealógica" | "Linha do Tempo"
}

const links = [
    { label: "Home", href: "/home" },
    { label: "Criações", href: "/creations" },
    { label: "Árvore Genealógica", href: "/family_tree" },
    { label: "Linha do Tempo", href: "/timeline" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-4 border-[#1CCAD8] bg-[#0B132B]"; // Borda de destaque

    return (
        <nav className="flex justify-between bg-[#1C2541] px-6 h-18 items-center">
            <ul className="flex gap-12 text-2xl mx-auto h-full items-center">
                {links.map(link => (
                <li key={link.label} className={`h-full flex items-end pb-2 ${active === link.label ? classActive : ""}`}>
                    <Link href={link.href} className="px-4 py-2">
                    {link.label}
                    </Link>
                </li>
    ))}
            </ul>
            <Image
                className="rounded-full"
                src="/default-icon.jpeg"
                alt="Icone padrão"
                width={50}
                height={50}
            />
        </nav>
    );
}


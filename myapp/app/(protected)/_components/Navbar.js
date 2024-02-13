'use client'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const Navbar = () => {
    const pathName = usePathname();

    const isSettingsPage = pathName === "/settings";
    const isAdminPage = pathName === "/admin";

    return (
        <nav className="bg-white flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                <Button
                >
                    <Link
                        href={'/settings'}
                        className={clsx({ "text-white bg-primary": isSettingsPage })}>
                            Settings
                    </Link>
                </Button>
                <Button
                >
                    <Link
                        href={'/admin'}
                        className={clsx({ "text-white bg-primary": isAdminPage })}>
                            Admin
                    </Link>
                </Button>
            </div>
            userbutton
        </nav>
    );
}

export default Navbar;

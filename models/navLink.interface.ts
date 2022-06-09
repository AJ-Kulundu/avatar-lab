export interface NavLinkType {
    href: string;
    children: string;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}
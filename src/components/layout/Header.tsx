import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import neuralAILogo from '@/assets/neural-ai.jpeg'; // Your logo

const Header = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/demo", label: "Demo" },
        { href: "/portfolio", label: "Case Studies" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="fixed z-50 w-full px-2 group"
            >
                <div
                    className={cn(
                        'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
                        isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link to="/" aria-label="home" className="flex items-center space-x-2">
                                <img src={neuralAILogo} alt="Neural AI" className="h-10" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className={cn('m-auto size-6 duration-200', { 'scale-0 opacity-0': menuState })} />
                                <X className={cn('absolute inset-0 m-auto size-6 scale-0 opacity-0 duration-200', { 'scale-100 opacity-100': menuState })} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            to={item.href}
                                            className={cn(
                                                "block duration-150",
                                                location.pathname === item.href
                                                    ? "text-primary"
                                                    : "text-muted-foreground hover:text-primary"
                                            )}
                                        >
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn('mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent', { 'block': menuState })}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {navItems.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                to={item.href}
                                                onClick={() => setMenuState(false)}
                                                className={cn(
                                                    "block duration-150",
                                                    location.pathname === item.href
                                                        ? "text-primary"
                                                        : "text-muted-foreground hover:text-primary"
                                                )}
                                            >
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                                >
                                    <Link to="/demo">
                                        <span>Book Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}
                                >
                                    <Link to="/demo">
                                        <span>Book Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

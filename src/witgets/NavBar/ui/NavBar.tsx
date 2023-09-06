import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lip/ThemeContext';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { theme } = useTheme();
    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={theme === Theme.LIGHT ? AppLinkTheme.PRIMARY : AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Main
                </AppLink>
                <AppLink
                    theme={theme === Theme.LIGHT ? AppLinkTheme.PRIMARY : AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    about
                </AppLink>
            </div>
        </div>
    );
};

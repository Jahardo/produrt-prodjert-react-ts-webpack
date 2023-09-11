import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lip/ThemeContext';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={theme === Theme.LIGHT ? AppLinkTheme.PRIMARY : AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    theme={theme === Theme.LIGHT ? AppLinkTheme.PRIMARY : AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};

import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }:LangSwitcherProps) => {
    const [t, i18n] = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (
        <Button
            className={ClassNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};

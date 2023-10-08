import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import ArrowSmallDown from 'shared/assets/icons/ArrowSmallDown.svg';
import ArrowSmallUp from 'shared/assets/icons/ArrowSmallUp.svg';
import { useState } from 'react';
import cls from './VideoSettingDropDown.module.scss';

interface VideoSettingDropDownProps {
    className?: string
}

export const VideoSettingDropDown = ({ className }:VideoSettingDropDownProps) => {
    const { t } = useTranslation('main');
    const [collapsed, setCollapsed] = useState(false);
    const collapsedHandler = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            className={ClassNames(cls.VideoSettingDropDown, {
                [cls.collapsed]: collapsed,
            }, [className])}
        >
            <h2 className={cls.Text}>{t('Settings')}</h2>
            {collapsed
                ? <div>{t('first setting')}</div>
                : <div />}
            {collapsed
                ? <ArrowSmallUp onClick={collapsedHandler} className={cls.icon} />
                : <ArrowSmallDown onClick={collapsedHandler} className={cls.icon} />}
        </div>
    );
};

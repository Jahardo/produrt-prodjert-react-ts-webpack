import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from 'witgets/LoginForm';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { VideoSettingDropDown } from 'witgets/VideoSettingDropDown';
import { PreEnterVideoElement } from 'witgets/PreEnterVideoElement';
import cls from './Main.module.scss';

interface MainProps {
    className?: string
}

const Main = ({ className }:MainProps) => {
    const { t } = useTranslation('main');
    return (
        <div className={ClassNames(cls.Main, {}, [cls.center, className])}>
            <PreEnterVideoElement />
            <LoginForm />
            <VideoSettingDropDown />
        </div>
    );
};

export default Main;

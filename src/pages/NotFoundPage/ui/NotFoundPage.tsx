import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }:NotFoundPageProps) => {
    const { t } = useTranslation('NotFoundPage');
    return (
        <div className={ClassNames(cls.NotFoundPage, {}, [className])}>
            {t('Error , Page not Found')}
        </div>
    );
};

export default NotFoundPage;

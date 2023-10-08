import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation('main');
    const [isJoin, setIsJoin] = useState(true);
    const navigate = useNavigate();
    const joinRoom = () => {
        navigate(`/room/${v4()}`);
    };
    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <h1>{t('Welcome to Video chat web')}</h1>
            <div className={cls.wrap}>
                <span>{t('Write here your Name')}</span>
                <Input
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    theme={InputTheme.SMALL}
                />
                {isJoin
                    ? (
                        <div>
                            <span>{t('Write Rooms id')}</span>
                            <Input
                                type="text"
                                placeholder="Room"
                                autoComplete="off"
                                theme={InputTheme.SMALL}
                            />
                        </div>
                    )

                    : <div />}
                <div className={cls.createOrJoin}>
                    <Button
                        onClick={joinRoom}
                        theme={ThemeButton.SUBMIT}
                        className={cls.btnAdditional}
                    >
                        {t('Join')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

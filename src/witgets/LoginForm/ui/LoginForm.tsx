import { ClassNames } from 'shared/lib/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }:LoginFormProps) => {
    const { t } = useTranslation('main');
    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <h1>{t('Welcome to Video chat web')}</h1>
            <div className={cls.wrap}>
                <span>{t('Write here password of room')}</span>
                <Input
                    type="text"
                    placeholder="Room"
                    autoComplete="off"
                    theme={InputTheme.SMALL}
                />
                <span>{t('Write Rooms id')}</span>
                <Input
                    type="text"
                    placeholder="Room"
                    autoComplete="off"
                    theme={InputTheme.SMALL}
                />
                <Button
                    theme={ThemeButton.SUBMIT}
                    className={cls.btnAdditional}
                >
                    {t('Join')}
                </Button>
            </div>
        </div>
    );
};

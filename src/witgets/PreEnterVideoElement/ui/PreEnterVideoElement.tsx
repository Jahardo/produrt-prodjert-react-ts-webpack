import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import MicrophoneOff from 'shared/assets/icons/MicrophoneOff.svg';
import MicrophoneOn from 'shared/assets/icons/MicrophoneOn.svg';
import VideoCamera from 'shared/assets/icons/VideoCamera.svg';
import VideoCameraSlash from 'shared/assets/icons/VideoCameraSlash.svg';
import { LocalVideo } from 'shared/ui/Video';
import { CameraButton, MicrophoneButton } from 'shared/SpecialButtons';
import cls from './PreEnterVideoElement.module.scss';

interface PreEnterVideoElementProps {
    className?: string
}

export const PreEnterVideoElement = ({ className }:PreEnterVideoElementProps) => {
    const [isCamera, setIsCamera] = useState(false);
    const [isMicro, setIsMicro] = useState(false);
    const handleButtonMicroPress = () => {
        setIsMicro((prevState) => !prevState);
    };

    const handleButtonCameraPress = () => {
        setIsCamera((prevState) => !prevState);
    };
    return (
        <div className={ClassNames(cls.PreEnterVideoElement, {}, [className])}>
            <LocalVideo className={cls.Video} />
            <div className={cls.btnPositions}>
                <CameraButton />
                <MicrophoneButton />
            </div>
        </div>
    );
};

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import cls from 'pages/RoomPage/ui/Room.module.scss';
import { VideoCart } from 'entities/VideoCart';
import { useState } from 'react';
import { SideScroll } from 'shared/ui/SideScroll';

interface PanelProps {
    clients?: any
    className?: string
}

const Panel = ({ clients, className }:PanelProps) => {
    const [isMain, setIsMain] = useState(true);
    const mainClient = 1;
    if (isMain) {
        return (
            <div className={cls.Panel}>
                <div className={cls.mainPanel}>
                    {clients[mainClient]
                        ? <VideoCart key={mainClient} className={cls.mainHeight} />
                        : <div />}
                </div>
                <SideScroll className={cls.SideScroll}>
                    {clients.filter((client:number) => client !== mainClient).map((client:any) => (
                        <div
                            key={client}
                        >
                            <VideoCart />
                        </div>
                    ))}
                </SideScroll>
            </div>
        );
    }
    return (
        <div className={ClassNames(cls.grid, {}, [className])}>
            {clients.map((client:any) => (
                <div>
                    <VideoCart
                        key={client}
                    />
                </div>
            ))}
        </div>
    );
};

export default Panel;

import { ButtonsPanel } from 'witgets/ButtonsPanel';
import Panel from 'pages/RoomPage/ui/Panel';
import { ACTIONS, socket } from 'shared/lib/socket';
import { useEffect } from 'react';
import cls from './Room.module.scss';

interface RoomProps {
    className?: string
}
const Room = ({ className }:RoomProps) => {
    const clients = [1, 2, 3, 4, 5, 6, 7, 8];
    /* useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
            console.log(rooms);
        });
    }, []); */
    return (
        <div className={cls.Room}>
            <Panel clients={clients} className={className} />
            <ButtonsPanel />
        </div>
    );
};

export default Room;

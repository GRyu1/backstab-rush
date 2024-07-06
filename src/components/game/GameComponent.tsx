import React, { FC, useRef, useState } from 'react';
import Phaser from 'phaser';

interface GameCoponentProps {
}

const GameComponent: FC<GameCoponentProps> = () => {
    const gameContainerRef = useRef(null);
    const [game ,setGame] = useState(null);

    const handleOnConnect = () => {
        const game = new Phaser.Game({
            
        });
    }

    return (
        <></>
    );
};

export default GameComponent;
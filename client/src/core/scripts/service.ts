import GameSocket from './sockets/game';
import PlatformSocket from './sockets/platform';
import PlayerSocket from './sockets/player/player';

class Service {
    static sockets = {
        game: new GameSocket(),
        player: new PlayerSocket(),
        platforms: new PlatformSocket(),
    };
}

export default Service;

import '../index.css';
import changeScreen from './header';
import Home from './home';
import ChoicePicks from './choicePicks';
import Recommendations from './recommendations';

export const showThis = [true, true, true];
function Content() {
    return (
        <div>
            <div id = "home" style = {{display: showThis[0] ? "block": "none"}}>
                <Home />
            </div>
            <div id = "choicepicks" style = {{display: showThis[1] ? "block": "none"}}>
                <ChoicePicks />
            </div>
            <div id = "recommendations" style = {{display: showThis[2] ? "block": "none"}}>
                <Recommendations />
            </div>
        </div>
    );
}

export default Content;
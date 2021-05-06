import {DiGithubBadge} from 'react-icons/di'
import {FaRing} from 'react-icons/fa'
import './header.css'
import ScoreBoard from './ScoreBoard/ScoreBoard'

export function Header(props) {
    return (
        <header>
            <div className = 'title-container'>
                <h2>Lord of the Rings Memory Game</h2>
                <FaRing className = "ring-icon"/>
            </div>
            <ScoreBoard scoreProps = {props}/>
            <a href = "https://github.com/minho-sama/Memory-Game">minh 2021<DiGithubBadge size = '16px'/></a>
        </header>
    )
}
export default Header
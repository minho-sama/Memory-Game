import {DiGithubBadge} from 'react-icons/di'
import './header.css'
import ScoreBoard from './ScoreBoard/ScoreBoard'

export function Header(props) {
    return (
        <header>
            <h2>Lord of the Rings Memory Game </h2>
            <ScoreBoard scoreProps = {props}/>
            <a href = "https://github.com/minho-sama/Memory-Game">minh 2021<DiGithubBadge size = '16px'/></a>
        </header>
    )
}
export default Header
import { useTheme } from '../hooks/useTheme'

import './Welcome.css'

export default function Welcome() {

const { mode } = useTheme()

return (
<div>
    <div className="welcome">
        <div className={`card-create-guides ${mode}`}>
        <i className="material-symbols-outlined">edit</i>
        <h2>NEW GUIDES</h2>
        <p>create, share and discuss with your friends</p>
        </div>

        <div className={`card-new-guides ${mode}`}>
        <i className="material-symbols-outlined">tips_and_updates</i>
        <h2>ALWAYS UPDATED</h2>
        <p>be aware of the best builds for every single hero</p>
        </div>

        <div className={`card-always-free ${mode}`}>
        <i className="material-symbols-outlined">attach_money</i>
        <h2>COMPLETELY FREE</h2>
        <p>...and it will always be!</p>
        </div>
    </div>
        <span className="white-space"><br></br></span>
</div>
)}   
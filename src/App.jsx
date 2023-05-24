import TwitterFollowCard from './TwitterFollowCard.jsx';

export function App() {
    const formatUserName  = (userName) => `@${userName}`;
    return (
        <div className='contSeguir'>
            <TwitterFollowCard
                name="Leonardo Victoriano"
                userName="xva_leonardo"
                formatUserName={formatUserName}
            />

            <TwitterFollowCard
                name="Midu Dev"
                userName="midudev"
                formatUserName={formatUserName}
            />

            <TwitterFollowCard
                name="Mayelin Romero"
                userName="mayelinromero0"
                formatUserName={formatUserName}
            />
            
            <TwitterFollowCard
                name="Mariana Romero"
                userName="mariana_esqui"
                formatUserName={formatUserName}
            />
        </div>
    )
}
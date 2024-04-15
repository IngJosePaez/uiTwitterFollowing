import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
    
    const users = [
        {
            userName: 'Fernando_Her85',
            name: 'Fernando Herrera',
            isFollowing: true
          },
          {
            userName: 'chrishemsworth',
            name: 'Chris Hemsworth',
            isFollowing: false
          },
          {
            userName: 'cristiano ronaldo',
            name: 'Cristiano Ronaldo',
            isFollowing: true
          },

]

    export function App () { // No olvidar de exportar siempre!! y luego importar en el main
    
    return (
        <section className='App'>
 {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

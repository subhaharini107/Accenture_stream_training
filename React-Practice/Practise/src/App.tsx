import { Header } from './components/Header';
import ProfileCard from './components/ProfileCard';
import Counter from './components/Counter'
const profiles = [
  { name: "subha", role: "Se", age: 32, city: "salem", status: true },
  { name: "subha", role: "Se", age: 32, city: "salem", status: true },
  { name: "subha", role: "Se", age: 32, city: "salem", status: true },
]
function App() {

  return (
    <>
      <Header />
      {
        profiles.map((profile)=>{
          return(
            <ProfileCard {...profile}/>
          )
        })
      }
      <Counter/>
    </>
  )
}

export default App

import './App.css'
import Card from './components/Card'
import ProfileInfo from './components/ProfileInfo'


function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <Card>
          <ProfileInfo />
        </Card>
        <p style={{ margin: '30px' }}>
          Maro is an experienced software engineer with a passion for building scalable products. He is able to take ownership of a product and build it from start to finish without missing deadlines.
        </p>

      </div>

    </>
  )
}

export default App

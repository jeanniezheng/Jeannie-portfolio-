import logo from './logo.svg';
import sticker from './sticker.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Me.</li>
          <li>Work.</li>
          <li>Get In Touch.</li>
        </ul>
      </nav>
      <section className='home'>
        <img src={sticker} />
        <h2 class="name glow">jeannie</h2>
        <p> I am a software developer in Chicago dedicated to creating inclusive and creative online spaces. I strive for excellence and collaborate closely with others to achieve it. Whether designing a website or tinkering with code, I approach each project with enthusiasm and attention to detail.</p>
      </section>
    </div>
  );
}

export default App;

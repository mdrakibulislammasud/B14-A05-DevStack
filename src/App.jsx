import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import heroImg from './assets/hero.png'
import technologyData from './data.json'

const GRADIENT = 'linear-gradient(100deg, #ff8a00 0%, #ff3d81 52%, #8b5cf6 100%)'

function Navbar({ menuOpen, setMenuOpen }) {
  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

  const handleSignIn = () => toast.info('Sign In is coming soon.')
  const handleSignUp = () => toast.success('Welcome to Dev Stack! Sign Up is coming soon.')

  return (
    <header className="navbar">
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">DS</span>
        <span>Dev Stack</span>
      </a>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="auth-actions">
        <button className="sign-in" onClick={handleSignIn}>Sign In</button>
        <button className="primary small" onClick={handleSignUp}>Sign Up</button>
      </div>
    </header>
  )
}

function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top"><img src={technology.icon} alt={`${technology.name} logo`} /><span className="badge">{technology.badge}</span></div>
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>
      <div className="meta"><span>{technology.category}</span><span>{technology.difficulty}</span><strong>★ {technology.rating}</strong></div>
      <button className="add-button" disabled={isAdded} onClick={() => onAdd(technology)}>{isAdded ? '✓ Added to Stack' : '+ Add to Stack'}</button>
    </article>
  )
}

function StackPanel({ stack, onRemove, onRemoveAll }) {
  const countLabel = `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`
  return (
    <aside className="stack-panel" aria-label="Your technology stack">
      <div className="stack-heading"><div><p className="eyebrow">YOUR COLLECTION</p><h2>Your Stack</h2></div><span className="count">{stack.length}</span></div>
      <p className="selected-label">{countLabel}</p>
      {stack.length === 0 ? (
        <div className="empty-state"><span className="empty-icon">＋</span><h3>Your stack is empty</h3><p>Start adding technologies to build your dream stack.</p></div>
      ) : (
        <div className="stack-list">
          {stack.map((item) => <div className="stack-item" key={item.id}><img src={item.icon} alt="" /><div><strong>{item.name}</strong><small>{item.category}</small></div><button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>✕</button></div>)}
        </div>
      )}
      <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
    </aside>
  )
}

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let active = true

    const loadTechnologies = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 250))
        if (active) setTechnologies(technologyData)
      } catch {
        if (active) toast.error('Could not load technologies. Please try again.')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadTechnologies()

    return () => {
      active = false
    }
  }, [])

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id) => {
    const item = stack.find((technology) => technology.id === id)
    setStack((current) => current.filter((technology) => technology.id !== id))
    toast.info(`${item?.name || 'Technology'} removed from your stack.`)
  }

  const removeAll = () => {
    if (!stack.length) return toast.info('Your stack is already empty.')
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return <div className="app-shell" style={{ '--brand-gradient': GRADIENT }}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main>
      <section className="hero-section" id="home">
        <div className="hero-copy"><p className="eyebrow">BUILD YOUR DIGITAL FUTURE</p><h1>Build your dream<br />development <span>stack.</span></h1><p className="hero-description">Discover the technologies, tools, and frameworks that power modern software. Create your personalized stack and start building something amazing.</p><div className="hero-actions"><a className="primary" href="#technologies">Explore Technologies ↗</a><a className="secondary" href="#about">Learn More →</a></div></div>
        <div className="hero-visual"><div className="glow"></div><img src={heroImg} alt="Developer technology workspace illustration" /></div>
      </section>

      <section className="section-heading" id="technologies"><div><p className="eyebrow">EXPLORE THE ECOSYSTEM</p><h2>Choose your <span>technologies.</span></h2></div><p>Pick the tools that match your goals and add them to your personal stack.</p></section>
      <section className="workspace"><div className="technology-grid">{loading ? <div className="loading" role="status"><span className="spinner"></span>Loading technologies...</div> : technologies.map((technology) => <TechnologyCard key={technology.id} technology={technology} isAdded={stack.some((item) => item.id === technology.id)} onAdd={addToStack} />)}</div><StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} /></section>

      <section className="projects-section" id="projects"><div><p className="eyebrow">BUILD WITH YOUR STACK</p><h2>From idea to <span>real projects.</span></h2><p>Use your selected technologies as a focused roadmap for portfolio projects, university work, and practical experiments.</p></div><div className="project-points"><div><strong>01</strong><span>Choose a frontend and styling tool.</span></div><div><strong>02</strong><span>Add backend and database technologies.</span></div><div><strong>03</strong><span>Build, test, and ship your project.</span></div></div></section>
      <section className="info-section" id="about"><p className="eyebrow">WHY DEV STACK?</p><h2>Everything you need to<br /><span>build with confidence.</span></h2><p>From frontend interfaces to backend infrastructure, organize your learning journey in one focused place.</p></section>
    </main>

    <footer id="contact"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">DS</span><span>Dev Stack</span></a><p>A simple space to discover, organize, and learn modern development technologies.</p><div className="socials"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div>{[['Product','Technologies','Projects','Features'],['Company','About Us','Contact','Community'],['Legal','Privacy','Terms','License']].map(([title,...links]) => <div className="footer-links" key={title}><h4>{title}</h4>{links.map((link) => <a href={link === 'Technologies' ? '#technologies' : link === 'Projects' ? '#projects' : link === 'Contact' ? '#contact' : '#home'} key={link}>{link}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 Dev Stack. Built for curious developers.</span><span><a href="#home">Privacy</a> · <a href="#home">Terms</a></span></div></footer>
    <ToastContainer position="bottom-right" autoClose={2200} newestOnTop closeOnClick pauseOnHover theme="light" />
  </div>
}

export default App

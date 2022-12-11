import Navbar from './navbar'
import Footer from './footer'
import CustomCursor from '../components/CustomCursor'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <main>
        
        <CustomCursor />

        {children}
      
      </main>

      {/* <Footer /> */}
    </>
  )
}
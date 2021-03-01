import React , {useState} from 'react';
// import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/data';
import Footer from '../components/Footer';
import InfoType from '../components/InfoType';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <> 

        {/* <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar> */}
        <Navbar toggle={toggle} />
        <InfoSection {...homeObjOne} />
        <InfoType/>
        {/* <InfoSection {...homeObjTwo} />
        <Services></Services>
        <InfoSection {...homeObjThree} /> */}
        <Footer/>
        </>
    )
}

export default Home


import Header from '../../component/vie_Component/Header';
import CompanyInfo from '../../component/vie_Component/CompanyInfo';
import Navigation from '../../component/vie_Component/Navigation';
import Indexing from '../../component/vie_Component/Indexing';
import Footer from '../../component/vie_Component/Footer';
function Issues() {
  return (
    <div className="bg-white">
    <CompanyInfo/>
    <Header/>
    <div className= "flex flex-row">
    <div className="md:w-1/6"></div>
    <div className="md:w-4/6">
    <Indexing/>
    </div>
    <div className="md:w-1/6"></div>
    </div>
    <Footer/>
   </div>
  )
}
export default Issues;
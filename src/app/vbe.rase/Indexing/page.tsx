
import Header from '../../component/Component/Header';
import CompanyInfo from '../../component/Component/CompanyInfo';
import Navigation from '../../component/Component/Navigation';
import Indexing from '../../component/Component/Indexing';
import Footer from '../../component/Component/Footer';
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
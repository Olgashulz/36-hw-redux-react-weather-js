import './App.css';
import Info from "./components/Info";
import Data from "./components/Data";
import stylesWrapper from "./CSS/wrapper.module.css"
import stylesMain from "./CSS/main.module.css"
import stylesInfo from "./CSS/info.module.css"
import stylesForm from "./CSS/form.module.css"

function App() {
    return (
        <div className={stylesWrapper.wrapper}>
            <div className={stylesMain.main}>
                <div className='container'>
                    <div className='row'>
                        <div className={`col-sm-5 ${stylesInfo.info}`}>
                            <Info/>
                        </div>
                        <div className={`col-sm-7 ${stylesForm.form}`}>
                            <Data/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

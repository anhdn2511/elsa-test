import Background from './assets/main-background.png';
import Mobile from './assets/mobile-main.png';
import Info from './info';

export default function Main() {
    return(
        <div class="row main" id="main" style={{height:800, backgroundImage: `url(${Background})`}}>
            <div class="col-6 col-md-6 mt-5">
                <Info />
            </div>
            <div class="col-6 col-md-6 mt-5">
                <img src={Mobile} alt="mobile" class="img-fluid" style={{height: 600}}/>
            </div>
        </div>
    )
}
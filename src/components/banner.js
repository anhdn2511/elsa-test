import Mobile from './assets/mobile-banner.png';
import './button.css';

export default function Banner() {
    const handleClick = () => {
        window.location.href = '#main'
    }

    return (
        <div class="row banner" style={{height: 400}}>
            <div class="col-6 col-md-6 align-self-center">
                <div class = "row justify-content-center">
                    <div class="col-6 col-md-6">
                        <h2>APP LUYỆN NÓI</h2>
                    </div>      
                </div>
                <div class = "row justify-content-center">
                    <div class="col-10 col-md-10">
                        <h2>&amp; GIAO TIẾP TIẾNG ANH THỜI 4.0</h2>
                    </div>
                </div>
                <div class = "row justify-content-center mt-3">
                    <div class="col-8 col-md-8">
                        <h6 class="text-primary">Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay!</h6>
                    </div>
                </div>
                <div class = "row justify-content-center mt-3">
                    <div class="col-5 col-md-5">
                        <button type="button" class=" btn gradient-button" onClick={handleClick}>Đăng ký ngay</button>
                    </div>      
                </div>
            </div>
            <div class="col-4 col-md-4">
                <div class="row justify-content-end">
                    <div class="col-10 col-md-10">
                        <img src={Mobile} alt="mobile" class="img-fluid" style={{height: 400}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Logo from './assets/Logo.png';

export default function Header() {
    return (
        <header className="header row justify-content-center align-items-start border-bottom">
            <div className="col-auto col-md-auto">
                <img src={Logo} alt="Logo" />
            </div>
        </header>
    )
}
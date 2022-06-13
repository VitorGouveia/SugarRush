export function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer-title">YesCakes</h1>
            <p className="footer-subtitle">Sua loja favorita de doces, pacificação e bolos.</p>
            
            <div className="footer-contact">
                <div className="mappin-container">
                    <img src="/YesCakes/FooterAssets/FooterMapPin.svg" alt="" className="mappin-image" />
                </div>
                <div className="address-container">
                    <p className="find-us">Nos Encontre!</p>
                    <h2 className="address">AV. MORUMBI, 7878 SANTO AMARO CEP 04703-001</h2>
                </div>
            </div>

            <div className="footer-social">
                <div className="heart-container">
                    <img src="/YesCakes/FooterAssets/FooterHeartIcon.svg" alt="" className="heart-image" />                    
                </div>
                <div className="social-container">
                    <p className="follow-us">Entre Em Contato!</p>
                    <div className="social-icons-container">
                        <img src="/YesCakes/FooterAssets/FooterInstagramLogo.svg" alt="" className="instagram-image" />
                        <img src="/YesCakes/FooterAssets/FooterWhatsappLogo.svg" alt="" className="whatsapp-image" />
                        <img src="/YesCakes/FooterAssets/FooterFacebookLogo.svg" alt="" className="facebook-image" />
                    </div>
                </div>
            </div>
            <p className="made-with-love">Made With ❤️ By <a className="love-link" href="https://github.com/AtomicFeasT">Thiago</a> & <a className="love-link" href="https://github.com/Buskik">Rodrigo</a> @2022</p>

        </footer>       
    )
}
import style from "./Footer.module.scss"
import SocialNetworksOptionOne from "./SocialNetworksOptionOne/SocialNetworksOptionOne";

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.container__footer}>
                <div className={style.container__copy}>
                    <p>&copy;{new Date().getFullYear()} TOP-GYM</p>
                </div>
                <div className={style.container__social}>
                    <SocialNetworksOptionOne social={{ instagram: "#", facebook: "#", twitter: "#" }} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
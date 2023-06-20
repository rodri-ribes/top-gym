import React from 'react'
import style from './Modal.module.scss';


export default function Modal({ title, content, img, setModal, modal, setMessage, message }) {


    document.addEventListener("click", function (e) {
        if (modal.show === true && e.target.className === "Modal_container__ahXlk") {
            setModal(prev => ({ ...prev, show: false }))
        }
    })


    return (
        <div className={style.container}>
            <div className={style.container__content} style={{ backgroundImage: `url(./img/programs/${img})` }}>
                <svg onClick={() => setModal(prev => ({ ...prev, show: false }))} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                <div className={style.container__content__data}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <button onClick={() => {

                        if (message.isActive) {
                            setMessage(prev => ({
                                ...prev,
                                isActive: false,
                                text: ``
                            }))
                        }

                        window.location.assign("/#contact")

                        setTimeout(() => {
                            setMessage(prev => ({
                                ...prev,
                                isActive: true,
                                text: `Hi, how are you?, I'm interested in the ${title} program`
                            }))
                        }, 1000);

                        setModal(prev => ({ ...prev, show: false }))

                    }}>More Information</button>
                </div>
            </div>
        </div>
    )
}

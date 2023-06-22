import React, { useState } from 'react'
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm'
import Modal from '../../components/Modal/Modal'
import { programs } from '../../functions/programs'
import style from './Home.module.scss'

export default function Home() {

    const [modal, setModal] = useState({
        show: false,
        data: {},
    })

    const [message, setMessage] = useState({
        isActive: false,
        text: ""
    })


    return (
        <div className={style.container}>
            <div className={style.container__oneSection} style={{ backgroundImage: `url(./img/portada.jpg)` }}>
                <div className={style.container__oneSection__gradient} id={"home"}>
                    <h1  >TOP-GYM</h1>
                    <p>"Strength does not come from what you can do, but from overcoming what you thought was impossible"</p>
                    <button onClick={() => window.location.assign("/#programs")} data-aos="fade-up" >TRAIN NOW</button>
                </div>
            </div>

            <div className={style.container__twoSection}>
                <div className={style.container__twoSection__welcome}>
                    <h3>WELCOME TO TOP-GYM</h3>
                    <b>The best day to start was yesterday, today is the second best day.</b>
                    <p>It is very important in the life of people of any age to practice physical exercise, that is, physical activity that improves and maintains the physical fitness, health and well-being of the person. Everyone should practice physical exercise. In the elderly, the daily practice of physical activity is beneficial for certain diseases: diabetes, dyslipidemia, osteoarthritis, obesity.
                        <br /> What are you waiting for? Start today!</p>
                    <button onClick={() => window.location.assign("/#contact")}>SIGN UP</button>
                </div>
                <img src='./img/twoSection.jpg' alt='welcome' />
            </div>

            <div className={style.container__threeSection} style={{ backgroundImage: `url(./img/threeSection.jpg)` }}>
                <div className={style.container__threeSection__gradient} id={"programs"}>
                    <h3 >OUR <b>PROGRAMS</b></h3>
                    <div className={style.container__threeSection__gradient__list}>
                        {
                            programs.map((p, i) => {
                                return (
                                    <div key={i}
                                        style={{ backgroundImage: `url(./img/programs/${p?.img})` }}
                                        className={style.container__threeSection__gradient__list__card}
                                        onClick={() => setModal(prev => ({
                                            ...prev,
                                            show: true,
                                            data: { title: p.title, content: p.content, img: p.img }
                                        }))}>
                                        <div className={style.container__threeSection__gradient__list__card__gradient}>
                                            <h4>{p.title}</h4>
                                            <p>{p.content?.slice(0, 50)} ...</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    modal.show &&
                    <Modal modal={modal} title={modal?.data.title} content={modal?.data.content} img={modal?.data.img} setModal={setModal} setMessage={setMessage} message={message} />
                }
            </div>
            {
                message.isActive &&
                <div className={style.container__fourSection} id={"contact"}>
                    <h3>START TODAY !</h3>
                    <div className={style.container__fourSection__form}>
                        <img src='./img/form.jpg' alt="form" />
                        <ApplicationForm message={message} setMessage={setMessage} />
                    </div>
                </div>
            }
            {
                !message.isActive &&
                <div className={style.container__fourSection} id={"contact"}>
                    <h3>START TODAY!</h3>
                    <div className={style.container__fourSection__form}>
                        <img src='./img/form.jpg' alt="form" />
                        <ApplicationForm message={message} setMessage={setMessage} />
                    </div>
                </div>
            }
        </div>
    )
}

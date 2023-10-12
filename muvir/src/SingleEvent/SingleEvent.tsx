import { useParams } from "react-router-dom";
import style from "./SingleEvent.module.scss";
import Slider from "react-slick";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const SingleEvent = () => {
    const newsID = useParams().newsID;
    const [md, setMD] = useState<string>();
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Фестиваль возрожденных деревень</h1>
                <p>11.10.2023 13:37</p>
                <Slider className={style.slider + " news-slider"}
                    dots
                    arrows={false}
                    infinite
                    autoplay
                    autoplaySpeed={3500}
                >
                    <div className={style.fullScreenItem}>
                        <div style={{ backgroundImage: "url('/1.png')" }}>
                        </div>
                    </div>
                    <div className={style.fullScreenItem}>
                        <div style={{ backgroundImage: "url('/2.png')" }}></div>
                    </div>
                    <div className={style.fullScreenItem}>
                        <div style={{ backgroundImage: "url('/3.png')" }}></div>
                    </div>
                    <div className={style.fullScreenItem}>
                        <div style={{ backgroundImage: "url('/4.png')" }}></div>
                    </div>
                </Slider>
                {/* <div data-color-mode="light">
                    <MDEditor visibleDragbar={false} height={500} value={md} onChange={setMD} />
                </div> */}
                <div data-color-mode="light">
                    <MDEditor.Markdown source={md} />
                </div>
            </div>
        </div>
    );
}

export default SingleEvent;
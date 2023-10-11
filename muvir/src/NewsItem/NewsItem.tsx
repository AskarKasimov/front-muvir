import { useParams } from "react-router-dom";
import style from "./NewsItem.module.scss";
import Slider from "react-slick";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import remarkGfm from 'remark-gfm';
import Markdown from "react-markdown";

const NewsItem = () => {
    const newsID = useParams().newsID;
    const [md, setMD] = useState<string>();
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Мы сделали сайт!</h1>
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
                <MDEditor height={500} value={md} onChange={setMD} />
                <div>
                    <Markdown remarkPlugins={[remarkGfm]}>{md}</Markdown>
                </div>
            </div>
        </div>
    );
}

export default NewsItem
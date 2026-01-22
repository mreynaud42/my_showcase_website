
import PictureCards from "./PictureCards"

export default function CardPictureAbout() {
    return (
        <div>
            <PictureCards cards={[
                { img: "test.png", alt: "imge test", caption: "test" },
                { img: "test.png", alt: "imge test", caption: "test" },
                { img: "test.png", alt: "imge test", caption: "test" },
                { img: "test.png", alt: "imge test", caption: "test" },
                { img: "test.png", alt: "imge test", caption: "test" }
            ]}/>
        </div>
    );
}
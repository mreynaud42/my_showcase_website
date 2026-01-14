import ComingSoon from "../components/ComingSoon"
import ProjectDiv from "../components/ProjectDiv"

import type {ProjectProps} from "../components/ProjectDiv"

import "../styles/pages/projects.css";

export default function Projects() {

    const projectTest1: ProjectProps = {
        id: 1,
        href: "/",
        title: "My project",
        description: ["Vivamus hendrerit eros mauris, ut consequat justo ornare at. Nullam egestas hendrerit nisl eu consectetur. Vivamus volutpat enim id tortor vehicula commodo. Vivamus tellus mauris, lacinia eu diam sit amet, consectetur pretium tellus. Curabitur fermentum urna at congue rhoncus. Ut eros orci, venenatis vitae dapibus finibus, aliquet id dolor. Nam vel consectetur augue. Maecenas aliquam egestas diam vel tincidunt. Proin quis semper est. Fusce sagittis suscipit turpis ut congue. Nunc nec felis laoreet, iaculis neque eget, sodales arcu. Nunc volutpat magna elit, ac pellentesque ipsum volutpat eu. Phasellus justo dui, euismod interdum risus ac, commodo auctor sapien. Pellentesque fringilla tortor risus, ut consequat dui finibus rutrum."],
        hrefGithub: "/",
        languageUse: ["React", "TypeScript", "CSS", "html", "docker", "JavaScript", "PHP", "Three.JS", "Makefile", "C", "C++", "Rust", "assembly"],
        img: "/menu.svg"
    }

    const projectTest2: ProjectProps = {
        id: 2,
        href: "/",
        title: "My project",
        description: ["Cras a maximus lorem. Nullam eu sem vestibulum, dictum tortor vel, lacinia magna. Morbi mattis suscipit ultricies. In diam felis, fringilla eget mauris quis, porttitor pellentesque quam. Aenean a lorem eu mi commodo ornare. Integer ullamcorper libero in urna congue, sed viverra lorem gravida. Vestibulum quis malesuada dolor. Mauris fermentum imperdiet quam vel ullamcorper. Donec blandit, sapien in fermentum malesuada, augue ex volutpat lacus, vitae convallis libero ante dapibus ex. Etiam viverra dictum nunc, porta placerat risus luctus at. Sed fermentum, lorem sit amet pellentesque malesuada, purus tortor imperdiet urna, eu feugiat urna risus id ipsum. Mauris consequat ut felis varius accumsan. Morbi ac dui convallis ligula blandit consequat.", "Aenean convallis tincidunt porta. In at pulvinar arcu. Maecenas ultrices dictum turpis. Aliquam hendrerit est massa. Morbi commodo mi quis odio venenatis, ut ullamcorper ante mattis. Cras quam leo, tempor sit amet arcu id, euismod tincidunt turpis. Nullam auctor libero quis nulla vestibulum, in pulvinar nulla consectetur. Vestibulum viverra varius turpis vitae volutpat. Duis finibus dignissim enim, porttitor dignissim dui aliquam et. Cras viverra rutrum magna nec eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "Aenean ac felis semper, congue dui sed, porttitor lacus. Vestibulum imperdiet, ante ac porta iaculis, eros magna mollis nunc, egestas vulputate ligula eros ut metus. Quisque suscipit ullamcorper nisi non euismod. Proin scelerisque, nunc sed pharetra tempus, urna massa lacinia mi, eget pulvinar purus augue ac mi. Morbi a ligula quis dui ullamcorper bibendum. In at congue quam. Donec sit amet odio dictum, suscipit nunc vel, sollicitudin diam. Nam non tincidunt massa, ut fringilla lacus."],
        hrefGithub: "/",
        languageUse: ["C"],
    }

    return (
        <>
            <div className="head"><h1 className="namepage">Projects</h1></div>
            <ProjectDiv project={projectTest1}/>
            <ProjectDiv project={projectTest2}/>
            <ComingSoon/>
        </>
    );
}
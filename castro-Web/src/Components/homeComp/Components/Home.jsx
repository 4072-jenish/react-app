import Bannersection from "./Bannersection/Bannersection"
import Castronews from "./Castronews/Castronews";
import Categorysection from './Categorysection/Categorysection'
import Collectionsection from "./Collectionsection/Collectionsection";
import Shopnow from "./Shopnow/Shopnow";
import Instagramsection from "./Instagramsection/Instagramsection";
import Footersection from "./Footersection/Footersection";
import Headersection from "./Headersection/Headersection";

function Home() {
    return (
        <>
            <Bannersection />
            <Categorysection />
            <Collectionsection />
            <Shopnow />
            <Castronews />
            <Instagramsection />
        </>
    )
}

export default Home;
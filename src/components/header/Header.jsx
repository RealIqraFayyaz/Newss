import { useState } from "react";
import Nav from "./Nav";
export default function Header({ getKeywords }) {
    const [active, setActive] = useState(false);
    const [keywords, setKeywords] = useState('');
    return (
        <>
            <header style={{ background: `${active ? "purple" : "pink"}` }}>
                <div className="logo">Awesome News</div>
                <input onChange={getKeywords} />
                <Nav />
            </header>
        </>
    );
}
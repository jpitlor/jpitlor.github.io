import * as React from "react";

import Layout from "../components/layout";
import Compositions from "../sections/compositions";
import Performance from "../sections/performances";

const Music = () => (
    <Layout title="Music">
        <section className="hero">
            <div className="hero-body">
                <Performance />
            </div>
        </section>
        <section className="hero">
            <div className="hero-body">
                <Compositions />
            </div>
        </section>
    </Layout>
);

export default Music;

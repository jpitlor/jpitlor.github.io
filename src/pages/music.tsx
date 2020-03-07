import * as React from "react";

import Layout from "../components/layout";
import Composition from "../sections/composition";
import Performance from "../sections/performance";

const Music = () => (
    <Layout title="Music">
        <section className="hero">
            <div className="hero-body">
                <Performance />
            </div>
        </section>
        <section className="hero">
            <div className="hero-body">
                <Composition />
            </div>
        </section>
    </Layout>
);

export default Music;

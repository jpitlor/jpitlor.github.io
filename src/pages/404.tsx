import * as React from "react";
import InstagramEmbed from "react-instagram-embed";

import Layout from "../components/layout";
import Section from "../components/section";

const NotFoundPage = () => (
    <Layout title="404: Not Found">
        <Section title="This route doesn't exist">
            <p className="is-tight-desktop">
                You can use either of the links at the top of the page to find a page
                that does exist. As a consolation for a lack of content, please enjoy
                a picture of my dog.
            </p>
            <br />
            <br />
            {/*
                This comment is only necessary because this page will most likely be
                viewed by an employer, locked behind a firewall.
             */}
            <p className="is-tight-desktop">
                If you can&apos;t see the picture, it is because Instagram is blocked by
                your firewall.
            </p>
            <br />
            <br />
            <InstagramEmbed
                url="https://www.instagram.com/p/BjhxDSHgoMo"
                hideCaption={true}
                className="has-margin-auto"
            />
        </Section>
    </Layout>
);

export default NotFoundPage;

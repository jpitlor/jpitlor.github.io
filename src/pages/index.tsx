import * as React from 'react';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import {GatsbyArrayQuery} from '../utils/types';
import {File} from '../utils/schema';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

const Header = styled.h2`
    position: absolute;
`;

const Top = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 50%;
    clip-path: polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0);
    
    img {
        position: absolute;
        width: 100%;
        height: auto;
    }
`;

const Left = styled.div`
    position: absolute;
    left: 0;
    right: 50%;
    top: 0;
    bottom: 0;
    clip-path: polygon(0 25%, 100% 50%, 100% 100%, 0% 100%);
    
    img {
        position: absolute;
        width: auto;
        height: 100%;
    }
`;

const Right = styled.div`
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    clip-path: polygon(0 50%, 100% 25%, 100% 100%, 0% 100%);
    
    img {
        position: absolute;
        width: auto;
        height: 100%;
    }
`;

const IndexPage = ({
    data: {
        allFile: {
            nodes,
        },
    },
}: GatsbyArrayQuery<File>) => {
    const pictures = nodes.map(n => n.childImageSharp.fixed.src);
    const codingPicture = pictures.find(p => p.includes('software_engineer'));
    const singingPicture = pictures.find(p => p.includes('musician'));
    const teacherPicture = pictures.find(p => p.includes('teacher'));

    return (
        <Layout title="Home">
            <Container>
                <Link to="/experience">
                    <Top>
                        <Header>Software Engineer</Header>
                        <img src={codingPicture} alt="" />
                    </Top>
                </Link>
                <Link to="/music">
                    <Left>
                        <Header>Musician</Header>
                        <img src={singingPicture} alt="" />
                    </Left>
                </Link>
                <Link to="/free-time">
                    <Right>
                        <Header>Counselor</Header>
                        <img src={teacherPicture} alt="" />
                    </Right>
                </Link>
            </Container>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query IndexQuery {
        allFile(filter: {relativePath: {glob: "home_*"}}) {
            nodes {
                childImageSharp {
                    fixed(jpegQuality: 100) {
                        src
                    }
                }
            }
        }
    }
`;

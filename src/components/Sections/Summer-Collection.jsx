import React from 'react'
import styled from 'styled-components';
import { Container, HeadingWrapper, Heading } from '../Common/Utility';

const ContentWrapper = styled(Container)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    border: 1px solid #ccc;
    padding: 1rem;
    grid-gap: 1rem;
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        transition: all 0.3s;
    }
`

const summer_collection_images = ['Summer-Collection-1.jpg', 'Summer-Collection-2.jpg', 'Summer-Collection-3.jpg', 'Summer-Collection-4.jpg', 'Summer-Collection-5.jpg', 'Summer-Collection-6.jpg', 'Summer-Collection-7.jpg', 'Summer-Collection-8.jpg',]

const Item = styled.div`
    position: relative;
    height: 100%;
`

export default function SummerCollection() {
    return (
        <>
            <HeadingWrapper>
                <Heading>Summer Collection</Heading>
            </HeadingWrapper>
            <ContentWrapper as="ul">
                {summer_collection_images.map(img => (<Item as="li" key={img}><img src={`assets/images/${img}`} alt={img} /></Item>))}
            </ContentWrapper>
        </>
    )
}

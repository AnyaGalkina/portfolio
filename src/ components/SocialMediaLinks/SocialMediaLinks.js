import React from 'react';
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";

const SocialMediaLinks = ({socialMedia}) => {
    return (
        <>
            {socialMedia.map(c => {
                return (
                    <SocialMediaLink
                        imgComponent={c.imgComponent}
                        key={c.id}
                        link={c.link}
                    />
                )
            })}
        </>
    );
};

export default SocialMediaLinks;
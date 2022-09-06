import React from 'react';
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";

const SocialMediaLinks = ({contacts}) => {
    return (
        <>
            {contacts.map(c => {
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
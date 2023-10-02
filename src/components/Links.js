import React from 'react'

function Links({github,linkedin}) {
    // const {github,linkedin} = links
    // console.log(links)
    return (
        <>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <br/>
            <a href={linkedin}>{linkedin}</a>
        </>
    )
}

export default Links;
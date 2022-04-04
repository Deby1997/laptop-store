import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>What is context API?</h1>
            <p>Answer:We use react app by using several componenets.The data from one componenet from anothother passed by props.the data flow from parent to chilld like props drilling method.To pass the data to the last child we have to passed all its parent child then the clild got this data.But using context API the bottom data are wrapped into a Provider component and the parent will send us the value.The value can acessed by any of the child.</p>
            <h1>What is semantic tag?</h1>
            <p>Answer:By using semantic tag the HTML becamone so meaningful to seems and understand.if we use div we cannot understand which part is this.But when we use header that means its header part,nav means here used some link,section means one body part,article means here used to write some para,footer means bottom part.Its easy to understand the tag.
                Example:header,nav,section,article,aside,footer etc.
            </p>
        </div>
    );
};

export default Blogs;
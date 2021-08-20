import React from "react";
import {Helmet} from "react-helmet";

class Meta extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Anirudh's Personal Website</title>
                <link rel="canonical" href="http://anirudhsathiya.me" />
                <meta name="description" content="I'm an incoming freshman at the University of Massachusetts, Amherst majoring in Computer Science." />
            </Helmet>
            
        </div>
    );
  }
};
export default Meta;
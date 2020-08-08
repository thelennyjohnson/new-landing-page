import React from "react";

export default function Footer(){
  return(
    <footer>
    <p className="feedback-text">
      If you’ve got any questions, feedback or improvement ideas, we’ve created a
      subreddit (<a href="https://www.reddit.com/r/beam_me/">r/beam_me</a>), where you can tell us about it.
    </p>

    <div className="grid-container-footer">
        
        <div className="grid-1-footer">
        <p><a href="https://www.notion.so/Privacy-Policy-91663007766045d08991d716ec21084e">Privacy Policy</a></p>
        </div>

        <div className="grid-2-footer">
          <p><a href="https://www.notion.so/Terms-and-Conditions-89f627756d854000a2322a384b5fb117">Terms of Use</a></p>
        </div>


      </div>
  </footer>
  )
}
import React from "react";
import Screenshot from "./assets/screenshot.png";
import "./App.css";
import { FaCheck } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Navbar />

        <div className="grid-container">
          <div className="grid-1">
            <h1>Find local friends you’ll spend hours chatting with</h1>
            <div className="check-list">
              <div className="check">
                <FaCheck className="icon" />
                <p>Match with people near you who share your interests</p>
              </div>

              <div className="check">
                <FaCheck className="icon" />
                <p>No Ads. Ever.</p>
              </div>

              <div className="check">
                <FaCheck className="icon" />
                <p>Beam messages to your friends</p>
              </div>

              <div className="check">
                <FaCheck className="icon" />
                <p>Completely private</p>
              </div>

              <div className="check">
                <FaCheck className="icon" />
                <p>No blue theme</p>
              </div>
            </div>

            <div className="button-container">
              <button className="green-cta">Create free account</button>
            </div>
          </div>

          <div className="grid-2">
            <img alt="Mobile screenshot of beam" src={Screenshot}></img>
          </div>
        </div>
      </div>

      <div className="text-container">
        <div className="text-box">
          <h2>Hey folks,</h2>
          <span>
            <b>TL;DR</b>
          </span>
          <p>We’ve built a new private social networking platform.</p>
          <p>Its called Beam.</p>

          <p>
            It links your YouTube, Spotify, Reddit, and iTunes account and using
            your interests on those platforms it matches you with someone nearby
            you can chat with. Their will never be Ads on our platform.
          </p>

          <p>
            We believe its amazing and we want you to be a part of it and the
            future we’re building at Beam.
          </p>

          <h2>Long version</h2>
          <span>
            <b>Social media sucks and we all know it.</b>
          </span>

          <p>
            You have “friends” that aren’t really your friends. Followers that
            don’t know the real you. People sharing the best moments of their
            lives rather than real moments in their lives.{" "}
          </p>

          <p>Let’s not mention the trolls.</p>

          <p>
            Facebook, Twitter, and Snap promised us a lot of things. Friends,
            happiness, a group you can belong to...but they failed on a lot of
            those promises.{" "}
          </p>

          <p>
            Instead we have a place where people post glamorous images of their
            lives and make other people feel bad for having a normal day.
          </p>

          <p>
            And when those same people feel bad, they bottle it up
            inside...because you can’t look bad for the grams can you?
          </p>

          <p>
            Social media has become a place where people can’t share the stupid,
            frustrating, happy, crazy moments of their lives because they’re
            afraid someone will think less of them...or worse, that no one will
            even care.
          </p>

          <p>
            Social media today is all about likes, shares, and retweets. And
            Ads...so many Ads.
          </p>

          <p>We think social media can be saved. </p>

          <p>
            We’re doing this by eliminating everything that makes “Old Social”
            bad. Starting with the word “media”. No ones themselves in front of
            the media.{" "}
          </p>

          <p>
            Ads also have to go. No one wakes up in the morning happy to see
            another Ad. We believe their are better ways to make money on the
            internet beyond the outdated Ad model.{" "}
          </p>

          <p>
            Next to go are the fake internet points. Share count, followers,
            likes...are all out.
          </p>

          <p>
            When you take all of that away what you’re left with is a private
            place where you can be authentic with friends, share crazy moments,
            and ask for advice without being judged.
          </p>

          <p>
            As introverts ourselves, we know that there’s a lot of lonliness in
            the World.
          </p>

          <p>We’ve all felt it.</p>

          <p>
            Which is why we made it possible to also find other people near you
            who share your interests on platforms like YouTube, Spotify, iTunes
            and Reddit.
          </p>

          <p>
            We're hoping you'll find someone that you can chat with online as
            our planet recovers from this pandemic.
          </p>

          <p>
            And if we can't find you a match immediately please give us a few
            days as more people join and we'll be able to find someone you vibe with.
          </p>

          <p>
            This private corner of the internet where you can find new friends
            that get you and share anything you want with them is called Beam.
          </p>

          <p>
            And because we want Beam to be a place where you engage with friends
            and not a place to store contacts. You can only have a maximum of 15
            friends on your Beam account.
          </p>

          <p>Beam keeps all the things we love about social media. </p>

          <p>
            Like finding new people who share your interests, showing a friend
            that cool meme, or chatting for hours about the things we love with
            someone that just gets it.
          </p>

          <p>
            What we’ve built is a place where you can be the real you and find
            others you'll love talking to.{" "}
          </p>

          <p>
            We plan to do a lot more and everyday we’re working hard to make
            beaming your friends so much better.{" "}
          </p>

          <p>
            Finally, rather than being hosted on the the Play Store or App
            Store, Beam is a progressive web app.{" "}
          </p>

          <p>
            Meaning you can open it on any mobile brower with just the link (
            <span className="text-link">usebeam.chat</span>) but the beauty is
            that you can also download it on your phone like an app.
          </p>

          <p>
            No distinction between Android and IOS users. The future we want to
            help build is amazing and we want you with us.{" "}
          </p>

          <p>
            So if this makes sense to you: create an account and tell everyone
            you know about Beam.{" "}
          </p>

          <div className="text-box-cta">
            <button>Create free account</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

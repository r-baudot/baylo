import httpServices from "../../services/httpServices";

import React, { useState, useEffect } from "react";

import DatePickerCUI from "../DatePicker/DatePicker";
import SingleProduit from "./SingleProduit";
import PieChart from "../PieChart/PieChart";

import addDays from '../../utils/addDays';
import config from '../../config/producthunt-config.json';

// Get List product here

const ListProducts = () => {
  const [producthuntPosts, setProducthuntPosts] = useState([]);
  const [producthuntPostsTopics, setProducthuntPostsTopics] = useState([]);
  const [selectedDate, setDateChange] = useState(new Date());

  useEffect(() => {

    const getProducHuntPosts = async () => {

      const postedBefore = addDays(selectedDate, 1).toISOString().slice(0, 10);
      const postedAfter = addDays(selectedDate, -1).toISOString().slice(0, 10);

      const query = { query: `query { posts( postedBefore: "${postedBefore}", postedAfter :"${postedAfter}",first: 20 ) { edges { node { id, name, description, featuredAt, createdAt, topics( first: 1 ) { edges { node { id, name } } } } } } }`};
      console.log("query", query);
      
      try {
        const { data } = await httpServices.post(config.apiEndpoint, query, config.header);
        
        // use this if x-rate-limit-limit
        // const data  = {"data":{"posts":{"edges":[{"node":{"id":"291699","name":"Remotecamp","description":"People from different fields of activity, united by the desire to know themselves better, found their work & life balance here.","featuredAt":"2021-04-11T07:44:08Z","createdAt":"2021-04-11T07:44:08Z","topics":{"edges":[{"node":{"id":"46","name":"Productivity"}}]}}},{"node":{"id":"291739","name":"Wozi","description":"Wozi helps you satisfy your sweet tooth with healthy foods you otherwise may not have enjoyed. It is a natural flavor enhancer that makes sour foods taste sweet, reduces their bitterness, and amplifies their flavor. Start healthier habits in just 30 seconds.","featuredAt":"2021-04-11T07:01:00Z","createdAt":"2021-04-11T07:01:00Z","topics":{"edges":[{"node":{"id":"43","name":"Health and Fitness"}}]}}},{"node":{"id":"291722","name":"Brig Note","description":"Brig Note is your personal note-taking tool, combines recording and typing in an effective way. It gives you the possibility to record your voice during your lecture or any other kind of speech or event and taking notes over recording.","featuredAt":"2021-04-11T07:22:19Z","createdAt":"2021-04-11T07:22:19Z","topics":{"edges":[{"node":{"id":"2","name":"Android"}}]}}},{"node":{"id":"291726","name":"Aurelium Life OS","description":"Skip endless hours of dashboard building and organize your entire life in just seconds. Vetted by 1000+ Notion email subscribers & 460+ Reddit upvotes, I spent months polishing and building the perfect Notion life operating system.","featuredAt":"2021-04-11T07:23:08Z","createdAt":"2021-04-11T07:23:08Z","topics":{"edges":[{"node":{"id":"46","name":"Productivity"}}]}}},{"node":{"id":"291670","name":"Emolog","description":"Emolog is easy to use! Select your emoji to sum up your day and record it, simple as that! You can fill in your diary as much as you want! If you don’t feel like it, just leave a title. You can also record your precious emotions within just a few seconds!","featuredAt":"2021-04-11T07:00:00Z","createdAt":"2021-04-11T07:00:00Z","topics":{"edges":[{"node":{"id":"2","name":"Android"}}]}}},{"node":{"id":"291724","name":"Stacky","description":"Create a micro website for free. Instantly get a QR code or link to share. Have customers can a QR code at your restaurant table, share a link to your professional info or product catalog, have window shopping with QR codes, or anything you can think of.","featuredAt":"2021-04-11T14:30:00Z","createdAt":"2021-04-11T14:30:00Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291718","name":"Ultimate Notion Workout System","description":"A Notion system and template for planning and keeping track of workout programs and sessions, this product acts as a hub for any fitness journey, where consistency is pivotal in order for success to manifest itself organically.","featuredAt":"2021-04-11T07:38:29Z","createdAt":"2021-04-11T07:38:29Z","topics":{"edges":[{"node":{"id":"43","name":"Health and Fitness"}}]}}},{"node":{"id":"291710","name":"LaunchSong","description":"Meritocratic music platform where the best music gets exposure not the best marketed music. As you rank songs you impact the elo ratings of songs which impacts how many other users see them. We also learn what you like and generate you custom playlists!","featuredAt":"2021-04-11T07:31:05Z","createdAt":"2021-04-11T07:31:05Z","topics":{"edges":[{"node":{"id":"57","name":"Music"}}]}}},{"node":{"id":"291713","name":"Omenu","description":"A unique cloud platform will help you create and manage e-menus, get feedback and increase sales! Sales in the restaurant will increase by 15% Visitors recommend you to their friends - it is a Wow effect!! You get customer feedback And any more!","featuredAt":"2021-04-11T08:30:43Z","createdAt":"2021-04-11T08:30:43Z","topics":{"edges":[{"node":{"id":"164","name":"Marketing"}}]}}},{"node":{"id":"291737","name":"HASHTAG NFTs by Proof of Culture","description":"We are the world’s first hashtag NFT. Instead of selling pre-designed art, we commission designers to craft something unique to represent every hashtag minted. Proof of Culture is the first major NFT project to enable customized art on the blockchain at scale.","featuredAt":"2021-04-11T07:01:00Z","createdAt":"2021-04-11T07:01:00Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291433","name":"Watchrad","description":"Watchrad is a self-hosted TV Shows, Movies and Video Games tracker Highlighted features: 📅 Calendar 🔔 Email and Discord Notification 👨‍👦‍ Multi-user ✔️ Automatic sync Try it now: https://watch.rad.vg","featuredAt":"2021-04-11T14:00:00Z","createdAt":"2021-04-11T14:00:00Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291749","name":"Remove YouTube Scammers","description":"This Chrome Extension removes all the comments inside of YouTube where they are trying to scam people by impersonating the YouTube Channel author.","featuredAt":"2021-04-11T09:50:10Z","createdAt":"2021-04-11T09:50:10Z","topics":{"edges":[{"node":{"id":"34","name":"Chrome Extensions"}}]}}},{"node":{"id":"291720","name":"Penpal Café","description":"Penpal Café is a place to use the magic of the internet to find a penpal. For the first season, the café is open until April 14. Navigation hint: click the image.","featuredAt":"2021-04-11T07:16:51Z","createdAt":"2021-04-11T07:16:51Z","topics":{"edges":[]}}},{"node":{"id":"291717","name":"Watchpubs","description":"Bring a company to watch memes or learn new things on YouTube, listen to music on SoundCloud, or just play your favorite videos from anywhere. Built-in YouTube features (search, related videos, trends, video info)","featuredAt":"2021-04-11T07:28:30Z","createdAt":"2021-04-11T07:28:30Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291729","name":"Motive RealScore","description":"We are building the world's largest data service about the real impacts brands have on the issues that matter. We make it easy to find good products from good companies.","featuredAt":"2021-04-11T07:37:24Z","createdAt":"2021-04-11T07:37:24Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291751","name":"Robowise","description":"Robowise scans the market and selects the best stock using multiple well-known trading system. Form classical value-based strategies to AI based strategies, every investor will find a system that helps him on selecting the best stocks.","featuredAt":"2021-04-11T10:57:31Z","createdAt":"2021-04-11T10:57:31Z","topics":{"edges":[{"node":{"id":"8","name":"iPhone"}}]}}},{"node":{"id":"291688","name":"Haze","description":"Introducing Haze! Search by town, city, and current location to get local hourly & weekly weather forecasts, rain predictions for the next hour, sunrise & sunset info and live monitoring of air pollution with health advice against harmful pollutants.","featuredAt":"2021-04-11T07:00:00Z","createdAt":"2021-04-11T07:00:00Z","topics":{"edges":[{"node":{"id":"8","name":"iPhone"}}]}}},{"node":{"id":"291697","name":"PIXELSYNTH","description":"PIXELSYHTH is a browser-based synthesizer for creating sounds from images and drawings. Powered by Web Audio and JavaScript, PIXELSYHTH lets you draw shapes and lines to create your very own sounds. Pop in some headphones, and enjoy the thing you created.","featuredAt":"2021-04-11T07:00:00Z","createdAt":"2021-04-11T07:00:00Z","topics":{"edges":[{"node":{"id":"21","name":"Web App"}}]}}},{"node":{"id":"291736","name":"welcome.gallery","description":"A 2.5D customizable gallery built to display online art and videos in a fun way","featuredAt":"2021-04-11T07:17:18Z","createdAt":"2021-04-11T07:17:18Z","topics":{"edges":[{"node":{"id":"272","name":"GitHub"}}]}}},{"node":{"id":"291579","name":"Frontend Toolkit","description":"Frontend Toolkit is a collection of utilities for your repetitive frontend-related tasks. It is customizable and lets you set up everything according to your needs.","featuredAt":"2021-04-10T07:07:26Z","createdAt":"2021-04-10T07:07:26Z","topics":{"edges":[{"node":{"id":"46","name":"Productivity"}}]}}}]}}}
        
        const topics = [];
        // populate topics with all value
        data.data.posts.edges.map(node => {
          if(node.node.topics.edges.length>=1){
              node.node.topics.edges[0].node.val=1;
              topics.push(node.node.topics.edges[0].node);
          }
        })


        // clean & count value
        const result = topics.reduce((acc, curr) => {
          const { id, name, val } = curr;
          const isPresent = acc.find((el) => el.id === id);
          if (!isPresent) acc = [...acc, { id, name, val }];
          else isPresent.val = isPresent.val + val;
          return acc;
        }, []);

        // console.log("data.data.posts.edges");
        // console.log(data.data.posts.edges);
        // console.log("result");
        // console.log(result);

        setProducthuntPosts(data.data.posts.edges);
        setProducthuntPostsTopics(result);


      } catch (error) {
        console.log("error.response",error.response);        
      }
    };
    getProducHuntPosts();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setDateChange(date);
  };

  return (
    <>
      <DatePickerCUI
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />

      <div>
        {producthuntPosts.map(({ node: { id, ...productData } }) => {
          return <SingleProduit key={id} props={productData} />;
        })}
      </div>
      <div>
        <PieChart producthuntPostsTopics={producthuntPostsTopics}/>
      </div>
    </>
  );
};

export default ListProducts;

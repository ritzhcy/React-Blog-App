import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "January 15 2022",
            "ImageAsset"    : "https://c.ndtvimg.com/2022-01/qtklueco_katrina-kaif-_625x300_13_January_22.jpg",
            "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
            "Likes"         : "1000K"
        },
        {
            "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "February 14 2022",
            "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
            "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devgn has gone on floors with the title ‘Bholaa’",
            "Likes"         : "700"
        },
        {
            "Title" : " Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, an - Bollywood Life",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "March 20 2022",
            "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Samantha-35-600x315.png",
            "BlogContent"   : "Naga Chaitanya BREAKS silence on divorce with Samantha Ruth Prabhu; explains how it impacted their family, and both of them professionally Also get bollywood actors, actress, movie, parties & event photos at Bollywoodlife.com",
            "Likes"         : "5000K"
        },
        {
            "Title" : " From Deepika Padukone to Aishwarya Rai Bachchan, here are the best looks from Cannes 2022",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "April 22 2022",
            "ImageAsset"    : "https://filmfare.wwmindia.com/content/2022/may/cannes2022121653294745.jpg",
            "BlogContent"   : "The most prestigious Film Festival in the world deserves an eclectic spread of all things grand. Cannes Film Festival - an arena that embraces the confluence of diverse cultures, and personalities and the art of exceptional filmmaking is also the annual hub of striking fashion statements. This year marked the first physical attendance of numerous stars from across the globe as they headed to the French Riviera to celebrate their shared love for films and storytelling.",
            "Likes"         : "600"
        },
        {
            "Title" : "Aryan Khan Poses With Childhood BFFs Ananya Panday, Shanaya Kapoor at Karan Johar's B'day Bash, See Pic",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "May 26 2022",
            "ImageAsset"    : "https://images.news18.com/ibnlive/uploads/2022/05/ananya-panday-11-16535717323x2.jpg?impolicy=website&width=510&height=356",
            "BlogContent"   : "Karan Johar knows how to throw a happening party and the pictures doing the rounds of the internet are proof. His 50th birthday bash at the Yash Raj Studios was celebrated by several prominent personalities of Bollywood including Shah Rukh Khan, Kajol, Aamir Khan Salman Khan, Anushka Sharma, Ranveer Singh, Ranbir Kapoor, Neetu Kapoor, Kareena Kapoor Khan, Malaika Arora, Katrina Kaif, Vicky Kaushal, Gauri Khan, Aryan Khan, Vijay Deverakonda, Kiran Rao, Ananya Panday, Shanaya Kapoor and many others.",
            "Likes"         : "800"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : " Motorola Edge X30 to hit global markets as Edge 30 Pro - GSMArena.com news - GSMArena.com",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://mcdn.wallpapersafari.com/medium/13/25/vZL2wb.jpg",
            "BlogContent"   : "The Motorola Edge X30 was announced in China last month running the Qualcomm Snapdragon 8 Gen 1 chipset and the phone will likely hit the global market pretty soon as evident by its newly collected NBTC certification",
            "Likes"         : "800"
        },
        {
            "Title" : " Halo Infinite's Next Multiplayer Bonus Revealed For Game Pass Subscribers - GameSpot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "February 10 2022",
            "ImageAsset"    : "https://www.gamespot.com/a/uploads/screen_kubrick/1179/11799911/3926694-screenshot2022-01-13at7.32.45am.png",
            "BlogContent"   : "Game Pass Ultimate members can pick up the Pass Tense skin for the Warthog right now",
            "Likes"         : "650"
        },
        {
            "Title" : " Samsung Galaxy S21 FE verus Pixel 6 camera comparison - Phandroid",
            "CategoryName"  : "Technology",
            "PublishedDate" : "March 12 2022",
            "ImageAsset"    : "https://i.ytimg.com/vi/PO2H0Ot3SfE/maxresdefault.jpg",
            "BlogContent"   : "The new Samsung Galaxy S21 FE has arrived, delivering the same basic specs as the Galaxy S21 with a lower price point and some new camera features. But can i.",
            "Likes"         : "700"
        },
        {
            "Title" : " Google Meet's live translated captions start rolling out widely - Engadget",
            "CategoryName"  : "Technology",
            "PublishedDate" : "April 14 2022",
            "ImageAsset"    : "https://s.yimg.com/os/creatr-uploaded-images/2022-01/74f5be60-745f-11ec-9f5c-922d19aea87a",
            "BlogContent"   : "Google Meet has started rolling out live translated captions widely after testing the feature last year..",
            "Likes"         : "900"
        },
        {
            "Title" : "Apple iPhone 14 set to launch later this year",
            "CategoryName"  : "Technology",
            "PublishedDate" : "May 26 2022",
            "ImageAsset"    : "https://assets.thehansindia.com/h-upload/2022/05/26/1294331-ipho.webp",
            "BlogContent"   : "A worrying development may lead to the iPhone 14 release date being pushed back to this year. Apple suppliers in China are reportedly behind in the development of at least one of the iPhone 14 models due to strict COVID-19 lockdowns. While the Cupertino-based tech giant has urged suppliers to speed up the process, there is growing concern that this could cause a delay in the smartphone's launch as manufacturing timelines may be affected. How Apple handles this situation remains to be seen.",
            "Likes"         : "422"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : " The Beatles: Get Back director Peter Jackson on turning the boy band's breakup saga into a 'human story'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2020/07/priyanka-nick.jpg?impolicy=website&width=640&height=362",
            "BlogContent"   : "“Our movie doesn’t show the breaking up of the Beatles,” Peter Jackson said, “but it shows the one singular moment in history that you could possibly say was the beginning of the end.”",
            "Likes"         : "800"
        },
        {
            "Title" : " Jason Momoa, Lisa Bonet separate after 16 years together: 'The love between us carries on'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2022/01/Jason.jpeg?impolicy=website&width=640&height=363",
            "BlogContent"   : "We have all felt the squeeze and changes of these transformational times… A revolution is unfolding (tilde) and our family is of no exception,” the post said, adding that they were announcing the split so “as we go about our lives we may do so with dignity and honesty.",
            "Likes"         : "800K"
        },
        {
            "Title" : " 2021 round-up: The Underground Railroad to Mare of Easttown; here are best international series on OTT",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2022",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2021/12/skj.jpg?impolicy=website&width=640&height=363",
            "BlogContent"   : "This is one of the greatest cinematic experiences of all time. After spending 10 precious hours of my life on Barry Jenkins’s certifiable masterpiece, I am rendered numbed and speechless. I can only say this for those who have yet not seen this monumental classic",
            "Likes"         : "2M"
        },
        {
            "Title" : " Sandra Bullock credits Netflix for extended career: 'I would have been out in the cow pasture'",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Januaury 14 2021",
            "ImageAsset"    : "https://images.firstpost.com/wp-content/uploads/2022/01/sandra-bullock459_.jpg?impolicy=website&width=640&height=363",
            "BlogContent"   : "Sandra Bullock has praised Netflix for employing actors like her, adding that if it was not for the streaming giant, she “would have been out in the cow pasture",
            "Likes"         : "800K"
        },
        {
            "Title" : " Amber Heard reveals she is not surprised Kate Moss came to testify for Johnny Depp: That's his power",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "May 26 2022",
            "ImageAsset"    : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F05%2F17%2Famber-heard-johnny-depp.jpg",
            "BlogContent"   : "Amber Heard said she wasn't shocked by last-minute statements in favor of Johnny Depp from Kate Moss and a hotel manager, adding that's the type of influence he exerts over people. Heard made the remark in her last minutes on the stand on Thursday, as her defamation trial with ex-husband Depp came to an end.",
            "Likes"         : "1M"
        }
       
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : " Eight sustainable changes you can make in 2022 to reach your fitness goals",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/12/Getty_weight-loss_1200.jpg?resize=450,250",
            "BlogContent"   : "New Year is always an opportunity for fresh beginnings and not repeating mistakes of the past year; here's what you can do",
            "Likes"         : "800K"
        },
        {
            "Title" : " Six at-home fitness challenges to help you reach your goals",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/10/workout_1200_getty.jpg",
            "BlogContent"   : "It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Should you exercise in the evening? Here’s what Ayurveda says",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 12 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/10/cardio_1200_getty.jpg?resize=450,250",
            "BlogContent"   : "You may find it hard to wake up in the morning or struggle to sleep early at night, but workout in the evening is not for you,ayurvedic practitioner Dr Varalakshmi Yanamandra said",
            "Likes"         : "800K"
        },
        {
            "Title" : " ‘Health must bring freedom, not restrictions’: Ankita Konwar pens note on fad diets and mindful eating",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Januaury 15 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2021/05/ankita-konwar_1200_instagram.jpg?resize=450,250",
            "BlogContent"   : "...fad diets and 10 day magical transformations never work. What works is a sustainable wholesome mindful way of living, she said.",
            "Likes"         : "1M"
        },
        {
            "Title" : " Don't skip strength training if you want to get better at running, according to a fitness coach",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "May 26 2022",
            "ImageAsset"    : "https://www.businessinsider.in/thumb/msid-91776119,width-700,resizemode-4,imgsize-61300/science/health/news/dont-skip-strength-training-if-you-want-to-get-better-at-running-according-to-a-fitness-coach/img628d15e56e7dc5001975aeb8.jpg,250",
            "BlogContent"   : "These simple stretches, when done throughout the day, also help with a flat stomach, said celebrity nutritionist Rujuta Diwekar",
            "Likes"         : "800K"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : " Ganesh Chaturthi 2018: Healthy modak recipe for kids",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.indianexpress.com/2018/09/modak-healthy.jpg?resize=450,338",
            "BlogContent"   : "Ganesh Chaturthi 2018: With these healthy Modaks, you don’t have to ask your child to stop at one!",
            "Likes"         : "500k+"
        },
        {
            "Title" : " Parsi New Year 2018: Does your child love eggs? Try this Deekro Ando Bhurji!",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2018/08/2-deekra-ando-bhurji.jpg?resize=450,338",
            "BlogContent"   : "Parsi New Year 2018: Their love for eggs is also seen in dishes like Pora, which is a Parsi omelette and “Par eeda” dishes which include vegetables like tomato, potato and ladyfinger, cooked with the eggs on top.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Try these yummy wraps!",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2018/07/wrap1.jpg?resize=450,338",
            "BlogContent"   : "Multigrain whole wheat contains fibres for digestion, lowers cholesterol, cancer risk and blood pressure, regulates blood sugar, redistributes fat and reduces asthma risk.",
            "Likes"         : "400K"
        },
        {
            "Title" : " Christmas 2019 recipes: Make plum pudding and mince pie for your child",
            "CategoryName"  : "Food",
            "PublishedDate" : "Januaury 16 2022",
            "ImageAsset"    : "https://images.indianexpress.com/2019/12/Traditional-Plum-Pudding-at-Novotel-ibis-Bengaluru-Outer-Ring-Road.jpg?resize=450,250",
            "BlogContent"   : "Christmas 2019: No festival is complete without gorging on delicious treats. Make these dishes at home and enjoy with your family.",
            "Likes"         : "1M+"
        },
        {
            "Title" : " Is it safe to consume ginger in summers? Here's answer",
            "CategoryName"  : "Food",
            "PublishedDate" : "May 26 2022",
            "ImageAsset"    : "https://media.glamour.com/photos/6123f3073e4bc479ef1ffa14/16:9/w_1280,c_limit/874285098",
            "BlogContent"   : "Ginger is a root spice which is loaded with antioxidants, minerals and vitamins that are essential for a strong metabolism and immunity. Packed with the goodness of Gingerol which is an antioxidant that helps in improving immunity, builds resistance against infections and allergies and is great for digestion. Ginger is super healthy, but you must have heard that consuming it during summers may increase the body temperature. Here’s all you need to know about it!",
            "Likes"         : "708K"
        }
    ]);

    return(
        <BlogContext.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </BlogContext.Provider>
    )
}

const youtubeConfig = {
    "src":"aRgqQe-8zYk",
    "id":"hypervideo_youtube",
    "type": Hypervideo.YOUTUBE_TYPE,
    "videoTitle": "Hypervideo from youtube",
    "size": {
        "width": 640,
        "height": 360
    },
    "tags": [
        {
            "position": {
                "x": 50,
                "y": 20
            },
            "timeConfig": {
                "timestamp": 1,
                "duration": 10
            },
            "color": "#fc9403",
            "plugin": {
                "name": "SimpleLabel",
                "config": {
                    "text": "Hi! I'm a label!"
                }
            }
        },
        {
            "position": {
                "x": 80,
                "y": 60
            },
            "timeConfig": {
                "timestamp": 2,
                "duration": 10
            },
            "color": "#fc9403",
            "plugin": {
                "name": "Questionary",
                "config": {
                    "title": "Is this the most awesome js library?",
                    "subtitle": "Choose the correct answer",
                    "correctAnswer": "Yeah! This is the most awesome library!",
                    "wrongAnswers": [
                      "This is a random answer!",
                      "Hi! I'm a random answer too!"
                    ]
                }
            }
        },
        {
            "position": {
                "x": 40,
                "y": 55
            },
            "timeConfig": {
                "timestamp": 4,
                "duration": 10
            },
            "color": "#ffffff",
            "plugin": {
                "name": "Card",
                "config": {
                    "title": "Landscape photography",
                    "description": "When most people start out taking landscape photos, they think they need to get a wide angle lens in order to capture the whole landscape. When I bought my first DSLR, I was one of those people. I made sure I had a wide angle lens because I knew I mostly wanted to photograph landscapes from my adventures, and that’s what everyone told me I required to get the job done.",
                    "imageSrc": "./assets/nature.jpg",
                    "backgroundColor": "#F2D5A0",
                    "titleColor": "rgb(138 104 43)",
                    "descriptionColor": "rgb(138 104 43)",
                    "button": {
                      "title": "Read Post",
                      "href": "https://www.google.es", 
                      "backgroundColor": "rgb(138 104 43)",
                      "textColor": "white"
                    }
                }
            }
        },
        {
            "position": {
                "x": 90,
                "y": 90
            },
            "timeConfig": {
                "timestamp": 10,
                "duration": 2
            },
            "color": "#ffffff",
            "plugin": {
                "name": "Decision",
                "config": {
                    "timeout": 5,
                    "rightButton": {
                        "text": "Second option",
                        "timestamp": 2
                    },
                    "leftButton": {
                        "text": "First option",
                        "timestamp": "now"
                    }
                }
            }
        }
    ]
};

const videoConfig = {
    "src":"./assets/solarsystem.mp4",
    "id":"hypervideo_file",
    "type": Hypervideo.VIDEO_TYPE,
    "videoTitle": "Hypervideo from a file",
    "size": {
        "width": 300,
        "height": 360
    },
    "tags": [
        {
            "position": {
                "x": 40,
                "y": 55
            },
            "timeConfig": {
                "timestamp": 28,
                "duration": 5
            },
            "color": "#f54e42",
            "plugin": {
                "name": "Card",
                "config": {
                    "title": "The milky way",
                    "description": "The Milky Way[a] is the galaxy that includes our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye. The term Milky Way is a translation of the Latin via lactea, from the Greek γαλακτικός κύκλος (galaktikos kýklos, milky circle).[19][20][21] From Earth, the Milky Way appears as a band because its disk-shaped structure is viewed from within. Galileo Galilei first resolved the band of light into individual stars with his telescope in 1610.",
                    "imageSrc": "./assets/milkyway.jpg",
                    "backgroundColor": "#F2D5A0",
                    "titleColor": "rgb(138 104 43)",
                    "descriptionColor": "rgb(138 104 43)",
                    "button": {
                      "title": "Read Post",
                      "href": "https://en.wikipedia.org/wiki/Milky_Way", 
                      "backgroundColor": "rgb(138 104 43)",
                      "textColor": "white"
                    }
                }
            }
        },
        {
            "position": {
                "x": 80,
                "y": 60
            },
            "timeConfig": {
                "timestamp": 35,
                "duration": 5
            },
            "color": "#fc9403",
            "plugin": {
                "name": "Questionary",
                "config": {
                    "title": "What is the mily way?",
                    "subtitle": "Choose the correct answer",
                    "correctAnswer": "The Milky Way is the galaxy that includes our Solar System",
                    "wrongAnswers": [
                      "The Milky Way is some kind of food that is made with milk.",
                      "A galaxy that is located in the center of the universe."
                    ]
                }
            }
        },
        {
            "position": {
                "x": 90,
                "y": 90
            },
            "timeConfig": {
                "timestamp": 49,
                "duration": 1
            },
            "color": "clear",
            "plugin": {
                "name": "Decision",
                "config": {
                    "timeout": 15,
                    "leftButton": {
                        "text": "Show terrestial planets",
                        "timestamp": "now"
                    },
                    "rightButton": {
                        "text": "Show jovian planets",
                        "timestamp": 112
                    }
                }
            }
        }
    ]
};

const imageConfig = {
    "src":"./assets/test_image.jpg",
    "id":"hyperimage",
    "type": Hypervideo.IMAGE_TYPE,
    "videoTitle": "Hypervideo from an image",
    "size": {
        "width": 400,
        "height": 266
    },
    "tags": [
        {
            "position": {
                "x": 50,
                "y": 20
            },
            "timeConfig": {
                "timestamp": 1,
                "duration": 10
            },
            "color": "#fc9403",
            "plugin": {
                "name": "SimpleLabel",
                "config": {
                    "text": "Hi! I'm a label!"
                }
            }
        },
        {
            "position": {
                "x": 80,
                "y": 60
            },
            "timeConfig": {
                "timestamp": 2,
                "duration": 10
            },
            "color": "#fc9403",
            "plugin": {
                "name": "Questionary",
                "config": {
                    "title": "Is this the most awesome js library?",
                    "subtitle": "Choose the correct answer",
                    "correctAnswer": "Yeah! This is the most awesome library!",
                    "wrongAnswers": [
                      "This is a random answer!",
                      "Hi! I'm a random answer too!"
                    ]
                }
            }
        },
        {
            "position": {
                "x": 40,
                "y": 55
            },
            "timeConfig": {
                "timestamp": 4,
                "duration": 10
            },
            "color": "#ffffff",
            "plugin": {
                "name": "Card",
                "config": {
                    "title": "Landscape photography",
                    "description": "When most people start out taking landscape photos, they think they need to get a wide angle lens in order to capture the whole landscape. When I bought my first DSLR, I was one of those people. I made sure I had a wide angle lens because I knew I mostly wanted to photograph landscapes from my adventures, and that’s what everyone told me I required to get the job done.",
                    "imageSrc": "./assets/nature.jpg",
                    "backgroundColor": "#F2D5A0",
                    "titleColor": "rgb(138 104 43)",
                    "descriptionColor": "rgb(138 104 43)",
                    "button": {
                      "title": "Read Post",
                      "href": "https://www.google.es", 
                      "backgroundColor": "rgb(138 104 43)",
                      "textColor": "white"
                    }
                }
            }
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {

    const youtubeHypervideo = new Hypervideo(youtubeConfig);
    const fileHypervideo = new Hypervideo(videoConfig);
    const hyperimage = new Hypervideo(imageConfig);

    youtubeHypervideo.setupHypervideo();
    fileHypervideo.setupHypervideo();
    hyperimage.setupHypervideo();

});



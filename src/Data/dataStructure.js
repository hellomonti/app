export const getData = () => ({
    introConversation: {
        start: {
            name: 'start',
            type: 'button',
            bot: {
                prompts: ["Hello, i'm Monti 👋",
                          "I can help you find areas in the city that matches your state of mind.",
                          "Shall we begin?"],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'How can you find areas?',
                        value: 1,
                        next: "findAreas",
                        primary: false
                    },
                    {
                        answer: 'How do you match areas with my state of mind?',
                        value: 2,
                        next: "howDoYouMatch",
                        primary: false
                    },
                    {
                        answer: 'Lets do this!',
                        value: 3,
                        next: "readyToBegin", 
                        primary: true
                    }
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
        findAreas: {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["I can hear 👂, smell 👃 and see 👀 things in the city that people can't perceive.",
                          "Me and my other friends collect this knowledge all the time.",
                          "And we can use this information to find suitable locations that cater for your mood."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'Wait, who are you and your friends?',
                        value: 1,
                        next: "youAndYourFriends",
                    },
                    {
                        answer: 'Sounds cool!',
                        value: 2,
                        next: "readyToBegin", 
                    }
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
        youAndYourFriends: {
            name: 'youAndYourFriends',
            type: 'button',
            bot: {
                prompts: ["Well, I'm a City Probe. I sense air pollution💨, noise🔊 and light☀️.",
                          "There are several sensors like me all over town.",
                          "And we all work together."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'Sounds Cool!',
                        value: 1,
                        next: "readyToBegin",
                    }
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
        howDoYouMatch: {
            name: 'howDoYouMatch',
            type: 'button',
            bot: {
                //prompts: ["From my sensory information about the state of the city and what you tell me about yourself, I can personalise a specific area to you.", "So tell me how you feel and I can help you find solitutude."],
                prompts: ["I've been practising some wacky mathematical problems! 🤓 The equation is: ",
                          "My information about the city + your current state mind = a suitable location for you to find solitude.",
                          "So tell me how you feel and I'll find you somewhere to be at peace."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: "Solitude?",
                        value: 1,
                        next: "solitude"
                    }
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
        solitude: {
            name: 'solitude',
            type: 'button',
            bot: {
                prompts: ["It's a state of mind, where you are able to relax, be creative", "…", "Well, a feeling of contentment and comfort. 😌"],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: 'Alright, lets do this!',
                        value: 1,
                        next: "readyToBegin",
                    },
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
        readyToBegin: {
            name: 'readyToBegin',
            type: 'button',
            bot: {
                prompts: ["Okay, I'm gonna ask you a few questions", "What you answer will stay between you and me, and will only be used to locate a nice area for you.", "When you answer think of how you feel right now 💖"],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'I promise 🤞',
                        value: 1,
                        next: "goToConversation",
                    },
                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        },
    },

    extras: [
        'extra1', 'extra2', 'extra3', 'extra4', 'extra5'
    ],

    conversation: {
        // energy: {
        //     name: 'energy',
        //     type: 'slider',
        //     bot: {
        //         prompts: ['How much energy do you have to spare?'],
        //         responds: ['YOU NEED SOME FUCKING FRESH AIR#!', 'woooow2','woooow3', 'niiice4', "LET'S FUCKING GO!"]
        //     },
        //     user: {
        //         options: [
        //             {
        //                 answer: "I don't feel energetic at all",
        //                 value: 1
        //             },
        //             {
        //                 answer: "I don't feel energetic",
        //                 value: 2
        //             },
        //             {
        //                 answer: 'I feel slightly energetic',
        //                 value: 3
        //             },
        //             {
        //                 answer: 'I feel energetic',
        //                 value: 4
        //             },
        //             {
        //                 answer: 'I feel very energetic',
        //                 value: 5
        //             },
        //         ],
        //         answer: {
        //             answer: '',
        //             value: null
        //         }
        //     }
        // },
        relax: {
            name: 'relax',
            type: 'slider',
            bot: {
                prompts: ['How relaxed do you feel?'],
                responds: ["It's good to think about that sometimes."]
            },
            user: {
                options: [
                    {
                        answer: "I don't feel relaxed at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel relaxed",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly relaxed',
                        value: 3
                    },
                    {
                        answer: 'I feel relaxed',
                        value: 4
                    },
                    {
                        answer: 'I feel very relaxed',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        clearThoughts: {
            name: 'clearThoughts',
            type: 'slider',
            bot: {
                prompts: ['How clear are your thoughts right now?'],
                responds: ["Hmm. That's interesting!"]
            },
            user: {
                options: [
                    {
                        answer: "I'm not thinking clearly at all",
                        value: 1
                    },
                    {
                        answer: "I'm not thinking very clearly",
                        value: 2
                    },
                    {
                        answer: "I'm thinking somewhat clearly",
                        value: 3
                    },
                    {
                        answer: "I'm thinking pretty clearly",
                        value: 4
                    },
                    {
                        answer: "I'm thinking very clearly",
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        confident: {
            name: 'confident',
            type: 'slider',
            bot: {
                prompts: ['How confident do you feel?'],
                responds: ["We are getting closer."]
            },
            user: {
                options: [
                    {
                        answer: "I don't feel confident at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel confident",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly confident',
                        value: 3
                    },
                    {
                        answer: 'I feel confident',
                        value: 4
                    },
                    {
                        answer: 'I feel very confident',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        interestPeople: {
            name: 'interestPeople',
            type: 'slider',
            bot: {
                prompts: ['How interested are you in socialising?'],
                responds: ["I know that feeling."]
            },
            user: {
                options: [
                    {
                        answer: "I don't feel interested in other people at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel interested in other people",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly interested in other people',
                        value: 3
                    },
                    {
                        answer: 'I feel interested in other people',
                        value: 4
                    },
                    {
                        answer: 'I feel very interested in other people',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        useful: {
            name: 'useful',
            type: 'slider',
            bot: {
                prompts: ['How useful do you feel?'],
                responds: ["That's a bit robotic, isn't it?🤖"]
            },
            user: {
                options: [
                    {
                        answer: "I don't feel useful at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel useful",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly useful',
                        value: 3
                    },
                    {
                        answer: 'I feel useful',
                        value: 4
                    },
                    {
                        answer: 'I feel very useful',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        problems: {
            name: 'problems',
            type: 'slider',
            bot: {
                prompts: ['How well do you deal with problems?'],
                responds: ["Well, you're doing great right now."]
            },
            user: {
                options: [
                    {
                        answer: "I can't deal with problems at all",
                        value: 1
                    },
                    {
                        answer: "I can't deal with problems",
                        value: 2
                    },
                    {
                        answer: 'I can slightly deal with problems',
                        value: 3
                    },
                    {
                        answer: 'I can deal with problems',
                        value: 4
                    },
                    {
                        answer: 'I can very well deal with problems',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        duration: {
            name: 'duration',
            type: 'slider',
            bot: {
                prompts: ["...","Alright, now I understand your mood", 'The last thing I need to know is, how much time do you have to spend?'],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: "I only have a few moments",
                        value: 1
                    },
                    {
                        answer: "I've got at bit of time",
                        value: 2
                    },
                    {
                        answer: "I've got time",
                        value: 3
                    },
                    {
                        answer: 'I have plenty of time',
                        value: 4
                    },
                    {
                        answer: 'I have all the time in the world',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        }
    },
    conversationHistory: [
        {
            time: null,
            day: null,
            conversations: [
                {
                    time: 'hh:mm:ss',
                    date: 'dd-mm-yy',
                    conversation: {

                    }
                }
            ]
        }
    ],

    suggestions: [
        {
            name: 'Æblehaven Cassiopeia',
            xCoord: '57.012530',
            yCoord: '9.991089',
            image: './assets/img/cass.jpg'
        },
        {
            name: 'Gårdhaven Cassiopeia',
            xCoord: '57.012173',
            yCoord: '9.991276',
            image: './assets/img/cass-2.jpg'
        }
    ]
})
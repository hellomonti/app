export const getData = () => ({
    introConversation: {
        start: {
            name: 'start',
            type: 'button',
            bot: {
                prompts: ["Hello, i'm Monti 👋", "I can help you find areas in the city that matches your state of mind.", "Shall we begin?"],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'Find areas?',
                        value: 1,
                        next: "findAreas",
                    },
                    {
                        answer: 'How do you match?',
                        value: 2,
                        next: "howDoYouMatch",
                    },
                    {
                        answer: 'Lets do this!',
                        value: 3,
                        next: "readyToBegin", 
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
                prompts: ["I can hear 👂, smell 👃 and see 👀 things people normally cannot in the city.", "Me and my other friends measure this all the time.", "And we use this information to find areas."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'You and your friends?',
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
                prompts: ["Well there are sensors like me all over town.", "And we all work together."],
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
                prompts: ["From my information about the city and your answers I can personalise a specific area to you.", "So tell me how you feel and I can help you find solitutude."],
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
                prompts: ["It's a state of mind, where you are able to relax, be creative, …", "Well you just feel content and reflects over issues."],
                responds: ["Okay, I'm gonna ask you a few questions", "When you answer think of how you feel right now 💖"]
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
                prompts: ["Okay, I'm gonna ask you a few questions", "When you answer think of how you feel right now 💖"],
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
    
    conversation: {
        energy: {
            name: 'energy',
            type: 'slider',
            bot: {
                prompts: ['How much energy do you have to spare?'],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: "I don't feel energetic at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel energetic",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly energetic',
                        value: 3
                    },
                    {
                        answer: 'I feel energetic',
                        value: 4
                    },
                    {
                        answer: 'I feel very energetic',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        },
        relax: {
            name: 'relax',
            type: 'slider',
            bot: {
                prompts: ['How relaxed do you feel?'],
                responds: []
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
                        answer: 'I feel very reaxed',
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
                prompts: ['How clear are your thoughts?'],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: "I can't think clearly at all",
                        value: 1
                    },
                    {
                        answer: "I can't think clearly",
                        value: 2
                    },
                    {
                        answer: 'I slightly think clearly',
                        value: 3
                    },
                    {
                        answer: 'I think clearly',
                        value: 4
                    },
                    {
                        answer: 'I think very clearly',
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
                responds: []
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
                responds: []
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
                responds: []
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
                responds: []
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
    ]
})
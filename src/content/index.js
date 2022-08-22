import {GrLinkedin} from 'react-icons/gr'
import {FaTwitterSquare , FaGithubSquare} from 'react-icons/fa'
import {SiCplusplus,SiPytorch ,   SiUnrealengine} from 'react-icons/si'

const Content = {
	logo: {
        logo: 'MMP',
        img: require("../assets/mplogo-white.png"),
     },
    nav: {
	  links: [
        { text: 'Home', to: 'home' },
        { text: 'About', to: 'about' },
 		    { text: 'Project', to: 'projects' },
		    { text: 'Contact', to: 'contact' },
	  ],
	},

	home: {
   	text: ["Hello From the other side! ", " I'm  Morteza Mousa Pasandi.", 'Working on ', " Computer Engineer based on Ottawa, On. Waiting for Death."],
	  typical: [
		'Game Developement! ',
		'FrontEnd Developement. ',
		'Mobile-App Developement_ ',
		'Machine-Learning Engineering_. ',
    ],
    btns: {
        counts: 2,
        Text:['Download CV',"Let's Talk"],
        Links:[require("../assets/cv.pdf"),"mailto:mortezamomp@proton.me"],
      },
    Socials:[
      {
        name:'Github',
        Links:"https://github.com/itsMorteza",
        logo:<FaGithubSquare/>,
        },          
        {
          name:'Twitter',
          Links:"https://twitter.com/the_pandafather",
          logo:<FaTwitterSquare/>,
        },
        {
          name:"Linkdin",
          Links:"https://www.linkedin.com/in/morteza-mousa-pasandi",
          logo:<GrLinkedin/>,
        },
     ],
 
    },

	about: {
        name: 'About Me',
        question: " If you knew you were going to die tomorrow, how would you spend today? ",
        img:require("../assets/img2.png"),
         
        para:[ " Morteza Mousa Pasandi received his BSc in  Computer Engineering from Isfahan University of Technology, Iran, in 2020 and is currently pursuing graduate studies at the University of Ottawa, working on computer vision, image processing and game development. interested in deep neural networks and their significant capacity in generalization. "],
   
        btn: {
          text:['EXP','Projects', 'Learning', 'studied','Enjoy'],
          subtext:['+3 years', '+20', 'violin and programming', 'computer engineering', 'running and writing'], 
        },
        Skills: [
          {
            name:'C++',
            logo:<SiCplusplus/>,
            },          
            {
              name:'Pytorch',
              logo:<SiPytorch/>,
            },
            {
              name:"Unreal-Engine",
              logo:<SiUnrealengine/>,
            },
         ],
        ExpTree:{
          mainskills:['Software Development','Hardware Design'],
          mainperformance:['FrontEnd Developer',' App Developer', ' Game Developer', 'Machine Learning engineer', 'hardware accelration'],
          subperformance:['C++','python', 'pytorch', 'Javascript', 'React JS', 'MongoDB'],
        },
      },    
  projects: [
        {
          title: "Sensor Fusion in Kitti ",
          description: "A Sensor Fusion template built with pytorch for practical 2d Detection.",
          tags: [
            "Sensor Fusion",
            "pytorch",
          ],
          link: "https://github.com/itsmorteza/mmdetection"
        },
        {
          title: "Pruning in COCO ",
          description: "A Pruning template built with pytorch for practical 2d Detection.",
          tags: [
            "Object-Detection",
            "pytorch",
          ],
          link: "https://github.com/itsmorteza/mmdetection"
        },        
        {
          title: "Pruning VGG-16 PUFA in CIFAR-10 ",
          description: "A Pruning template built with tensorflow for classification.",
          tags: [
            "Pruning",
            "tensorflow",
          ],
          link: "https://github.com/itsmorteza/pruningvgg"
        }, 
        {
          title: "Big Small",
          description: "A 2d game template built with CPP.",
          tags: [
            "game",
            "C Plus Plus" 
          ],
          link: "https://github.com/itsmorteza/bigsmall"
        }, 
        {
          title: "Verilog Lenet ",
          description: "lenet implementation template built with Verilog.",
          tags: [
            "Lenet",
            "Verilog" 
          ],
          link: "https://github.com/itsmorteza/simple_CNN_verilog"
        },
        {
          title: "Verilog FIR ",
          description: "A FIR implementation template built with Verilog.",
          tags: [
            "FIR",
            "Verilog" 
          ],
          link: "https://github.com/itsmorteza/Fpga_FIR_compiler"
        }
      ],
 
};

export default Content
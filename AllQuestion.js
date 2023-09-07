// Total 4 categories and 10 questions in each category
const QUESTIONS = {
    probability: [
      {
        question:            //Q-1
        " A bag contains 6 white and 4 black balls.2 balls are drawn at random.Find the probability that they are of same color.",
    options:["1/2","7/15","8/15","1/9",
    ],
    answer: "7/15",
    },
    {
    question:            //Q-2
    "Two dice are tossed.The probalitiy that the total score is a prime number is:",
    options:["5/12","1/6", "1/2","7/9",
    ],
    answer:"5/12",
    },
    {
question:       //Q-3
"From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
options:["1/15","1/221","25/57","35/256",
],
answer:"1/221",
    },
    {
        question:     //Q-4
        "In a box,there are 8 red,7 blue and 6 green balls.One ball is picked up randomly.What is the probability that it is neither red nor green?",
        options:["1/3","3/5","8/21", "7/21",
        ],
        answer:"1/3",
    },
    {
        question:      //Q-5
      "What is the probability that a number selected from the numbers (1, 2, 3,..........,15) is a multiple of 4?",
    options: ["1/5", "4/2", "2/8", "3/5"],
    answer: "1/5",
    },
    {
        question:     //Q-6
         "What are the total outcomes when we throw three coins?",
        options: ["6", "7", "8", "9"],
        answer: "8",
    },
    {
        question:      //Q-7
        "What is the probability of getting a sum as 3 if a dice is thrown?",
      options: ["7/4", "3/2", "15/18", "1/18"],
      answer: "1/18",
    },
    {
        question:      //Q-8
        "If three coins are tossed simultaneously, than the probability of getting at least two heads, is:",
      options: ["2/12", "5/12", "3/8", "5"],
      answer: "3/8",  
    },
    {
        question:     //Q-9
        "In a class, there are 15 boys and 10 girls.Three student are selected at random.The probability that 1 girl and 2 boys are selected,is:",
        options:["21/46","1/5","3/25","1/50",],
        answer:"21/46",
    },
    {
        question:     //Q-10
        "A card is drawn from a pack of 52 cards.The a probability of getting a queen of club or a king of heart is:",
        options:["2/13","1/13","1/26","1/52"],
        answer:"1/26",
    },
],

//pipe and cisterns...
"Pipes and Cisterns":[
{
   question:        //Q-1
"A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
options:["3 hrs 15 min","3 hrs 45 min","4 hrs 15 min","4 hrs 1"],
answer:"3 hrs 45 min",
},
{
   question:        //Q-2
"A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
options:["20 hrs","28 hrs","36 hrs","40 hrs"],
answer:"20 hrs",
},
{
  question:           //Q-3
"Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:",
options:["10","12","14","16"],
answer:"14",
},
{
  question:           //Q-4
"One fill pipe A is 3 times faster than second fill pipe B and takes 32 minutes less than the fill pipe B. When will the cistern be full if both pipes are opened together?",
options:["6 min","8 min","12 min","10 min"],
answer:"12 min", 
},
{
  question:            //Q-5
"12 buckets of water fill a tank when the capacity of each tank is 13.5 liters. How many buckets will be needed to fill the same tank,if the capacity of each bucket is 9 liters?",
options:["8","15","16","18"],
answer:"18",
},
{
  question:          //Q-6
"Water flows into a tank which is 200 m long and 150 m wide, through a pipe of cross-section (0.3m x 0.2m) at 20 km/h. In what time will the water level be 12m ?",
options:["200 hrs","240 hrs","300 hrs","270 hrs"],
answer:"300 hrs",
},
{
  question:           //Q-7
"One pipe can fill a tank  three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in:",
options:["81 min","108 min","144 min","192 min"],
answer:"144 min",
},
{
  question:       //Q-8
"A Tank is normally filled in 9 hours but takes four hours longer to fill because of a leak in its bottom. If the tank is full, the leak will empty it in ?",
options:["32.5 hrs","29.25 hrs","30.30 hrs","31 hrs"],
answer:"29.25 hrs",
},
{
  question:         //Q-9
"A tank is filled in eight hours by three pipes K, L and M. Pipe K is twice as fast as pipe L, and L is twice as fast as M. How much time will pipe L alone take to fill the tank ?",
options:["32 hrs","24 hrs","28 hrs","26 hrs"],
answer:"28 hrs",
},
{
  question:           //Q-10
"3 pipes when opened for 3 hours can fill 3 buckets. How many buckets can 2 pipes open for 2 hours approximately fill?",
options:["2/3 buckets","2 buckets","1 bucket","4/3 bucket"],
answer:"4/3 bucket",
},
],

// problem on age...
"Problems On Age":[
    {
        question:         //Q-1
"A father said his son ' I was as old as you are at present at the time of your birth.' If the father age is 38 now, the son age 5 years back was :",
options:["14","19","33","38"],
answer:"14",
    },
    {
        question:         //Q-2
    "In 10 years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B, the present age of B is :",
    options:["19","29","39","49"],
    answer:"39",
    },
    {
        question:        //Q-3
        "The total age of A and B is 12 years more than the total age of B and C. C is how many years younger than A ?",
        options:["12","14","13","15"],
        answer:"12",
    },
    {
        question:     //Q-4
        "The sum of the present ages of a father and his son is 60 years. five years ago, father's age was four times the age of the son. so now the son's age will be:",
        options:["10","20","15","5"],
        answer:"15",
    },
    {
        question:     //Q-5
       "Rajeev's age after 15 years will be 5 times his age 5 years back. What is the present age of rajeev?",
        options:["12","22","14","10"],
        answer:"10",
    },
    {
        question:       //Q-6
        "The average age of a class is 15.8 years. The average age of the boys in the class is 16.4 years and that of the girls is 15.4 years. What is the ratio of boys to girls in the class ?",
        options:["1:2","2:3","3:2","3:1"],
        answer:"2:3",
    },
    {
        question:          //Q-7
        "A person's present age is two-fifth of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present ?",
        options:["36 yrs","38 yrs","40 yrs","42 yrs"],
        answer:"40 yrs",
    },
    {
        question:         //Q-8
        "Sivagami is 2 years elder than Meena. After 6 years the total of their ages will be 7 times of their current age. Then age of Sivagami is :",
        options:["19 years","17 years","15 years","none of this"],
        answer:"none of this",
    },
    {
        question:      //Q-9
        "The ages of Krish and Vaibhav are in the proportion of 3 : 5. After 9 years, the proportion of their ages will be 3 : 4. Then the current age of Vaibhav is:",
        options:["10","13","18","15"],
        answer:"15",
    },
    {
        question:        //Q-10
        "Eight years ago, Ajay's age was 4/3 times that of Vijay. Eight years hence, Ajay's age will be 6/5 times that of Vijay. What is the present age of Ajay ?",
        options:["41 yrs","40 yrs","37 yrs","33 yrs"],
        answer:"40 yrs",
    },
],
// profit and loss....
"Profit And Loss":[
    {
        question:         //Q-1
        "If selling price is doubled, the profit triples. Find the profit percent ?",
        options:["100%","200%","300%","400%"],
        answer:"100%",
    },
    {
        question:         //Q-2
        "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
        options:["No profit,no loss","5%","8%","10%"],
        answer:"5%",
    },
    {
        question:         //Q-3
        "A shopkeeper cheats to the extent of 10% while buying and selling, by using false weights. His total gain is.",
        options:["20%","21%","22%","23%"],
        answer:"21%",
    },
    {
        question:        //Q-4
        "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction ?",
        options:["16","18","20","22"],
        answer:"18",
    },
    {
        question:       //Q-5
        "If the cost price of 12 pens is equal to the selling price of 8 pens, the gain percent is ?",
        options:["12%","30%","50%","60%"],
        answer:"50%",
    },
    {
        question:     //Q-6
        "If the cost price is 25% of selling price. Then what is the profit percent.",
        options:["150%","200%","300%","350%"],
        answer:"300%",
    },
    {
        question:      //Q-7
        "Tarun got 30% concession on the labelled price of an article and sold it for Rs. 8750 with 25% profit on the price he bought. What was the labelled price ?",
        options:["10000","12000","13000","14000"],
        answer:"10000",
    },
    {
        question:      //Q-8
        "A person incurs a loss of 5% be selling a watch for Rs. 1140. At what price should the watch be sold to earn 5% profit.",
        options:[" Rs.1200","Rs.1230","Rs.1260","Rs.1290"],
        answer:"Rs.1260",
    },
    {
        question:      //Q-9
        "By selling an article at Rs.800, a shopkeeper makes a profit of 25%.At what price should he sell the article so as to make a loss of 25%?",
        options:["Rs.720","Rs.640","Rs.540","Rs.480"],
        answer:"Rs.480",
    },
    {
        question:        //Q-10
        "What profit percent is made by selling an article at a certain price, if by selling at 2/3rd of that price, there would be a loss of 20% ?",
        options:["30%","25%","15%","20%"],
        answer:"20%",
    },
    ],
  };
var db = require('./models');

var restaurants_list = [
  {
  name: "Gary Danko",
  location: "Fisherman's Wharf",
  price_range: "Expensive",
  serviceTime: "30 min"
  cuisine: "American",
  OperationHours: [ "Mon-Fri : 5:30pm to 10pm" ]
  },
  {
  name: "Velvet Cantina",
  location: "Mission District",
  price_range: "moderate",
  serviceTime: "30 min"
  cuisine: "Mexican",
  OperationHours: [ "Mon-Fri : 5pm to 12am" ]
  },
  {
  name: "Chez Maman",
  location: "Potrero Hill",
  price_range: "moderate",
  serviceTime: "45 min"
  cuisine: "French",
  OperationHours: [ "Mon-Fri : 11:30am to 11pm", "Sat-Sun : 10:30am to 11pm" ]
  },
  {
  name: "Villa Taverna",
  location: "Financial District",
  price_range: "expensive",
  serviceTime: "30 min"
  cuisine: "Italian",
  OperationHours: [ "Mon-Fri : 11:30am to 2pm" ]
  },
  {
  name: "Omakase",
  location: "Mission Bay",
  price_range: "expensive",
  serviceTime: "25 min"
  cuisine: "Japanese",
  OperationHours: [ "Mon-Sun : 5pm to 9:30pm" ]
  },
  {
  name: "Udupi Palace",
  location: "Mission",
  price_range: "moderate",
  serviceTime: "10 min"
  cuisine: "Indian",
  OperationHours: [ "Sun-Thurs : 11:30am to 10pm", "Fri-Sat : 11:30am to 10:30pm" ]
  },
  {
  name: "Hakkasan",
  location: "Union Square",
  price_range: "moderate",
  serviceTime: "45 min"
  cuisine: "Chinese",
  OperationHours: [ "Mon-Sat : 11:30am to 10pm", "Sun : Closed" ]
  },
  {
  name: "Pica Pica Arepa Kitchen",
  location: "Mission",
  price_range: "moderate",
  serviceTime: "15 min"
  cuisine: "Peruvian",
  OperationHours: [ "Sun-Thur : 11am to 9pm",  "Fri-Sat : 11am to 10pm" ]
  },
  {
  name: "Piccadilly Fish & Chips",
  location: "Nob Hill",
  price_range: "cheap",
  serviceTime: "10 min"
  cuisine: "English",
  OperationHours: [ "Mon-Sun : 11am to 11pm" ]
  },
  {
  name: "Pastel Brazzuca",
  location: "Potrero Hill",
  price_range: "cheap",
  serviceTime: "10 min"
  cuisine: "Brazillian",
  OperationHours: [ "Mon-Fri : 8am to 7pm", "Sat: 9am to 2:30pm" ]
  }

]
var reviews_list=[
  {
    review_text:"Food is excellant",
    username:"Gordon Ramsay"
  },
  {
    review_text:"yummy food".
    username:"Emeril Lagasse"
  }
]

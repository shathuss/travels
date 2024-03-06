
const cors = require("cors");


const PORT = 8000;

app.use(cors());
// Dummy data for demonstration purposes
const cardData = [
  {
    id: 1,
    imageUrl: "https://pics.clipartpng.com/Black_Mercedes_Benz_S_Class_2012_Car_PNG_Clipart-106.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 2,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 3,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 4,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 5,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 6,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 7,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
  {
    id: 8,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },

  {
    id: 9,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },

  {
    id: 10,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Mercedes-Benz",
    model:"AMG G 63",
    seats:3,
    luggage: 2,
    hourlyrate:60,
    dailyrate:60,

    
  },
];


const ChauffeurData = [
  {
    id: 11,
    imageUrl: "https://pics.clipartpng.com/Black_Mercedes_Benz_S_Class_2012_Car_PNG_Clipart-106.png",
    title: "Rolls Royce Cullinan",
    model:"Luxury SUV",
    seats:3,
    luggage: 2,
   

    
  },
  {
    id: 12,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Rolls Royce Cullinan",
    model:"Luxury SUV",
    seats:3,
    luggage: 2,
    

    
  },
  {
    id: 13,
    imageUrl: "https://images.app.goo.gl/V8AGvH71YMB5o5Kj9.png",
    title: "Rolls Royce Cullinan",
    model:"Luxury SUV",
    seats:3,
    luggage: 2,
   

    
  },
  
];



app.get("/api/auto-gear", (req, res) => {
  res.json(ChauffeurData);
});

// Define routes
app.get("/api/helmets", (req, res) => {
  res.json(cardData);
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

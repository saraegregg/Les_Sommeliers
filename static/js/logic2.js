// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// create a third tile layer that will be the background of our map (deliverable 3)
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds all three maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets,
    "Dark": dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets]
});

  // 1. Add a 2nd layer group for the top wine data
let AllWines = new L.LayerGroup();
let TopPointWines = new L.LayerGroup();
let MidPointWines = new L.LayerGroup();
let LowPointWines = new L.LayerGroup();

// 2. Add a reference to the top wine data to the overlays object.
let overlays = {
  "All Top Wines": AllWines,
  "100 Point Wines": TopPointWines,
  "99 Point Wines": MidPointWines,
  "98 Point Wines": LowPointWines
};
 // Pass our map layers into our layers control and add the layers control to the map
 L.control.layers(baseMaps, overlays).addTo(map);

 // naming data
 let wineData = "https://raw.githubusercontent.com/saraegregg/Mod20_Group_Challenge/main/static/resources/top_wine_data.csv";

 //Grabbing our GeoJSON data
 d3.csv(wineData).then(function(csv) {
     //creating a GeoJSON layer with the retrieved data.
    console.log(csv)
    data = csv;
    addMarkers();
   

  function addMarkers() {
  data.forEach(function(d) {
    var marker = L.circleMarker([+d.lat, +d.lon]);
    marker.addTo(map);
  })
}

    function styleInfo(feature) {
        return {
            opacity: 1, 
            fillOpacity: 1,
            fillColor: "#ffae42",
            color: "#000000",
            radius: getRadius(points),
            stroke: true,
            weight: 0.5
        };
    }

    function getRadius(points) {
        if (points === 100) {
            return 1;
        }
            return points * 4;
        }
    
   
    L.geoJSON(data, {
         //style:myStyle
         // onEachFeature: function(feature,layer) {
        // layer.bindPopup(<h2>"Points:" + points)
        //}
        pointToLayer: function(feature, lat, lon) {
            console.log(data);
            return L.circleMarker(lat, lon);
          },
          //Set the style for each circleMarker using styleInfo function
          style: styleInfo,
          //We create a popup for each circleMarker to display the points and location
          //after the marker has been created and styled.
          onEachFeature: function(feature, layer) {
            layer.bindPopup("Points:" + points);
          }
    }).addTo(AllWines);
    // then we add the wine layer to our map
    AllWines.addTo(map);

 
// SECOND OVERLAY 
// naming data
let wine100Data = "https://raw.githubusercontent.com/saraegregg/Mod20_Group_Challenge/main/static/resources/100wines.csv";

// //Grabbing our GeoJSON data
d3.csv(wine100Data).then(function(csv) {
    //creating a GeoJSON layer with the retrieved data.
   console.log(csv)
   data = csv;
   addMarkers();
   
  

 function addMarkers() {
 data.forEach(function(d) {
   var marker = L.circleMarker([+d.lat, +d.lon]);
   marker.addTo(map);
 })
}

   function styleInfo(feature) {
       return {
           opacity: 1, 
           fillOpacity: 1,
           fillColor: "#ffae42",
           color: "#000000",
           radius: getRadius(points),
           stroke: true,
           weight: 0.5
       };
   }

   function getRadius(points) {
       if (points === 100) {
           return 1;
       }
           return points * 4;
       }
   
  
   L.geoJSON(data, {
        //style:myStyle
        // onEachFeature: function(feature,layer) {
       // layer.bindPopup(<h2>"Points:" + points)
       //}
       pointToLayer: function(feature, lat, lon) {
           console.log(data);
           return L.circleMarker(lat, lon);
         },
         //Set the style for each circleMarker using styleInfo function
         style: styleInfo,
         //We create a popup for each circleMarker to display the points and location
         //after the marker has been created and styled.
         onEachFeature: function(feature, layer) {
           layer.bindPopup("Points:" + points);
         }
   }).addTo(TopPointWines);
   // then we add the wine layer to our map
   TopPointWines.addTo(map);

   //OVER 3
   // naming data
let wine99Data = "https://raw.githubusercontent.com/saraegregg/Mod20_Group_Challenge/main/static/resources/99wines.csv";

// //Grabbing our GeoJSON data
d3.csv(wine99Data).then(function(csv) {
    //creating a GeoJSON layer with the retrieved data.
   console.log(csv)
   data = csv;
   addMarkers();
   
  

 function addMarkers() {
 data.forEach(function(d) {
   var marker = L.circleMarker([+d.lat, +d.lon]);
   marker.addTo(map);
 })
}

   function styleInfo(feature) {
       return {
           opacity: 1, 
           fillOpacity: 1,
           fillColor: "#ffae42",
           color: "#000000",
           radius: getRadius(points),
           stroke: true,
           weight: 0.5
       };
   }

   function getRadius(points) {
       if (points === 100) {
           return 1;
       }
           return points * 4;
       }
   
  
   L.geoJSON(data, {
        //style:myStyle
        // onEachFeature: function(feature,layer) {
       // layer.bindPopup(<h2>"Points:" + points)
       //}
       pointToLayer: function(feature, lat, lon) {
           console.log(data);
           return L.circleMarker(lat, lon);
         },
         //Set the style for each circleMarker using styleInfo function
         style: styleInfo,
         //We create a popup for each circleMarker to display the points and location
         //after the marker has been created and styled.
         onEachFeature: function(feature, layer) {
           layer.bindPopup("Points:" + points);
         }
   }).addTo(MidPointWines);
   // then we add the wine layer to our map
   MidPointWines.addTo(map);
  // OVERLAY 4
     // naming data
let wine98Data = "https://raw.githubusercontent.com/saraegregg/Mod20_Group_Challenge/main/static/resources/98wines.csv";

// //Grabbing our GeoJSON data
d3.csv(wine98Data).then(function(csv) {
    //creating a GeoJSON layer with the retrieved data.
   console.log(csv)
   data = csv;
   addMarkers();
   
  

 function addMarkers() {
 data.forEach(function(d) {
   var marker = L.circleMarker([+d.lat, +d.lon]);
   marker.addTo(map);
 })
}

   function styleInfo(feature) {
       return {
           opacity: 1, 
           fillOpacity: 1,
           fillColor: "#ffae42",
           color: "#000000",
           radius: getRadius(points),
           stroke: true,
           weight: 0.5
       };
   }

   function getRadius(points) {
       if (points === 100) {
           return 1;
       }
           return points * 4;
       }
   
  
   L.geoJSON(data, {
        //style:myStyle
        // onEachFeature: function(feature,layer) {
       // layer.bindPopup(<h2>"Points:" + points)
       //}
       pointToLayer: function(feature, lat, lon) {
           console.log(data);
           return L.circleMarker(lat, lon);
         },
         //Set the style for each circleMarker using styleInfo function
         style: styleInfo,
         //We create a popup for each circleMarker to display the points and location
         //after the marker has been created and styled.
         onEachFeature: function(feature, layer) {
           layer.bindPopup("Points:" + points);
         }
   }).addTo(LowPointWines);
   // then we add the wine layer to our map
   LowPointWines.addTo(map);
  
  });
});
});
});
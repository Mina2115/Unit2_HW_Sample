require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (Map, MapView, Layer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 12,
          center: [-90.1994, 38.6270]
        });

        var layer = Layer.fromPortalItem({
          portalItem: {
            // autocasts as new PortalItem()
            
        
          id: "013ed73e422c46d5b45d11dcde931007"
        }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }

        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });

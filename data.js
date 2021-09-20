var APP_DATA = {
  "scenes": [
    {
      "id": "0-terrace360a",
      "name": "Terrace360A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": -0.001560053846572984,
        "pitch": -0.005026353534587358,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.9391113102744217,
          "pitch": 0.022361583617396263,
          "rotation": 0,
          "target": "1-terrace360b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terrace360b",
      "name": "Terrace360B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.629830970637542,
          "pitch": 0.018999664344093503,
          "rotation": 0,
          "target": "0-terrace360a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Terrace-AK Block",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
let myJson = {
 
    "particles": {
        "number": {
          "value": 77,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#f2f6fa"
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 0,
            "color": "#0775a2"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1.5
        },
        "move": {
          "enable": true,
          "speed": 8.017060304327615,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 121.81158184520176,
            "line_linked": {
              "opacity": 0.6827735412913463
            }
          },
          "bubble": {
            "distance": 377.61590372012546,
            "size": 40,
            "duration": 1.3805312609122866,
            "opacity": 0.7633525795632644,
            "speed": 3
          },
          "repulse": {
            "distance": 178.65698670629592,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }

particlesJS('particles-js', myJson);
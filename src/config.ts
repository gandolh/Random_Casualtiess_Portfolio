const basePath= "/Random_Casualtiess_Portfolio/";

const animationPaths = {
  "2D": [
    {
      "name": "hands",
      "path": "2D\\hands"
    }
  ],
  "3Ds": [
    {
      "name": "3d_experiment_no1",
      "path": "3Ds\\3d_experiment_no1"
    },
    {
      "name": "3d_experiment_no2",
      "path": "3Ds\\3d_experiment_no2"
    },
    {
      "name": "3D_planets",
      "path": "3Ds\\3D_planets"
    }
  ],
  "Algorithms": [
    {
      "name": "dijkstra-visualiser",
      "path": "Algorithms\\dijkstra-visualiser"
    },
    {
      "name": "sort",
      "path": "Algorithms\\sort"
    }
  ],
  "Cellular_Automata": [
    {
      "name": "The_game_of_life",
      "path": "Cellular_Automata\\The_game_of_life"
    },
    {
      "name": "wolfram_CA",
      "path": "Cellular_Automata\\wolfram_CA"
    }
  ],
  "ComplexAnimations": [
    {
      "name": "CUTE_THING",
      "path": "ComplexAnimations\\CUTE_THING"
    },
    {
      "name": "genetic_algorithm_-_original",
      "path": "ComplexAnimations\\genetic_algorithm_-_original"
    },
    {
      "name": "particles",
      "path": "ComplexAnimations\\particles"
    },
    {
      "name": "perlinnoiseanimation",
      "path": "ComplexAnimations\\perlinnoiseanimation"
    },
    {
      "name": "post-impresionism",
      "path": "ComplexAnimations\\post-impresionism"
    },
    {
      "name": "purpleRain",
      "path": "ComplexAnimations\\purpleRain"
    },
    {
      "name": "static",
      "path": "ComplexAnimations\\static"
    },
    {
      "name": "stippling",
      "path": "ComplexAnimations\\stippling"
    },
    {
      "name": "voronoiMosaic",
      "path": "ComplexAnimations\\voronoiMosaic"
    },
    {
      "name": "waterTypePainting",
      "path": "ComplexAnimations\\waterTypePainting"
    }
  ],
  "Flowfields": [
    {
      "name": "flocking",
      "path": "Flowfields\\flocking"
    },
    {
      "name": "floodfillart",
      "path": "Flowfields\\floodfillart"
    },
    {
      "name": "flowfield",
      "path": "Flowfields\\flowfield"
    },
    {
      "name": "FlowfieldGenerator_development",
      "path": "Flowfields\\FlowfieldGenerator_development"
    },
    {
      "name": "flowfield_2.0",
      "path": "Flowfields\\flowfield_2.0"
    },
    {
      "name": "flowfield_2.0.1",
      "path": "Flowfields\\flowfield_2.0.1"
    },
    {
      "name": "flowfield_2.0.2",
      "path": "Flowfields\\flowfield_2.0.2"
    },
    {
      "name": "flowfield_2.0.3",
      "path": "Flowfields\\flowfield_2.0.3"
    }
  ],
  "L-SyStems": [
    {
      "name": "codingchallenge-L-systems",
      "path": "L-SyStems\\codingchallenge-L-systems"
    },
    {
      "name": "flower",
      "path": "L-SyStems\\flower"
    },
    {
      "name": "Maybe_razor_logo",
      "path": "L-SyStems\\Maybe_razor_logo"
    },
    {
      "name": "prison",
      "path": "L-SyStems\\prison"
    },
    {
      "name": "sierpinski_curved",
      "path": "L-SyStems\\sierpinski_curved"
    },
    {
      "name": "skyish",
      "path": "L-SyStems\\skyish"
    }
  ],
  "Math": [
    {
      "name": "Christmass_Tree",
      "path": "Math\\Christmass_Tree"
    },
    {
      "name": "mandelbrotGrowth",
      "path": "Math\\mandelbrotGrowth"
    },
    {
      "name": "mandelbrot_designed",
      "path": "Math\\mandelbrot_designed"
    },
    {
      "name": "math_text",
      "path": "Math\\math_text"
    },
    {
      "name": "percents",
      "path": "Math\\percents"
    },
    {
      "name": "proportions",
      "path": "Math\\proportions"
    },
    {
      "name": "recaman's_sequence",
      "path": "Math\\recaman's_sequence"
    },
    {
      "name": "SuperEllipse",
      "path": "Math\\SuperEllipse"
    },
    {
      "name": "tricky_geometry",
      "path": "Math\\tricky_geometry"
    }
  ],
  "opticalStuffs": [
    {
      "name": "rectoverlapping",
      "path": "opticalStuffs\\rectoverlapping"
    },
    {
      "name": "rectoverlapping2",
      "path": "opticalStuffs\\rectoverlapping2"
    },
    {
      "name": "rectRotate",
      "path": "opticalStuffs\\rectRotate"
    },
    {
      "name": "spideything",
      "path": "opticalStuffs\\spideything"
    }
  ],
  "Physics": [
    {
      "name": "Penduls",
      "path": "Physics\\Penduls"
    },
    {
      "name": "penduls_cute_animation",
      "path": "Physics\\penduls_cute_animation"
    }
  ],
  "Recursive": [
    {
      "name": "2dSuperShape",
      "path": "Recursive\\2dSuperShape"
    },
    {
      "name": "Art",
      "path": "Recursive\\Art"
    },
    {
      "name": "fractalTree",
      "path": "Recursive\\fractalTree"
    },
    {
      "name": "koch_curve",
      "path": "Recursive\\koch_curve"
    },
    {
      "name": "let_it_snow",
      "path": "Recursive\\let_it_snow"
    },
    {
      "name": "recursive_interesting_pattern",
      "path": "Recursive\\recursive_interesting_pattern"
    },
    {
      "name": "silky_stuff",
      "path": "Recursive\\silky_stuff"
    },
    {
      "name": "snowflake_pattern",
      "path": "Recursive\\snowflake_pattern"
    }
  ],
  "SmallAnimations": [
    {
      "name": "butterfly_generator",
      "path": "SmallAnimations\\butterfly_generator"
    },
    {
      "name": "circleoverlapping",
      "path": "SmallAnimations\\circleoverlapping"
    },
    {
      "name": "circle_growing",
      "path": "SmallAnimations\\circle_growing"
    },
    {
      "name": "filling_circles",
      "path": "SmallAnimations\\filling_circles"
    },
    {
      "name": "futuristic_animation",
      "path": "SmallAnimations\\futuristic_animation"
    },
    {
      "name": "inherit_experiment",
      "path": "SmallAnimations\\inherit_experiment"
    },
    {
      "name": "mitosis",
      "path": "SmallAnimations\\mitosis"
    },
    {
      "name": "optical_ilusion",
      "path": "SmallAnimations\\optical_ilusion"
    },
    {
      "name": "polar_coordinates_experiment",
      "path": "SmallAnimations\\polar_coordinates_experiment"
    },
    {
      "name": "randomwalker2",
      "path": "SmallAnimations\\randomwalker2"
    },
    {
      "name": "spray",
      "path": "SmallAnimations\\spray"
    },
    {
      "name": "stochastic_search",
      "path": "SmallAnimations\\stochastic_search"
    },
    {
      "name": "triangleThing",
      "path": "SmallAnimations\\triangleThing"
    }
  ],
  "Wallpapers": [
    {
      "name": "generativeArtWork",
      "path": "Wallpapers\\generativeArtWork"
    },
    {
      "name": "gridOfGridOfGridOfshapes",
      "path": "Wallpapers\\gridOfGridOfGridOfshapes"
    },
    {
      "name": "Kmeans",
      "path": "Wallpapers\\Kmeans"
    },
    {
      "name": "perlinnoise",
      "path": "Wallpapers\\perlinnoise"
    },
    {
      "name": "polar_coordinates_and_shapes",
      "path": "Wallpapers\\polar_coordinates_and_shapes"
    },
    {
      "name": "sunrise",
      "path": "Wallpapers\\sunrise"
    },
    {
      "name": "truchet_tiles_1",
      "path": "Wallpapers\\truchet_tiles_1"
    },
    {
      "name": "truchet_tiles_2",
      "path": "Wallpapers\\truchet_tiles_2"
    },
    {
      "name": "truchet_tiles_3",
      "path": "Wallpapers\\truchet_tiles_3"
    }
  ]
};


const sortedObj = Object.fromEntries(
  Object.entries(animationPaths).sort(([_1, value1], [_2, value2]) => value1.length - value2.length)
);

const config = {
    AnimationPath: sortedObj as AnimationPaths,
    basePath: basePath as string
};

export default config;



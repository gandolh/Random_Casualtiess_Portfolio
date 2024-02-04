const basePath= "/Random_Casualtiess_Portfolio";

const animationPaths = {
  "2d": [
    {
      "name": "hands",
      "path": "2d\\hands"
    }
  ],
  "3ds": [
    {
      "name": "3d_experiment_no1",
      "path": "3ds\\3d_experiment_no1"
    },
    {
      "name": "3d_experiment_no2",
      "path": "3ds\\3d_experiment_no2"
    },
    {
      "name": "3d_planets",
      "path": "3ds\\3d_planets"
    }
  ],
  "algorithms": [
    {
      "name": "dijkstra-visualiser",
      "path": "algorithms\\dijkstra-visualiser"
    },
    {
      "name": "sort",
      "path": "algorithms\\sort"
    }
  ],
  "cellular_automata": [
    {
      "name": "the_game_of_life",
      "path": "cellular_automata\\the_game_of_life"
    },
    {
      "name": "wolfram_ca",
      "path": "cellular_automata\\wolfram_ca"
    }
  ],
  "complexanimations": [
    {
      "name": "cute_thing",
      "path": "complexanimations\\cute_thing"
    },
    {
      "name": "genetic_algorithm_original",
      "path": "complexanimations\\genetic_algorithm_original"
    },
    {
      "name": "particles",
      "path": "complexanimations\\particles"
    },
    {
      "name": "perlinnoiseanimation",
      "path": "complexanimations\\perlinnoiseanimation"
    },
    {
      "name": "post-impresionism",
      "path": "complexanimations\\post-impresionism"
    },
    {
      "name": "post-impresionism",
      "path": "complexanimations\\post-impresionism\\postimpresionismprocessed"
    },
    {
      "name": "postimpresionismprocessed",
      "path": "complexanimations\\post-impresionism\\postimpresionismprocessed"
    },
    {
      "name": "purplerain",
      "path": "complexanimations\\purplerain"
    },
    {
      "name": "static",
      "path": "complexanimations\\static"
    },
    {
      "name": "stippling",
      "path": "complexanimations\\stippling"
    },
    {
      "name": "stippling",
      "path": "complexanimations\\stippling\\processed_images_and_assets"
    },
    {
      "name": "processed_images_and_assets",
      "path": "complexanimations\\stippling\\processed_images_and_assets"
    },
    {
      "name": "voronoimosaic",
      "path": "complexanimations\\voronoimosaic"
    },
    {
      "name": "voronoimosaic",
      "path": "complexanimations\\voronoimosaic\\processedimages"
    },
    {
      "name": "processedimages",
      "path": "complexanimations\\voronoimosaic\\processedimages"
    },
    {
      "name": "watertypepainting",
      "path": "complexanimations\\watertypepainting"
    }
  ],
  "flowfields": [
    {
      "name": "flocking",
      "path": "flowfields\\flocking"
    },
    {
      "name": "floodfillart",
      "path": "flowfields\\floodfillart"
    },
    {
      "name": "floodfillart",
      "path": "flowfields\\floodfillart\\floodfill1080x1080"
    },
    {
      "name": "floodfill1080x1080",
      "path": "flowfields\\floodfillart\\floodfill1080x1080"
    },
    {
      "name": "floodfillart",
      "path": "flowfields\\floodfillart\\floodfillwallpapers"
    },
    {
      "name": "floodfillwallpapers",
      "path": "flowfields\\floodfillart\\floodfillwallpapers"
    },
    {
      "name": "flowfield",
      "path": "flowfields\\flowfield"
    },
    {
      "name": "flowfieldgenerator_development",
      "path": "flowfields\\flowfieldgenerator_development"
    },
    {
      "name": "flowfieldgenerator_development",
      "path": "flowfields\\flowfieldgenerator_development\\js"
    },
    {
      "name": "js",
      "path": "flowfields\\flowfieldgenerator_development\\js"
    },
    {
      "name": "flowfieldgenerator_development",
      "path": "flowfields\\flowfieldgenerator_development\\js\\libraries"
    },
    {
      "name": "js",
      "path": "flowfields\\flowfieldgenerator_development\\js\\libraries"
    },
    {
      "name": "libraries",
      "path": "flowfields\\flowfieldgenerator_development\\js\\libraries"
    },
    {
      "name": "flowfieldgenerator_development",
      "path": "flowfields\\flowfieldgenerator_development\\presets"
    },
    {
      "name": "presets",
      "path": "flowfields\\flowfieldgenerator_development\\presets"
    },
    {
      "name": "flowfield_2.0",
      "path": "flowfields\\flowfield_2.0"
    },
    {
      "name": "flowfield_2.0.1",
      "path": "flowfields\\flowfield_2.0.1"
    },
    {
      "name": "flowfield_2.0.2",
      "path": "flowfields\\flowfield_2.0.2"
    },
    {
      "name": "flowfield_2.0.3",
      "path": "flowfields\\flowfield_2.0.3"
    },
    {
      "name": "_flowfield_editor_art",
      "path": "flowfields\\_flowfield_editor_art"
    },
    {
      "name": "_flowfield_editor_art",
      "path": "flowfields\\_flowfield_editor_art\\js"
    },
    {
      "name": "js",
      "path": "flowfields\\_flowfield_editor_art\\js"
    },
    {
      "name": "_flowfield_editor_art",
      "path": "flowfields\\_flowfield_editor_art\\js\\libraries"
    },
    {
      "name": "js",
      "path": "flowfields\\_flowfield_editor_art\\js\\libraries"
    },
    {
      "name": "libraries",
      "path": "flowfields\\_flowfield_editor_art\\js\\libraries"
    },
    {
      "name": "_flowfield_editor_art",
      "path": "flowfields\\_flowfield_editor_art\\presets"
    },
    {
      "name": "presets",
      "path": "flowfields\\_flowfield_editor_art\\presets"
    }
  ],
  "l-systems": [
    {
      "name": "codingchallenge-l-systems",
      "path": "l-systems\\codingchallenge-l-systems"
    },
    {
      "name": "flower",
      "path": "l-systems\\flower"
    },
    {
      "name": "maybe_razor_logo",
      "path": "l-systems\\maybe_razor_logo"
    },
    {
      "name": "prison",
      "path": "l-systems\\prison"
    },
    {
      "name": "sierpinski_curved",
      "path": "l-systems\\sierpinski_curved"
    },
    {
      "name": "skyish",
      "path": "l-systems\\skyish"
    }
  ],
  "math": [
    {
      "name": "christmass_tree",
      "path": "math\\christmass_tree"
    },
    {
      "name": "mandelbrotgrowth",
      "path": "math\\mandelbrotgrowth"
    },
    {
      "name": "mandelbrot_designed",
      "path": "math\\mandelbrot_designed"
    },
    {
      "name": "math_text",
      "path": "math\\math_text"
    },
    {
      "name": "percents",
      "path": "math\\percents"
    },
    {
      "name": "proportions",
      "path": "math\\proportions"
    },
    {
      "name": "recaman's_sequence",
      "path": "math\\recaman's_sequence"
    },
    {
      "name": "superellipse",
      "path": "math\\superellipse"
    },
    {
      "name": "tricky_geometry",
      "path": "math\\tricky_geometry"
    }
  ],
  "opticalstuffs": [
    {
      "name": "rectoverlapping",
      "path": "opticalstuffs\\rectoverlapping"
    },
    {
      "name": "rectoverlapping2",
      "path": "opticalstuffs\\rectoverlapping2"
    },
    {
      "name": "rectrotate",
      "path": "opticalstuffs\\rectrotate"
    },
    {
      "name": "spideything",
      "path": "opticalstuffs\\spideything"
    }
  ],
  "physics": [
    {
      "name": "penduls",
      "path": "physics\\penduls"
    },
    {
      "name": "penduls_cute_animation",
      "path": "physics\\penduls_cute_animation"
    }
  ],
  "recursive": [
    {
      "name": "2dsupershape",
      "path": "recursive\\2dsupershape"
    },
    {
      "name": "art",
      "path": "recursive\\art"
    },
    {
      "name": "fractaltree",
      "path": "recursive\\fractaltree"
    },
    {
      "name": "koch_curve",
      "path": "recursive\\koch_curve"
    },
    {
      "name": "let_it_snow",
      "path": "recursive\\let_it_snow"
    },
    {
      "name": "recursive_interesting_pattern",
      "path": "recursive\\recursive_interesting_pattern"
    },
    {
      "name": "silky_stuff",
      "path": "recursive\\silky_stuff"
    },
    {
      "name": "snowflake_pattern",
      "path": "recursive\\snowflake_pattern"
    }
  ],
  "smallanimations": [
    {
      "name": "butterfly_generator",
      "path": "smallanimations\\butterfly_generator"
    },
    {
      "name": "circleoverlapping",
      "path": "smallanimations\\circleoverlapping"
    },
    {
      "name": "circle_growing",
      "path": "smallanimations\\circle_growing"
    },
    {
      "name": "filling_circles",
      "path": "smallanimations\\filling_circles"
    },
    {
      "name": "futuristic_animation",
      "path": "smallanimations\\futuristic_animation"
    },
    {
      "name": "inherit_experiment",
      "path": "smallanimations\\inherit_experiment"
    },
    {
      "name": "mitosis",
      "path": "smallanimations\\mitosis"
    },
    {
      "name": "optical_ilusion",
      "path": "smallanimations\\optical_ilusion"
    },
    {
      "name": "polar_coordinates_experiment",
      "path": "smallanimations\\polar_coordinates_experiment"
    },
    {
      "name": "randomwalker2",
      "path": "smallanimations\\randomwalker2"
    },
    {
      "name": "spray",
      "path": "smallanimations\\spray"
    },
    {
      "name": "stochastic_search",
      "path": "smallanimations\\stochastic_search"
    },
    {
      "name": "trianglething",
      "path": "smallanimations\\trianglething"
    }
  ],
  "wallpapers": [
    {
      "name": "generativeartwork",
      "path": "wallpapers\\generativeartwork"
    },
    {
      "name": "gridofgridofgridofshapes",
      "path": "wallpapers\\gridofgridofgridofshapes"
    },
    {
      "name": "kmeans",
      "path": "wallpapers\\kmeans"
    },
    {
      "name": "perlinnoise",
      "path": "wallpapers\\perlinnoise"
    },
    {
      "name": "polar_coordinates_and_shapes",
      "path": "wallpapers\\polar_coordinates_and_shapes"
    },
    {
      "name": "sunrise",
      "path": "wallpapers\\sunrise"
    },
    {
      "name": "truchet_tiles_1",
      "path": "wallpapers\\truchet_tiles_1"
    },
    {
      "name": "truchet_tiles_2",
      "path": "wallpapers\\truchet_tiles_2"
    },
    {
      "name": "truchet_tiles_3",
      "path": "wallpapers\\truchet_tiles_3"
    }
  ],
  "_some_vangogh_style_assets": [
    {
      "name": "clouds",
      "path": "_some_vangogh_style_assets\\clouds"
    },
    {
      "name": "flowfield_2.0.3",
      "path": "_some_vangogh_style_assets\\flowfield_2.0.3"
    },
    {
      "name": "product",
      "path": "_some_vangogh_style_assets\\product"
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


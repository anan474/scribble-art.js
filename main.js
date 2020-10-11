const { Image } = require("image-js");

/**
 * This returns the array on which will be drawn.
 */
function get_empty_white_canvas(size_x = 1920, size_y = 1080) {
  const img = [];
  for (let x = 0; x <= size_x; x++) {
    img.push([]);
    for (let y = 0; y <= size_y; y++) {
      img[x].push(255);
    }
  }
  return img;
}

/**
 * The original image is resized and turned into a grayscale image.
 *
 * @param   {Image}  source_image  Loaded source image
 * @param   {Float}  scale_factor  Scale image to a factor
 *
 * @return  {Image}                Greyed and resized Image
 */
function get_prepared_image(source_image, scale_factor) {
  let image = source_image.grey().resize({
    // width: Math.round(scale_factor * image.width),
    // height: Math.round(scale_factor * image.height),
    factor: scale_factor,
  });
  return image;
}

/**
 *     All layers have different threshold values.
    I found the results to be satisfying if the values obey
    a power law. The prefactor and the amplitude are
    defined in the options file.
 *
 * @param   {Number}  no_of_layers  No of layers
 * @param   {Number}  exponent      Exponent constant   
 * @param   {Number}  prefactor     Prevactor constant
 *
 * @return  {Array}                Point treshold for each layer
 */
function get_point_thresholds(no_of_layers, exponent, prefactor) {
  let point_treshold = [];

  for (let x in no_of_layers) {
    point_treshold.push(Math.pow(x, exponent) * prefactor);
  }
  return point_treshold;
}

function get_layer_points(current_max, point_threshold, prepared_image) {
  const white_value = 255;
  let layer = prepared_image.clone();

  //   layer.data[0] = 0;

  for (let x in layer.data) {
    if (layer.data[x] <= current_max) {
      layer.data[x] = 0;
    } else {
      layer.data[x] = white_value;
    }
  }

  // create random matrix
  const random_matrix = [];
  for (let x = 0; x <= prepared_image.width; x++) {
    random_matrix.push([]);
    for (let y = 0; y <= prepared_image.height; y++) {
      random_matrix[x].push(Math.round(Math.random()));
    }
  }

  for (let x in layer.data) {
    if (random_matrix[x] <= current_max) {
      layer.data[x] = white_value;
    }
  }
}

async function execute() {
  let image = await Image.load("z.jpg");
  get_layer_points(0, 0, image);
}

execute();

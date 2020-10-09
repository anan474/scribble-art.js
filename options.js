export const configs = {
  INPUT_OUTPUT: {
    input_image: "/home/anan474/Downloads/creative-pic/alvin6.jpeg",
    create_png: 1,
    create_svg: 0,
    create_video: 0,
    show_step_images: 0,
    step_image_height: 800,
  },
  VIDEO_PARAMETERS: {
    fps: 15,
    drawing_duration: 8,
    duration_of_final_image: 1.0,
    active_line_color: [0, 216, 216],
    seconds_lines_remain_colored: 0.2,
    height: 1920,
    width: 1080,
  },
  DRAWING: {
    no_of_layers: 30,
    max_line_length_factor: 0.1,
    image_scale_factor: 0.8,
    point_thresholds_prefactor: 0.00004,
    point_thresholds_exponent: 2.6,
    random_seed: 800002,
  },
};

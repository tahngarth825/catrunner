const Constants = {
  BACKGROUND: "#000000",
  DIM_X: 550,
  DIM_Y: 550,
  FPS: 32,
  NUM_CARS: 10,
  MAX_LVL: 3,

  //leave space for header
  BOARD_LIMIT: 0,

  //placed here so a car type can be made based on level
  TYPES: {
    CAR: {
      LEFT_IMG: "./img/car_left.png",
      RIGHT_IMG: "./img/car_right.png",
      SPEED: 1
    },
    FAST_CAR: {
      LEFT_IMG: "./img/car_fast_left.png",
      RIGHT_IMG: "./img/car_fast_right.png",
      SPEED: 2
    },
    SUPER_FAST_CAR: {
      LEFT_IMG: "./img/car_superfast_left.png",
      RIGHT_IMG: "./img/car_superfast_right.png",
      SPEED: 3
    }
  },

  //STREET rows
  ROWS: {
    1: [1,3,5,7,9],
    2: [1,2,4,5,7,8,9],
    3: [1,2,3,4,5,6,7,8,9]
  },

  //Cannot reference this.DIM_X for some reason
  START_POS: [225, 500],
  REWARD_POS: [225, 0],
  REWARD: ["can food", "cake", "home"],
  REWARD_URL: ["./img/can_food", "./img/cake", "./img/home"],
  WIN_URL: "./img/pusheen_with_mom.jpg",
  TREE_URL: "./img/tree.png",
  TREE_POSITIONS: [[[225, 200]],[[225, 200]],[[]]]
};

module.exports = Constants;

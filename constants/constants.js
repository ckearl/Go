// coordinate labels
export const COORDINATE_LABEL_FONT_SIZE = 10;
// prettier-ignore
export const COORDINATE_LABEL_LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M',
];
// prettier-ignore
export const COORDINATE_LABEL_NUMBERS = [
  '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '10', '11', '12', '13',
];

// board dots
export const BOARD_DOTS = {
  7: [
    {x: 2, y: 2},
    {x: 4, y: 2},
    {x: 2, y: 4},
    {x: 4, y: 4},
  ],
  9: [
    {x: 2, y: 2},
    {x: 2, y: 6},
    {x: 4, y: 4},
    {x: 6, y: 2},
    {x: 6, y: 6},
  ],
  11: [
    {x: 3, y: 3},
    {x: 3, y: 7},
    {x: 5, y: 5},
    {x: 7, y: 3},
    {x: 7, y: 7},
  ],
  13: [
    {x: 3, y: 3},
    {x: 3, y: 9},
    {x: 6, y: 6},
    {x: 9, y: 3},
    {x: 9, y: 9},
  ],
};

// piece dish, piles in dishes
export const PILE_VERTICAL_CENTER = 0.35;
export const PILE_DISH_VERTICAL_CENTER = 0.625;
export const PILE_RIGHT_POSITION = 0.25;
export const PILE_LEFT_POSITION = 0.75;

// piece animations
export const PIECE_ANIMATION_DAMPING = 15;
export const PIECE_ANIMATION_STIFFNESS = 150;

// board width pct of screen
export const BOARD_WIDTH_DIVISOR = 0.9;

// piece sizes based on board dimensions
export const PIECE_SIZE_MAP = {
  7: 48,
  9: 40,
  11: 33,
  13: 27,
};

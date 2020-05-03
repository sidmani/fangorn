// distance from baseline to bottom edge of bounding box for Math-Italic font
const BASELINE_TO_BOTTOM = 0.5;

// subdivisions per em unit (here set to 2 * 24px)
// things that are very thin (bars) will be aligned to pixels
// to prevent inconsistent thickness
const DIV_PER_EM = 48;

// Distance between fraction bar and numerator bottom, denomirator
// const FRAC_BAR_PADDING = 20 / DIV_PER_EM;
const FRAC_BAR_PADDING = 0.4;

// Height of the axis above the baseline (where the frac bar is placed)
const AXIS_HEIGHT = 0.255;

// superscript baseline
// TODO: find some data on what this should be
const SUPERSCRIPT_BASELINE = 0.5;

// padding before/after parentheses, fractions
const INLINE_PADDING = 0.125;

// padding after function names
const FUNCTION_PADDING = 0.2;

// single-script font size
const SCRIPT_SIZE = 0.7;

// double-script font size (in terms of the root font size)
// will NOT be 0.5 * 0.7 = 0.35
const SCRIPT_SCRIPT_SIZE = 0.6;

// spacing around +, -, *
const BINOP_SPACING = 2 * INLINE_PADDING;

// The thickness of bars in fractions, the top of radicals
const BAR_THICKNESS = 2 / DIV_PER_EM;

export {
  BASELINE_TO_BOTTOM,
  BAR_THICKNESS,
  FRAC_BAR_PADDING,
  AXIS_HEIGHT,
  SUPERSCRIPT_BASELINE,
  INLINE_PADDING,
  FUNCTION_PADDING,
  SCRIPT_SIZE,
  SCRIPT_SCRIPT_SIZE,
  BINOP_SPACING,
};

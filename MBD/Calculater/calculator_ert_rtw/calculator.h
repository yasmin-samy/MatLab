/*
 * File: calculator.h
 *
 * Code generated for Simulink model 'calculator'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Mar 21 16:58:52 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_calculator_h_
#define RTW_HEADER_calculator_h_
#include <stddef.h>
#include <string.h>
#ifndef calculator_COMMON_INCLUDES_
# define calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* calculator_COMMON_INCLUDES_ */

#include "calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Invariant block signals (auto storage) */
typedef struct {
  const real_T Subtract;               /* '<Root>/Subtract' */
  const real_T Product;                /* '<Root>/Product' */
  const real_T Divide;                 /* '<Root>/Divide' */
} ConstB_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Out2;                         /* '<Root>/Out2' */
  real_T Out3;                         /* '<Root>/Out3' */
  real_T Out4;                         /* '<Root>/Out4' */
} ExtY_calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_calculator_T {
  const char_T * volatile errorStatus;
};

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_calculator_T calculator_Y;
extern const ConstB_calculator_T calculator_ConstB;/* constant block i/o */

/* Model entry point functions */
extern void calculator_initialize(void);
extern void calculator_step(void);
extern void calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_calculator_T *const calculator_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Add' : Unused code path elimination
 * Block '<Root>/Display' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'calculator'
 */
#endif                                 /* RTW_HEADER_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */

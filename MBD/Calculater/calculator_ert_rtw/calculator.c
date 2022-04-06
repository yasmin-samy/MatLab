/*
 * File: calculator.c
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

#include "calculator.h"
#include "calculator_private.h"

/* External outputs (root outports fed by signals with auto storage) */
ExtY_calculator_T calculator_Y;

/* Real-time model */
RT_MODEL_calculator_T calculator_M_;
RT_MODEL_calculator_T *const calculator_M = &calculator_M_;

/* Model step function */
void calculator_step(void)
{
  /* (no output/update code required) */
}

/* Model initialize function */
void calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(calculator_M, (NULL));

  /* external outputs */
  (void) memset((void *)&calculator_Y, 0,
                sizeof(ExtY_calculator_T));

  /* ConstCode for Outport: '<Root>/Out2' */
  calculator_Y.Out2 = calculator_ConstB.Subtract;

  /* ConstCode for Outport: '<Root>/Out3' */
  calculator_Y.Out3 = calculator_ConstB.Product;

  /* ConstCode for Outport: '<Root>/Out4' */
  calculator_Y.Out4 = calculator_ConstB.Divide;
}

/* Model terminate function */
void calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */

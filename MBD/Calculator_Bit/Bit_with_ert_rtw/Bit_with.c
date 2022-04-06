/*
 * File: Bit_with.c
 *
 * Code generated for Simulink model 'Bit_with'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Apr 02 16:17:38 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Bit_with.h"
#include "Bit_with_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Bit_with_T Bit_with_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Bit_with_T Bit_with_Y;

/* Real-time model */
RT_MODEL_Bit_with_T Bit_with_M_;
RT_MODEL_Bit_with_T *const Bit_with_M = &Bit_with_M_;

/* Model step function */
void Bit_with_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator'
   */
  Bit_with_Y.Out1 = (Bit_with_U.In1 && Bit_with_U.In2);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator1'
   */
  Bit_with_Y.Out2 = (Bit_with_U.In1 || Bit_with_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator5'
   */
  Bit_with_Y.Out3 = !(boolean_T)(Bit_with_U.In1 ^ Bit_with_U.In2);

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator3'
   */
  Bit_with_Y.Out4 = Bit_with_U.In1 ^ Bit_with_U.In2;

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/In1'
   *  S-Function (sfix_bitop): '<Root>/Bitwise Operator4'
   */
  Bit_with_Y.Out5 = !Bit_with_U.In1;
}

/* Model initialize function */
void Bit_with_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Bit_with_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Bit_with_U, 0,
                sizeof(ExtU_Bit_with_T));

  /* external outputs */
  (void) memset((void *)&Bit_with_Y, 0,
                sizeof(ExtY_Bit_with_T));
}

/* Model terminate function */
void Bit_with_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */

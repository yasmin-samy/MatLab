/*
 * File: Task2_Lec2.c
 *
 * Code generated for Simulink model 'Task2_Lec2'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 02:00:27 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Task2_Lec2.h"
#include "Task2_Lec2_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Task2_Lec2_T Task2_Lec2_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Task2_Lec2_T Task2_Lec2_Y;

/* Real-time model */
RT_MODEL_Task2_Lec2_T Task2_Lec2_M_;
RT_MODEL_Task2_Lec2_T *const Task2_Lec2_M = &Task2_Lec2_M_;

/* Model step function */
void Task2_Lec2_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Add'
   */
  Task2_Lec2_Y.Out1 = Task2_Lec2_U.In1 + Task2_Lec2_U.In2;

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<S1>/Subtract'
   */
  Task2_Lec2_Y.Out2 = Task2_Lec2_U.In1 - Task2_Lec2_U.In2;

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Product'
   */
  Task2_Lec2_Y.Out3 = Task2_Lec2_U.In1 * Task2_Lec2_U.In2;

  /* Outport: '<Root>/Out4' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<S1>/Divide'
   */
  Task2_Lec2_Y.Out4 = Task2_Lec2_U.In1 / Task2_Lec2_U.In2;
}

/* Model initialize function */
void Task2_Lec2_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Task2_Lec2_M, (NULL));

  /* external inputs */
  (void) memset((void *)&Task2_Lec2_U, 0,
                sizeof(ExtU_Task2_Lec2_T));

  /* external outputs */
  (void) memset((void *)&Task2_Lec2_Y, 0,
                sizeof(ExtY_Task2_Lec2_T));
}

/* Model terminate function */
void Task2_Lec2_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */

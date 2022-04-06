/*
 * File: Task5.c
 *
 * Code generated for Simulink model 'Task5'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Wed Apr 06 01:38:38 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Task5.h"
#include "Task5_private.h"

/* Block signals (auto storage) */
B_Task5_T Task5_B;

/* Block states (auto storage) */
DW_Task5_T Task5_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Task5_T Task5_Y;

/* Real-time model */
RT_MODEL_Task5_T Task5_M_;
RT_MODEL_Task5_T *const Task5_M = &Task5_M_;

/* Model step function */
void Task5_step(void)
{
  /* Chart: '<Root>/Chart' incorporates:
   *  Constant: '<Root>/Constant'
   *  Inport: '<S2>/In1'
   */
  if (Task5_DW.temporalCounter_i1 < 3U) {
    Task5_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (Task5_DW.is_active_c3_Task5 == 0U) {
    /* Entry: Chart */
    Task5_DW.is_active_c3_Task5 = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    Task5_DW.temporalCounter_i1 = 0U;
  } else {
    /* During 'call': '<S1>:1' */
    if (Task5_DW.temporalCounter_i1 >= 1U) {
      /* Outputs for Function Call SubSystem: '<Root>/Function-Call Subsystem' */
      /* Transition: '<S1>:4' */
      /* Event: '<S1>:6' */
      Task5_B.In1 = 0.0;

      /* End of Outputs for SubSystem: '<Root>/Function-Call Subsystem' */
      Task5_DW.temporalCounter_i1 = 0U;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  Task5_Y.Out1 = Task5_B.In1;
}

/* Model initialize function */
void Task5_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Task5_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &Task5_B), 0,
                sizeof(B_Task5_T));

  /* states (dwork) */
  (void) memset((void *)&Task5_DW, 0,
                sizeof(DW_Task5_T));

  /* external outputs */
  Task5_Y.Out1 = 0.0;

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Task5_DW.temporalCounter_i1 = 0U;
  Task5_DW.is_active_c3_Task5 = 0U;
}

/* Model terminate function */
void Task5_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */

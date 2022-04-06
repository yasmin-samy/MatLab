/*
 * File: Topic_6.c
 *
 * Code generated for Simulink model 'Topic_6'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Apr 05 20:44:18 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "Topic_6.h"
#include "Topic_6_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Topic_6_T Topic_6_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Topic_6_T Topic_6_Y;

/* Real-time model */
RT_MODEL_Topic_6_T Topic_6_M_;
RT_MODEL_Topic_6_T *const Topic_6_M = &Topic_6_M_;

/* Model step function */
void Topic_6_step(void)
{
  int32_T rtb_flag;

  /* Chart: '<Root>/CheckSwitchStatus' incorporates:
   *  Inport: '<Root>/In1'
   */
  /* Gateway: CheckSwitchStatus */
  /* During: CheckSwitchStatus */
  /* Entry Internal: CheckSwitchStatus */
  /* Transition: '<S1>:1' */
  /*  Check Button */
  /* '<S1>:2:1' sf_internal_predicateOutput = ... */
  /* '<S1>:2:1' Switch==1; */
  if (Topic_6_U.In1 == 1.0) {
    /* Transition: '<S1>:2' */
    /* Transition: '<S1>:4' */
    /* '<S1>:4:1' flag=1; */
    rtb_flag = 1;

    /* Transition: '<S1>:5' */
  } else {
    /* Transition: '<S1>:3' */
    /* '<S1>:3:1' flag=0; */
    rtb_flag = 0;
  }

  /* End of Chart: '<Root>/CheckSwitchStatus' */

  /* Chart: '<Root>/LedState' */
  /* Transition: '<S1>:6' */
  /* Gateway: LedState */
  /* During: LedState */
  /* Entry Internal: LedState */
  /* Transition: '<S2>:1' */
  /*  LecState */
  /* '<S2>:2:1' sf_internal_predicateOutput = ... */
  /* '<S2>:2:1' LedSt; */
  if (rtb_flag != 0) {
    /* Outport: '<Root>/Out1' */
    /* Transition: '<S2>:2' */
    /* Transition: '<S2>:4' */
    /* '<S2>:4:1' Led=1; */
    Topic_6_Y.Out1 = 1.0;

    /* Transition: '<S2>:5' */
  } else {
    /* Outport: '<Root>/Out1' */
    /* Transition: '<S2>:3' */
    /* '<S2>:3:1' Led=0; */
    Topic_6_Y.Out1 = 0.0;
  }

  /* End of Chart: '<Root>/LedState' */
  /* Transition: '<S2>:6' */
}

/* Model initialize function */
void Topic_6_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Topic_6_M, (NULL));

  /* external inputs */
  Topic_6_U.In1 = 0.0;

  /* external outputs */
  Topic_6_Y.Out1 = 0.0;
}

/* Model terminate function */
void Topic_6_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
